const creationList = [
  {
    title: 'deep earth',
    desktop: '/images/desktop/image-deep-earth.jpg',
    mobile: '/images/mobile/image-deep-earth.jpg',
  },
  {
    title: 'night arcade',
    desktop: '/images/desktop/image-night-arcade.jpg',
    mobile: '/images/mobile/image-night-arcade.jpg',
  },
  {
    title: 'soccer team vr',
    desktop: '/images/desktop/image-soccer-team.jpg',
    mobile: '/images/mobile/image-soccer-team.jpg',
  },
  {
    title: 'the grid',
    desktop: '/images/desktop/image-grid.jpg',
    mobile: '/images/mobile/image-grid.jpg',
  },
  {
    title: 'from up above vr',
    desktop: '/images/desktop/image-from-above.jpg',
    mobile: '/images/mobile/image-from-above.jpg',
  },
  {
    title: 'pocket borealis',
    desktop: '/images/desktop/image-pocket-borealis.jpg',
    mobile: '/images/mobile/image-pocket-borealis.jpg',
  },
  {
    title: 'the curiosity',
    desktop: '/images/desktop/image-curiosity.jpg',
    mobile: '/images/mobile/image-curiosity.jpg',
  },
  {
    title: 'make it fisheye',
    desktop: '/images/desktop/image-fisheye.jpg',
    mobile: '/images/mobile/image-fisheye.jpg',
  },
];

export const Creation = () => {
  return (
    <section className="max-w-5xl w-full mx-auto px-6 my-16 lg:my-0">
      <div className="mb-12 lg:flex lg:justify-between lg:items-center">
        <h3 className="uppercase text-4xl font-extralight text-center lg:text-left lg:text-5xl">
          our creations
        </h3>

        <button className="bg-black text-white py-2 px-12 uppercase font-semibold tracking-widest hidden lg:block ">
          See all
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {creationList.map((creation, index) => (
          <div key={index} className="relative flex">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-transparent lg:bg-gradient-to-t" />
            <img
              src={creation.mobile}
              alt={creation.title}
              className="lg:hidden"
            />
            <img
              src={creation.desktop}
              alt={creation.title}
              className="hidden lg:block"
            />
            <h4 className="absolute text-white bottom-4 left-4 uppercase text-2xl w-28 font-thin lg:bottom-6 lg:left-6">
              {creation.title}
            </h4>
          </div>
        ))}

        <button className="border-2 border-black mx-auto py-2 px-12 uppercase font-semibold tracking-widest lg:hidden">
          See all
        </button>
      </div>
    </section>
  );
};
