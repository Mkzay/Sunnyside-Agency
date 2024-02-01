import { useState } from "react";

const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);
  const toggleBtn = () => {
    setOpenBar(!openBar);
  };
  return (
    <nav className="flex items-center justify-between p-5 md:px-10 absolute top-0 w-full">
      <div>
        <h1 className="text-2xl font-Barlow font-semibold text-White">
          sunnyside
        </h1>
      </div>
      <ul className="hidden md:flex text-White text-lg italic font-Barlow font-semibold gap-10">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
      <div className="md:hidden">
        <button
          onClick={toggleBtn}
          className="text-2xl font-Barlow font-semibold"
        >
          <img src="./icon-hamburger.svg" />
        </button>
        {openBar && (
          <ul className="absolute top-24 right-4 z-10 flex items-center justify-center flex-col gap-10 w-[90%] h-80 bg-White text-xl font-Barlow font-semibold">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li className="bg-Yellow rounded-full py-2 px-5 text-lg font-Fraunces uppercase">
              Contact
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
