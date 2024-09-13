import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About() {
    return (
        <div className="bg-slate-100">
            <div className="container mx-auto p-4 sm:p-6">
                {/* About Section */}
                <section className="text-center mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl  text-blue-700 mb-2 font-dosis">About Imeleo</h2>
                    <p className="text-base sm:text-lg text-gray-500 font-dosis">Imeleo provides cutting-edge solutions and expert insights to</p>
                    <p className="text-base sm:text-lg mb-4 text-gray-500 font-dosis">drive your business success in the digital age.</p>
                </section>

                {/* Business Success Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mx-4 sm:mx-14">
                    <div className="flex justify-center md:justify-start">
                        <Image 
                            src="/images/bg1.jpeg" 
                            alt="Team working" 
                            width={350} 
                            height={350} 
                            className="rounded-lg max-w-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl text-gray-600 font-dosis font-medium mb-2">
                            We Are Increasing <span className='font-bold text-blue-700'>Business</span> Success With <span className='font-bold text-blue-700'>Technology</span>
                        </h3>
                        <p className="text-sm sm:text-base mb-2 text-gray-600">
                            At Imeleo, we use technology to help businesses grow, work smarter, and get better results. Our goal is to make it easier for companies to succeed in today's digital world.
                        </p>
                        <ul className="mb-3 text-gray-600">
                            <li className="mb-2 text-[14px] sm:text-[16px]"><i className="fa-solid fa-check text-blue-700"></i>  Problem Solving</li>
                            <li className="mb-2"><i className="fa-solid fa-check text-blue-700"></i>  Strategic Growth</li>
                            <li className="mb-2"><i className="fa-solid fa-check text-blue-700"></i>  Enhanced Performance</li>
                        </ul>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 font-dosis font-semibold">View More</button>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="text-center md:text-left p-4 sm:p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10 ">
                        <div className="w-full md:w-1/2  text-gray-600 ">
                            <h3 className="text-2xl sm:text-3xl font-medium mb-4">
                              <i class="fa-solid fa-star text-medium text-blue-700"></i>
                                Meet Our <span className='font-dosis text-blue-700'>Founder</span>
                            </h3>
                            <p className="text-base sm:text-lg ">
                                With decades of industry experience, <span className='font-semibold'>Mayank</span> is a highly skilled software developer, solution architect, and technology entrepreneur. He specializes in building modular and scalable cross-platform software solutions.
                            </p>
                            <p className="mt-2">
                                Admired by clients, Mayank is leading <span className='font-semibold'>Imeleo</span>, empowering businesses with cutting-edge technology solutions, thus fueling growth and innovation.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:mb-0 md:mr-6">
                            <Image 
                                src="/images/logo.jpg" 
                                alt="Founder" 
                                width={350} 
                                height={350} 
                                className="rounded-xl max-w-full mb-2" 
                            />
                            <p className="text-2xl sm:text-lg text-blue-700 font-dosis font-semibold">Mayank Mahajan <i class="fa-brands fa-linkedin"></i></p>
                            <p className="text-sm sm:text-sm text-gray-600">Founder, Imeleo</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
