import React, { useContext, useEffect, useState } from "react";
import { contractAddress, contractABI } from "../config";
// import  manta  from "../../public/manta3.png"
import { ethers } from "ethers";

import { Web3Context } from "../context/web3context";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// Web3Co

const ContractInteraction = () => {
  const { provider, signer, account } = useContext(Web3Context);
  const [value, setValue] = useState("");
  const navigation = [
    { name: "Expert Consultation", href: "/expertconsultation" },
    { name: "Generate Legal Documents", href: "/GenerateLegalDocuments" },
    { name: "Chat with Bot", href: "/chatwithbot" },
    { name: "Document Storage", href: "/documentstorage" },
    { name: "StoreToBlockchain", href: "/storeToETH" },
  ];

  useEffect(()=>{
params ? setValue(params) : setValue('');
  },[])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const params = useSearchParams()[0].get("link");
  // console.log(params.get("link"));
  console.log(params);

  const interactWithContract = async () => {
    if (!signer) return;

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    try {
      const tx = await contract.store(value);
      await tx.wait();
      console.log("Transaction success");
    } catch (error) {
      console.error("Transaction failed", error);
    }
  };

  return (
    <div className="bg-indigo-200">
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
      <div className="mx-auto w-1/2">
        <h3 className="mb-4 mt-24 text-2xl font-semibold">
          Store your <span className="text-gray-600">Legal doument</span> on
          BlockChain
        </h3>
        <p className="my-4">
          <span className="text-gray-700 font-semibold my-2">
            {" "}
            &bull; Power to the People
          </span>
          : Decentralization means no single authority controls your
          documents—empowering you like never before!
        </p>
        <p className="my-4">
          <span className="text-gray-700 font-semibold">
            {" "}
            &bull; Bulletproof Protection
          </span>
          : Blockchain's immutable nature shields documents from accidental
          damage, ensuring perpetual integrity.
        </p>
        <p className="mb-7 mt-14"><img className="w-[40px] inline" src={"../metamask.png"}/><span className="font-semibold m-2">Account:</span> {account}</p>
        <div className=" flex">
          <input
            className="flex grow h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter Image Url"
          />
          <button
            onClick={interactWithContract}
            className="rounded-md p-4 border-[3px] border-black bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Store to BlockChain
          </button>
        </div>
          <img className="w-[50px] m-auto mt-20" src={"../manta3.png"} />
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

export default ContractInteraction;
