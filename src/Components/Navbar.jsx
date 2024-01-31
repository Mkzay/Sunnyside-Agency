const Navbar = () => {
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
        <button className="text-2xl font-Barlow font-semibold">
          <img src="./icon-hamburger.svg" />
        </button>
        <ul className="hidden">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
