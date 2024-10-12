import { useState } from 'react';

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <>
      <header className="w-screen h-28 bg-gray-950 backdrop-blur-md text-white flex justify-between items-center p-5 flex-nowrap border border-gray-600 border-b-[1px] border-t-0 border-r-0 border-l-0 sticky top-0 z-50">
        <a className="text-xl font-bold text-white" href="/">
          TODO
        </a>
        <div className="hamburger md:hidden text-2xl" onClick={toggleMobileMenu}>
          <i className="ri-menu-line"></i>
        </div>
        <div id="desktop" className="hidden md:flex md:justify-between gap-5 items-center">
          <ul className="flex gap-9">
            <li className="text-lg font-medium text-white hover:text-orange-200 ease-in-out duration-500">
              <a href="/">Home</a>
            </li>
            <li className="text-lg font-medium text-white hover:text-orange-200 ease-in-out duration-500">
              <a href="/todo">Todo List</a>
            </li>
          </ul>
          <div>
            <a href='/connect'>
              <button className='border-2 border-orange-200 px-5 py-2 rounded-md font-medium text-white ease-in-out duration-700 hover:bg-orange-500'>
                Connect
              </button>
            </a>
          </div>
        </div>
      </header>
      {isMobileMenuVisible && (
        <div id="mobile" className="md:hidden fixed inset-0 bg-transparent backdrop-blur-lg text-white flex flex-col items-center justify-center z-50">
          <div className="absolute top-5 right-5 text-2xl" onClick={toggleMobileMenu}>
            <i className="ri-close-line"></i>
          </div>
          <ul className="flex flex-col items-center gap-4 p-4">
            <li className="text-lg font-medium text-white hover:text-orange-200 ease-in-out duration-500">
              <a href="/">Home</a>
            </li>
            <li className="text-lg font-medium text-white hover:text-orange-200 ease-in-out duration-500">
              <a href="/todo">Todo List</a>
            </li>
          </ul>
          <div>
            <a href='/connect'>
              <button className='border-2 border-orange-200 px-5 py-2 rounded-md font-medium text-white ease-in-out duration-700 hover:bg-orange-500'>
                Connect
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;