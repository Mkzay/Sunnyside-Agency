const Section4 = () => {
  return (
    <div className="flex flex-col">
      <div className="">
        <img
          className="md:hidden"
          src="./mobile/image-gallery-milkbottles.jpg"
          alt="milkbottle"
        />
        <img
          className="hidden md:flex"
          src="./desktop/image-gallery-milkbottles.jpg"
          alt="milkbottle"
        />
        <img
          className="md:hidden"
          src="./mobile/image-gallery-orange.jpg"
          alt="milkbottle"
        />
        <img
          className="hidden md:flex"
          src="./desktop/image-gallery-orange.jpg"
          alt="milkbottle"
        />
      </div>
      <div className="">
        <img
          className="md:hidden"
          src="./mobile/image-gallery-cone.jpg"
          alt="milkbottle"
        />
        <img
          className="hidden md:flex"
          src="./desktop/image-gallery-cone.jpg"
          alt="milkbottle"
        />
        <img
          className="md:hidden"
          src="./mobile/image-gallery-sugar-cubes.jpg"
          alt="milkbottle"
        />
        <img
          className="hidden md:flex"
          src="./desktop/image-gallery-sugarcubes.jpg"
          alt="milkbottle"
        />
      </div>
    </div>
  );
};

export default Section4;
