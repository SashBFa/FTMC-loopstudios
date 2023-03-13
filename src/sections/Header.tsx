import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="relative bg-[url('/images/mobile/image-hero.jpg')] lg:bg-[url('/images/desktop/image-hero.jpg')] h-screen bg-cover flex flex-col items-center justify-center lg:h-[60vh]">
      <Navigation />
      <section className="max-w-5xl w-full mx-auto text-white px-6 lg:px-0">
        <div className="py-4 px-6 border-2 border-white lg:max-w-xl lg:px-12 lg:py-8 lg:border-4">
          <h2 className="uppercase font-extralight text-5xl lg:text-6xl">
            Immersive experiences that deliver
          </h2>
        </div>
      </section>
    </header>
  );
};
