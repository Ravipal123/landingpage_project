export default function Blogs() { 
  const blogs = [
    {
      id: 1,
      title: "Why Data-Driven Decision Making is Key for Business Growth",
      date: "January 10, 2024",
      image: "/images/lead.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur",
      alt: "Content Management"
    },
    {
      id: 2,
      title: "Top 5 Business Services to Boost Customer Satisfaction",
      date: "January 10, 2024",
      image: "/images/why.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet, consectetur",
      alt: "Employee Management"
    },
    {
      id: 3,
      title: "Leveraging Software Solutions to Enhance Business Efficiency",
      date: "January 10, 2024",
      image: "/images/employ.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet. consectetur",
      alt: "Vehicle Management"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-blue-500 text-center mb-1">Blogs</h2>
      <p className="text-center text-gray-400 text-sm sm:text-base">
        Explore our blog for expert tips, industry insight, and engaging
      </p>
      <p className="text-center text-gray-400 text-sm sm:text-base mb-8 sm:mb-12">
        content on the latest trends. Stay Informed and inspired!
      </p>

      {/* Blog Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="rounded-xl border border-gray-300 bg-slate-100 p-4">
            <img
              src={blog.image}
              alt={blog.alt}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="border-blue-700 border rounded-3xl px-3 py-1 w-[120px] sm:w-[150px] text-center text-xs sm:text-sm mb-2">
              {blog.date}
            </div>
            <h3 className="text-lg sm:text-xl text-blue-500 font-medium mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {blog.description}
            </p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8 sm:mt-10">
        <button className="hover:bg-gray-500 hover:text-white text-gray-500 border-2 font-semibold py-2 px-4 rounded-lg">
          View More
        </button>
      </div>
    </div>
  );
}
