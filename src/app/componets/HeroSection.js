const Herosection = () => {
    return (
        <main>
            <section className="relative flex flex-col items-center justify-center py-5 px-4 md:py-20 min-h-screen">
                <div className="absolute inset-0 bg-hero-bg bg-cover bg-center opacity-25" aria-hidden="true"></div>
                <div className="relative text-center max-w-lg md:max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Business Software</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-blue-600">Solutions And Services</h3>
                    <p className="mt-4 text-base md:text-lg text-gray-600">
                        <span className="font-bold underline">Software</span> services and solutions to take your <span className="font-bold underline">Business</span> to the next level 🚀
                    </p>
                    <div className="mt-6 space-x-2 md:space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm md:text-base">
                            Know more
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white text-sm md:text-base">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Herosection;
