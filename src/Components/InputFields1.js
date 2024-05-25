import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import {ExpertConsultation} from "./ExpertConsultation";
import { /*BrowserRouter as Router, Route, Routes,*/ Link } from "react-router-dom";
// import {ChatWithBot} from "./ChatWithBot";
// import {GenerateLegalDocuments} from "./GenerateLegalDocuments";
// import InputFields1 from "./InputFields1";
import html2pdf from 'html2pdf.js';
import { Document, Page } from 'react-pdf';




import axios from 'axios';
const navigation = [
    { name: 'Expert Consultation', href: '/expertconsultation' },
    { name: 'Generate Legal Documents', href: '/GenerateLegalDocuments' },
    { name: 'Chat with Bot', href: '/chatwithbot' },
    { name: 'Document Storage', href: '/documentstorage' },
];

const MyFormComponent = () => {
    const [formData, setFormData] = useState({
        nameOfLandlord: '',
        fatherName: '',
        address: '',
        nameOfTenant: '',
        propertyNumber: '',
        rent: '',
        advance: '',
        dateOfCommencement: '',
        place: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/generate/rent', formData)
            .then(response => {
                console.log('Form submission successful:', response.data);
                // Optionally, update UI based on the response
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                // Handle errors appropriately
            });
    };
    
    const handleDownloadPDF = () => {
        // Use axios to get the HTML content from the server
        axios.post('http://localhost:8000/generate/rent', formData)
            .then(response => {
                // Create a new HTML element with the received HTML content
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = response.data;

                // Use html2pdf to convert the HTML content to a PDF
                html2pdf(tempDiv, {
                    margin: 10,
                    filename: 'rent_agreement.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                });

                // Clean up the temporary div
                document.body.removeChild(tempDiv);
            })
            .catch(error => {
                console.error('Error generating PDF:', error);
            });
    };

    const [previewUrl, setPreviewUrl] = useState('');

    const handlePreviewPDF = () => {
        axios.post('http://localhost:8000/generate/rent', formData)
            .then(response => {
                // Assuming the server returns a URL or link to the generated PDF file
                const pdfUrl = response.data.url;
                
                // Set the preview URL to display the PDF
                setPreviewUrl(pdfUrl);
            })
            .catch(error => {
                console.error('Error generating PDF:', error);
            });
    };
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   


    return (

        <div className="bg-indigo-200 min-h-screen flex flex-col justify-between">
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
                <div className="mx-auto max-w-full py-20 sm:py-36 lg:py-44">
                    <div className="grid gap-20 mx-80 pt-4 justify-center">
                    {previewUrl && (
                    <div className="w-full h-screen">
                        <Document
                            file={previewUrl}
                            options={{ workerSrc: "/pdf.worker.js" }}
                        >
                            <Page pageNumber={1} />
                        </Document>
                    </div>
                )}
                        <div className="text-center">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-xl">Rent Agreement</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="bg-indigo-200 p-8 rounded shadow-md flex-grow max-w-8xl mx-auto">
                            <label className="block">
                                Name of Landlord:
                                <input type="text" name="nameOfLandlord" value={formData.nameOfLandlord} onChange={handleChange} className="mt-1 p-1 border border-gray-300 block w-full" />
                            </label>
                            <label className="block mt-4">
                                Father Name:
                                <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="mt-1 p-1 border border-gray-300 block w-full" />
                            </label>
                            <label className="block mt-4">
                                Address:
                                <input type="text" name="address" value={formData.address} onChange={handleChange} className="mt-1 p-1 border border-gray-300 block w-full" />
                            </label>
                            <label className="block mt-4">
                                Name of Tenant:
                                <input type="text" name="nameOfTenant" value={formData.nameOfTenant} onChange={handleChange} className="mt-1 p-1 border border-gray-300 block w-full" />
                            </label>
                            <label className="block mt-4">
                                Property Number:
                                <input type="text" name="propertyNumber" value={formData.propertyNumber} onChange={handleChange} className="mt-1 p-1 border border-gray-300 block w-full" />
                            </label>
                            <label className="block mt-4">
                                Rent:
                                <input type="text" name="rent" value={formData.rent} onChange={handleChange} className="mt-1 p-1 border border-gray-300 block w-full" />
                            </label>
                            <label className="block mt-4">
                                Advance:
                                <input type="text" name="advance" value={formData.advance} onChange={handleChange} className="mt-1 p-1 border border-gray-300 block w-full" />
                            </label>
                            <label className="block mt-4">
                                Date of Commencement:
                                <input type="date" name="dateOfCommencement" value={formData.dateOfCommencement} onChange={handleChange} className="mt-1 p-1 border border-gray-300 block w-full" />
                            </label>
                            <label className="block mt-4">
                                Place:
                                <input type="text" name="place" value={formData.place} onChange={handleChange} className="mt-1 p-1 border border-gray-300 block w-full" />
                            </label>

                            <div className="flex mt-6">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 Submit
                </button>
                            <button onClick={handlePreviewPDF} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-4">
                                  Preview PDF
                            </button>

                    
                             <button onClick={handleDownloadPDF} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Download PDF
                             </button>
                            </div>
                        </form>

            </div>
            </div>
            </div>
            {previewUrl && (
                    <div className="w-full h-screen">
                        <Document
                            file={previewUrl}
                            options={{ workerSrc: "/pdf.worker.js" }}
                        >
                            <Page pageNumber={1} />
                        </Document>
                    </div>
                )}
            
            

                
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
                        <p className="text-sm">JNU Convention Center, Delhi, India</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">&copy; 2024 LegalEase. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            

        </div>
    );
};

export default MyFormComponent;