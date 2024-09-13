import React from 'react';

const solutions = [
    {
        imgSrc: '/images/content.jpg',
        title: 'Content Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/employ.jpg',
        title: 'Employee Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet, consectetur',
    },
    {
        imgSrc: '/images/vihcle.jpg',
        title: 'Vehicle Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/lead.jpg',
        title: 'Lead Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/Inventory.jpg',
        title: 'Inventory Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/hospital.jpg',
        title: 'Hospital Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
];

export default function Solutions() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-semibold text-blue-500 text-center mb-1">Solutions</h2>
            <p className="text-center text-gray-400">Innovative software solutions tailored to streamline</p>
            <p className="text-center text-gray-400 mb-12">your business operations and maximize efficiency.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                    <div key={index} className="bg-slate-100 rounded-xl border border-r-1 p-4">
                        <img src={solution.imgSrc} alt={solution.title} className="w-full rounded-lg mb-4"/>
                        <h3 className="text-xl text-blue-500 font-medium mb-2">{solution.title}</h3>
                        <p className="text-gray-600">{solution.description}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <button className="hover:bg-gray-500 hover:text-white text-gray-500 border-2 font-semibold py-2 px-4 rounded-lg">
                    View More
                </button>
            </div>
        </div>
    );
}
