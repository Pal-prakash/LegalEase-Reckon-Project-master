import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ExpertConsultation } from "./ExpertConsultation";
import { ChatWithBot } from "./ChatWithBot";
import GenerateLegalDocuments from "./GenerateLegalDocuments";

const navigation = [
    { name: 'Expert Consultation', href: '/expertconsultation' },
    { name: 'Generate Legal Documents', href: '/GenerateLegalDocuments' },
    { name: 'Chat with Bot', href: '/chatwithbot' },
    { name: 'Document Storage', href: '/documentstorage' },
];

const boxInfo = [
  { heading: 'Rent Agreement', paragraph: 'Quickly draft and eSign legally compliant rent agreements on stamp paper. Easy, digital, and on stamp paper – all done in minutes..with eStamp in 15 minutes' },
  { heading: 'Notice', paragraph: 'This input field is for Notice.' },
  { heading: 'Legal', paragraph: 'This input field is for Legal.' },
  { heading: 'Business', paragraph: 'This input field is for Business.' },
  { heading: 'Non Legal', paragraph: 'This input field is for Non Legal.' },
  { heading: 'Non Legal', paragraph: 'This input field is for Non Legal.' },
  // Add more as needed
];

export default function About() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleButtonClick = (index) => {
        console.log(`Button clicked: ${index}`);
        // Add your button click logic here
    };

    return (
        
        <div className="bg-indigo-200">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-0 lg:px-8" aria-label="Global">
                    
                <div className="flex lg:flex-1 items-center">
                
                        
                      <Link
                        to="/"
                        >
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
                            <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/signin" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">LegalEase</span>
                                <img
                                    className="h-8 w-8"
                                    src="../new.jpg"
                                    alt=""
                                />
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
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                    </div>
                </div>
            <div className="relative isolate px-6 lg:px-8">
            <div className="mx-auto max-w-full py-32 sm:py-48 lg:py-56">
          {/* <div className="text-center"> 
            <div className="flex justify-center ">*/}


            <div className="grid gap-20 mt-8 mx-4 pt-4">
                <div className="text-center"><h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl	">Select Document To Generate</h1></div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {boxInfo.map((info, index) => (
                  <div key={index} className="p-6 rounded-lg shadow-md border border-purple-500 bg-opacity-80 hover:bg-opacity-100 hover:shadow-2xl transition duration-500 ease-in-out">
                    <div className="flex flex-col items-center justify-center">
                      
                      <button
                        onClick={() => handleButtonClick(index)}
                        className="p-2 border rounded-md text-blue-500 underline mb-2"
                      >
                        <Link
                        to="/UserInput"
                        >
                        
                        <h2 className="text-lg font-semibold mb-2" style={{ color: 'black' }}>{info.heading}</h2></Link>
                      </button>
                      <p className="text-gray-600 mb-2">
                        {info.paragraph}
                      </p>
                    </div>
                  </div>
                 
                ))}
                </div>
            </div>
            </div>
            <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            
            
            
            </div>
            <footer className="bg-indigo-200 text-black py-12 mt-20">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="mb-6 text-center">
                        <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                        <ul className="text-sm">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Our Services</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="mb-6 text-center">
                        <h3 className="text-xl font-semibold mb-3">Address</h3>
                        <p className="text-sm">Delhi, India</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">&copy; 2024 LegalEase. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
