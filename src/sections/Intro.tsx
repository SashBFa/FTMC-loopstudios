export const Intro = () => {
  return (
    <section className="max-w-5xl w-full mx-auto px-6 mt-20 lg:px-0 lg:mt-32">
      <div className="hidden lg:block">
        <img src="./images/desktop/image-interactive.jpg" alt="men with vr" />
      </div>
      <div className="lg:hidden">
        <img src="./images/mobile/image-interactive.jpg" alt="men with vr" />
      </div>
      <div className="bg-white py-8 lg:-translate-y-full lg:translate-x-full lg:max-w-xl lg:pb-0 lg:px-20">
        <h3 className="uppercase text-4xl font-extralight text-center lg:text-left lg:text-5xl">
          the leader in interactive vr
        </h3>
        <p className="text-center text-sm font-bold text-black/50 mt-6 px-6 lg:text-left lg:p-0">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};
