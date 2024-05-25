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
    { name: "StoreToBlockchain", href: "/storeToETH" },
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
        <div class="flex items-center justify-center w-1/2 m-auto my-10">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-indigo-200  hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-indigo-200  dark:hover:text-black"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              onChange={onFileChange}
              id="dropzone-file"
              type="file"
              class="hidden"
            />
          </label>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={submitForm}
            className=" w-36 m-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Upload
          </button>
        </div>

        {/* <input className="" type="file" onChange={onFileChange} /> */}
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
