import React, { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenue = () => {
    setIsOpen(false);
  };
const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const offsetTop = sectionElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      closeMenue();
    }
  };
const handleLogout = () => {
   
    window.location.href = "/";
  };

  return (
    <>
      <button className="px-2 cursor-pointer py-2 my-4 mx-2 font-semibold text-white bg-blue-500 rounded-md " onClick={toggleMenu}>
       Open Menue
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50" onClick={closeMenue}>
          <div className="bg-white h-screen w-[200px]" onClick={(e) => e.stopPropagation()}>
            <button className="px-2 cursor-pointer py-2 my-4 mx-2  font-semibold text-white bg-blue-500 rounded-md" onClick={closeMenue}>
              Close Menue
            </button>
            <ul className="space-y-6 px-6 py-2">
              <li className="hover:bg-blue-500 hover:text-white bg-gray-200 rounded-md py-1 px-2 cursor-pointer" onClick={() => scrollToSection("home")}>
                Home
              </li>
              <li className="hover:bg-blue-500 hover:text-white bg-gray-200 rounded-md py-1 px-2 cursor-pointer"     onClick={() => scrollToSection("new-releases")}>
                New Releases
              </li>
              <li className="hover:bg-blue-500 hover:text-white bg-gray-200 rounded-md py-1 px-2 cursor-pointer"  onClick={() => scrollToSection("trending")}>
                Trending
              </li>
              <li className="hover:bg-blue-500 hover:text-white bg-gray-200 rounded-md py-1 px-2 cursor-pointer" onClick={() => scrollToSection("most-watched")}>
                Most Watched
              </li>
              <li className="hover:bg-blue-500 hover:text-white bg-gray-200 rounded-md py-1 px-2 cursor-pointer" onClick={handleLogout}>
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
