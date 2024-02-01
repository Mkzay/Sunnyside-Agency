const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8 py-20 px-10 bg-Darkmoderatecyan font-Barlow text-Darkdesaturatedcyan">
      <h2 className="text-4xl font-semibold">sunnyside</h2>
      <ul className="flex  justify-center text-xl font-semibold pb-8 gap-16">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="w-full flex justify-center gap-6 text-xl font-semibold">
        <img src="./icon-facebook.svg" alt="facebook-logo" />
        <img src="./icon-instagram.svg" alt="facebook-logo" />
        <img src="./icon-twitter.svg" alt="facebook-logo" />
        <img src="./icon-pinterest.svg" alt="facebook-logo" />
      </div>
    </div>
  );
};

export default Footer;
