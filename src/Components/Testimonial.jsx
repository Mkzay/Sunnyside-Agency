const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-5 gap-10 md:gap-16">
      <h2 className="text-xl text-Grayishblue font-Fraunces font-black uppercase tracking-[0.1rem]">
        Client Testimonials
      </h2>
      <div className="flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col items-center justify-center text-center gap-10 md:px-24 lg:px-5">
          <img
            className="rounded-full w-20 h-20"
            src="./image-emily.jpg"
            alt="emily"
          />
          <p className="text-xl font-Barlow font-semibold text-Verydarkgrayishblue">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-Fraunces font-black text-Verydarkdesaturatedblue">
              Emily R.
            </p>
            <p className="text-xl text-Grayishblue font-Barlow">
              Marketing Director
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-10 md:px-24 lg:px-5">
          <img
            className="rounded-full w-20 h-20"
            src="./image-thomas.jpg"
            alt="thomas"
          />
          <p className="text-xl font-Barlow font-semibold text-Verydarkgrayishblue">
            Sunnyside&apos;s enthusiasm coupled with their keen interest in our
            brand&apos;s success made it a satisfying and enjoyable experience.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-Fraunces font-black text-Verydarkdesaturatedblue">
              Thomas S.
            </p>
            <p className="text-xl text-Grayishblue font-Barlow">
              Chief Operating Officer
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-10 md:px-24 lg:px-5">
          <img
            className="rounded-full w-20 h-20"
            src="./image-jennie.jpg"
            alt="jennie"
          />
          <p className="text-xl font-Barlow font-semibold text-Verydarkgrayishblue">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-Fraunces font-black text-Verydarkdesaturatedblue">
              Jennie F.
            </p>
            <p className="text-xl text-Grayishblue font-Barlow">
              Buisness Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
