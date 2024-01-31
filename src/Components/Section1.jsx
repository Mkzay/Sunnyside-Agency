const Section1 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex items-center justify-center flex-col flex-1 md:flex-row">
        <div className="text-center py-14 px-5 flex flex-col gap-5 md:text-left md:px-20">
          <h2 className="text-4xl font-Fraunces font-black md:pr-44">
            Transform your brand
          </h2>
          <p className="text-xl font-Barlow text-Darkblue">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a className="text-lg font-Fraunces font-black uppercase">
            Learn More
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          className="md:hidden"
          src="./mobile/image-transform.jpg"
          alt="image-transform"
        />
        <img
          className="hidden md:flex"
          src="./desktop/image-transform.jpg"
          alt="image-transform"
        />
      </div>
    </div>
  );
};

export default Section1;
