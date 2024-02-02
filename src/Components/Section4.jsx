const Section4 = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex w-full">
        <img
          className="md:hidden w-[50%]"
          src="./mobile/image-gallery-milkbottles.jpg"
          alt="milkbottle"
        />
        <img
          className="hidden md:flex w-[50%]"
          src="./desktop/image-gallery-milkbottles.jpg"
          alt="milkbottle"
        />
        <img
          className="md:hidden  w-[50%]"
          src="./mobile/image-gallery-orange.jpg"
          alt="milkbottle"
        />
        <img
          className="hidden md:flex w-[50%]"
          src="./desktop/image-gallery-orange.jpg"
          alt="milkbottle"
        />
      </div>
      <div className="flex w-full">
        <img
          className="md:hidden w-[50%]"
          src="./mobile/image-gallery-cone.jpg"
          alt="milkbottle"
        />
        <img
          className="hidden md:flex w-[50%]"
          src="./desktop/image-gallery-cone.jpg"
          alt="milkbottle"
        />
        <img
          className="md:hidden w-[50%]"
          src="./mobile/image-gallery-sugar-cubes.jpg"
          alt="milkbottle"
        />
        <img
          className="hidden md:flex w-[50%]"
          src="./desktop/image-gallery-sugarcubes.jpg"
          alt="milkbottle"
        />
      </div>
    </div>
  );
};

export default Section4;
