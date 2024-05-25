import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BrowserRouter as Router, Link } from "react-router-dom";

const navigation = [
  { name: 'Expert Consultation', href: '/expertconsultation' },
  { name: 'Generate Legal Documents', href: '/GenerateLegalDocuments' },
  { name: 'Chat with Bot', href: '/chatwithbot' },
  { name: 'Translate Document', href: '/translatedocument' },
];

const lawyersData = [
  {
    id: 1,  
    imageSrc: "../sample1.jpeg",
    description:
      "Experienced in Family Law cases. Provides legal advice and assistance in divorce, child custody, and spousal support.",
    specialty: "Family Law",
    price: "150/hour",
  },
  {
    id: 2,
    imageSrc: "https://th.bing.com/th/id/R.7ecfcf1af8410b2b1fb2c841705bfb2e?rik=wJaOLmLuA4istQ&riu=http%3a%2f%2feqpower.ch%2fwp-content%2fuploads%2f2014%2f03%2flawyer-man-portrait.jpg&ehk=I3mFJWQK963C%2f0pH7wfkxCgyNVdpvwlyS8AEZjxVhlE%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Specialized in Business Law. Offers consultation on contract drafting, business agreements, and legal disputes.",
    specialty: "Business Law",
    price: "180/hour",
  },
  {
    id: 2,
    imageSrc: "https://th.bing.com/th/id/OIP.ISnWtTDkbUUo3bZ2WrO46gHaFc?rs=1&pid=ImgDetMain",
    description:
      "Specialized in Divorce Law. Offers consultation on contract drafting, business agreements, and legal disputes.",
    specialty: "Divorce Law",
    price: "180/hour",
  },
  {
    id: 2,
    imageSrc: "../sample1.jpeg",
    description:
      "Specialized in Business Law. Offers consultation on contract drafting, business agreements, and legal disputes.",
    specialty: "Crime Law",
    price: "180/hour",
  },
];

export function ExpertConsultation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-full py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="flex justify-center ">
              {lawyersData.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className=" p-6 rounded-lg shadow-md border border-purple-500 bg-opacity-80 hover:bg-opacity-80 hover:shadow-2xl transition duration-600 ease-in-out mb-12 mx-6 bg-transparent text-black w-64 transform origin-center center scale-y-105 scale-x-105"
                >
                  <img
                    className="mx-auto mb-4 h-40 w-64 rounded-full"
                    src={lawyer.imageSrc}
                   
                  />
                  <p className="text-lg font-semibold">{lawyer.specialty}</p>
                  <p className="mt-2">{lawyer.description}</p>
                  <p className="mt-2">{lawyer.price}</p>
                  <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-full">
                    Book Now
                  </button>
                </div>
              ))}
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
          </div>
        </div>
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
            <p className="text-sm">JNU Convention Center, Delhi, India</p>
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
}