const express = require("express");
const cors = require("cors");
const ejs = require("ejs");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const app = express();

const { formatTime } = require("./src/utils");

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!(email && password)) {
        res.status(400).json({
            error: "Malformed parameters",
        });
        return;
    }

    const db = app.get("db");

    db.get("SELECT * FROM Users WHERE email LIKE ?", [email], (err, row) => {
        if (err) {
            console.log("An error occurred while fetching the user!");
            console.error(err);
            res.status(500).json({
                error: "An error occurred while fetching the user!",
            });
            return;
        }

        if (!row) {
            res.status(404).json({
                error: "User not found!",
            });
            return;
        }

        if (bcrypt.compareSync(password, row.password)) {
            res.status(200).json({
                message: "Login Successfull!",
                email,
                full_name: row.full_name
            });
            return;
        }

        res.status(401).json({
            error: "Incorrect Password!",
        });
    });
});

app.post("/register", (req, res) => {
    const { full_name, email, password } = req.body;

    if (!(full_name && email && password)) {
        res.status(400).json({
            error: "Please provide full_name, email, and password",
        });
        return;
    }

    const db = app.get("db");
    
    db.get("SELECT * FROM Users WHERE email LIKE ?", [email], (row) => {
        if (row) {
            res.status(400).json({
                error: "User already exists!",
            });
            return;
        }
        
        const hashedPassword = bcrypt.hashSync(password, 10);

        db.run(
            "INSERT INTO Users VALUES(?, ?, ?)",
            [email, hashedPassword, full_name],
            (err) => {
                if (err) {
                    console.log("An error occurred while creating user!");
                    console.error(err);
                    res.status(500).json({
                        error: "An error occurred while creating user!",
                    });
                    return;
                }

                res.status(201).json({
                    message: "Created user successfully!",
                    email,
                });
            }
        );
    });
});

app.post("/generate/rent", async (req, res) => {
    const {
        nameOfLandlord,
        fatherName,
        address,
        nameOfTenant,
        propertyNumber,
        rent,
        dateOfCommencement,
        place,
    } = req.body;

    const stamp = Date.now();
    const formattedDate = formatTime(stamp);

    const html = await ejs.renderFile("./templates/rent.ejs", {
        nameOfLandlord,
        fatherName,
        address,
        nameOfTenant,
        propertyNumber,
        rent,
        dateOfCommencement,
        place,
        formattedDate,
    });

    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`);

    // Init DB
    const db = new sqlite3.Database("./db.sqlite3");
    app.set("db", db);

    db.run(
        "CREATE TABLE IF NOT EXISTS Users(email TEXT NOT NULL PRIMARY KEY, password TEXT NOT NULL, full_name TEXT NOT NULL)"
    );

    console.log("Initiated DB!");
});
