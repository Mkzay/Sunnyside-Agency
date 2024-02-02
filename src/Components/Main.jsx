const Main = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="absolute flex items-center justify-center flex-col gap-10 lg:top-40 lg:gap-24">
        <h1 className="text-White text-5xl/[4rem] text-center tracking-widest font-Fraunces font-black uppercase italic md:tracking-[0.8rem]">
          We are creatives
        </h1>
        <img src="icon-arrow-down.svg" alt="icon-arrow-down" />
      </div>
      <div>
        <img
          className="md:hidden"
          src="./mobile/image-header.jpg"
          alt="image-header"
        />
        <img
          className="hidden md:flex"
          src="./desktop/image-header.jpg"
          alt="image-header"
        />
      </div>
    </main>
  );
};

export default Main;
