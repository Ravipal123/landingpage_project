import React from 'react';

const services = [
    {
        imgSrc: '/images/web.jpg',
        title: 'Web App Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/app.jpg',
        title: 'App Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet, consectetur',
    },
    {
        imgSrc: '/images/it.jpg',
        title: 'IT Consulting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/ser.jpg',
        title: 'Software Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/cloud.jpg',
        title: 'Cloud Services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/data.jpg',
        title: 'Data Engineering',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
];

export default function Services() {
    return (
        <div className="bg-slate-100">
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-semibold text-blue-500 text-center mb-1">Services</h2>
                <p className="text-center text-gray-400">Comprehensive business services designed to support growth</p>
                <p className="text-center text-gray-400 mb-12">and enhance your competitive edge.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl border border-r-1 p-4">
                            <img 
                                src={service.imgSrc} 
                                alt={service.title} 
                                className="w-12 h-12 rounded-full top-4 left-4 border-2 border-slate-100"
                            />
                            <h3 className="text-xl text-blue-500 font-medium mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <button className="hover:bg-gray-500 hover:text-white text-gray-500 border-2 border-r-3 font-semibold py-2 px-4 rounded-lg">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
}
