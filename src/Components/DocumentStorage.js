import React, { useState } from "react";
// import { create as ipfsHttpClient } from "ipfs-http-client";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

const DocumentStorage = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [error, setError] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [file, setFile] = useState(null);

  const navigation = [
    { name: "Expert Consultation", href: "/expertconsultation" },
    { name: "Generate Legal Documents", href: "/GenerateLegalDocuments" },
    { name: "Chat with Bot", href: "/chatwithbot" },
    { name: "Document Storage", href: "/documentstorage" },
  ];

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Load the API key from environment variables
  const apiKey = process.env.REACT_APP_PINATA_API_KEY;
  console.log(apiKey);
  async function submitForm(e) {
    try {
      const data = new FormData();
      data.append("file", file);

      const pinataMetadata = JSON.stringify({
        name: "TestFile",
      });
      data.append("pinataMetadata", pinataMetadata);

      const pinataOptions = JSON.stringify({
        cidVersion: 1,
      });
      data.append("pinataOptions", pinataOptions);

      for (const pair of data.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      // return;

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      console.log(res);
      const json = await res.json();
      console.log(json)
      console.log(`https://coral-adverse-dove-941.mypinata.cloud/ipfs/${json.IpfsHash}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-indigo-200 h-screen">
      <header className=" inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-0 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center">
            <Link to="/">
              <img
                className="h-24 w-24 mr-2"
                src={"../new.png"}
                alt="Legal Ease Logo"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/signin"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">LegalEase</span>
                <img className="h-8 w-8" src="../new.jpg" alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/signin"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={submitForm}>Upload</button>
      </div>

      <footer className="bg-indigo-200 text-black py-12 mt-20">
        <div className="container mx-auto flex flex-col items-center">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Address</h3>
            <p className="text-sm">New Delhi</p>
          </div>
          <div className="text-center">
            <p className="text-sm">
              &copy; 2024 LegalEase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocumentStorage;
