const Section2 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse">
      <div className="flex items-center justify-center flex-col flex-1 md:flex-row">
        <div className="text-center py-14 px-5 flex flex-col gap-5 md:text-left md:px-20">
          <h2 className="text-4xl font-Fraunces font-black md:pr-44">
            Stand out to the right audience
          </h2>
          <p className="text-xl font-Barlow text-Darkblue">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we&apos;ll build and
            extend your brand in digital places.
          </p>
          <a className="text-lg font-Fraunces font-black uppercase">
            Learn More
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          className="md:hidden"
          src="./mobile/image-stand-out.jpg"
          alt="image-transform"
        />
        <img
          className="hidden md:flex"
          src="./desktop/image-stand-out.jpg"
          alt="image-transform"
        />
      </div>
    </div>
  );
};

export default Section2;
