import React from 'react';

const features = [
    {
        imgSrc: '/images/ext.jpg',
        title: 'Technical Expertise',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/approch.jpg',
        title: 'Business Centric Approach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet, consectetur',
    },
    {
        imgSrc: '/images/Arrow.jpg',
        title: 'Process & Quality Assurance',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/suport.jpg',
        title: 'Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },  
    {
        imgSrc: '/images/innovation.jpg',
        title: 'Innovation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
    {
        imgSrc: '/images/scale.jpg',
        title: 'Scalability',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur',
    },
];

export default function WhyUs() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-semibold text-blue-500 text-center mb-1">Why Choose Us</h2>
            <p className="text-center text-gray-400">Trusted expertise, cutting-edge technology, and a customer-</p>
            <p className="text-center text-gray-400 mb-12">first approach to drive your success.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl border border-r-1 p-4">
                        <img 
                            src={feature.imgSrc} 
                            alt={feature.title} 
                            className="w-12 h-12 rounded-full top-4 left-4 border-2 border-slate-100"
                        />
                        <h3 className="text-xl text-blue-700 font-medium mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
