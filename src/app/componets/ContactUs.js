import Image from 'next/image';

const ContactUs = () => {
    return (
        <section className="flex flex-col items-center justify-center py-10 px-4 md:py-20 bg-slate-100">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-700">Contact Us</h2>
            <p className="text-center text-gray-600 mt-2 text-sm md:text-base">Reach out to discuss how we can transform your business with</p>
            <p className="text-center text-gray-600 mt-2 text-sm md:text-base">tailored solutions and expert support.</p>

            <div className="relative bg-blue-500 rounded-lg mt-10 p-6 sm:p-8 flex flex-col md:flex-row items-center md:space-x-6 max-w-4xl mx-auto shadow-lg h-auto md:h-[350px]">
                {/* Image */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="/images/boy.png" 
                        alt="Contact Image"
                        className="w-full h-[250px] md:h-[400px] object-cover rounded-lg" 
                    />
                </div>

                {/* Contact Information */}
                <div className="text-white md:w-1/2">
                    <h3 className="text-lg md:text-2xl font-bold">
                        We help you to grow your business faster & easier.
                    </h3>
                    <p className="mt-4 text-sm md:text-base">
                        Partner with us to simplify the path to your success. We’ll make reaching your business goals faster and easier than ever.
                    </p>

                    {/* Contact Details */}
                    <div className="mt-6 space-y-4">
                        <p className="flex items-center space-x-2">
                            <i className="fas fa-phone-alt"></i>
                            <span>+91-8873-33-8873</span>
                        </p>
                        <p className="flex items-center space-x-2">
                            <i className="fas fa-envelope"></i>
                            <span>contact@imeleo.com</span>
                        </p>
                    </div>

                    {/* Button */}
                    <button className="mt-6 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
