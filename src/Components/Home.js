import React, { useState, useEffect } from "react";

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews("all");
  }, []);

  const fetchNews = async (category) => {
    try {
      const response = await fetch(
        `https://inshortsapi.vercel.app/news?category=${category}`
      );
      const data = await response.json();
      setNews(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  const handleCategoryClick = async (category) => {
    setLoading(true); // Show loading spinner while fetching news
    await fetchNews(category);
  };

  return (
    <div className="h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-white font-bold">
              Dynamic News Platform
            </a>
            <div className="flex items-center">
              <button
                className="text-white ml-4 p-2 rounded-md text-gray-200 hover:text-white focus:outline-none focus:ring md:hidden"
                onClick={() => handleCategoryClick("all")}
              >
                Home
              </button>
              <div className="relative">
                <button
                  className="text-white ml-4 p-2 rounded-md text-gray-200 hover:text-white focus:outline-none focus:ring"
                  onClick={() => handleCategoryClick("all")}
                >
                  Category
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("national")}
                    >
                      National
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("business")}
                    >
                      Business
                    </button>
                    {/* <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("sport")}
                    >
                      Sport
                    </button> */}
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("world")}
                    >
                      World
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("politics")}
                    >
                      Politics
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("technology")}
                    >
                      Technology
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("startup")}
                    >
                      Startup
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("entertainment")}
                    >
                      Entertainment
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("miscellaneous")}
                    >
                      Miscellaneous
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("science")}
                    >
                      Science
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => handleCategoryClick("automobile")}
                    >
                      Automobile
                    </button>
                    {/* Add more buttons for other categories */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Basic header */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900">
            Top News{" "}
            <span className="bg-gray-300 px-2 py-1 rounded-md">
              Dynamic News Platform
            </span>
          </h3>
          <div className="h-1 bg-gray-300 mt-2"></div>
        </div>
      </div>

      {/* News section */}
      {loading ? (
        <div className="flex justify-center items-center h-full">
          Loading...
        </div>
      ) : (
        <div className="flex justify-center items-center gap-7 flex-wrap">
          {news.map((item, index) => (
            <div
              className="flex flex-col h-[450px] w-[360px] border rounded-lg overflow-hidden bg-rgb(128, 128, 128, 0.204) text-wrap"
              key={index}
            >
              <div className="w-full h-[180px] object-cover">
                <img src={item.imageUrl} className="w-full h-full" alt="Image" />
              </div>
              <div className="p-[1rem]">
                <div className="text-[10px] tracking-tighter">{item.date}</div>
                <h5 className="text-[13px] font-bold text-ellipsis text-wrap truncate text-red-500">
                  {item.title}
                </h5>
                <h5 className="font-bold pt-[12px]">Author: {item.author}</h5>
                <p className="overflow-hidden text-ellipsis whitespace-normal font-[11px] line-clamp-4">
                  {item.content}
                </p>
                <button className="bg-blue font-bold text-blue-500">
                  <a
                    href={item.readMoreUrl}
                    className="bg-blue"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more..
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
