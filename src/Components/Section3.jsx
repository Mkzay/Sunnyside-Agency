const Section3 = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex items-center justify-center relative">
        <img
          className="md:hidden"
          src="./mobile/image-graphic-design.jpg"
          alt="image-transform"
        />
        <img
          className="hidden md:flex"
          src="./desktop/image-graphic-design.jpg"
          alt="image-transform"
        />
        <div className="absolute flex items-center justify-center flex-col gap-5 bottom-12 md:px-28">
          <h2 className="text-4xl font-Fraunces font-black text-Darkdesaturatedcyan">
            Great Design
          </h2>
          <p className="text-xl font-Barlow text-Darkdesaturatedcyan text-center">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients&apos;
            attention.
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        <img
          className="md:hidden"
          src="./mobile/image-photography.jpg"
          alt="image-transform"
        />
        <img
          className="hidden md:flex"
          src="./desktop/image-photography.jpg"
          alt="image-transform"
        />
        <div className="absolute flex items-center justify-center flex-col gap-5 bottom-12 px-5 md:px-28">
          <h2 className="text-4xl font-Fraunces font-black text-Darkblue">
            Photography
          </h2>
          <p className="text-xl font-Barlow text-Darkblue text-center ">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
