import { MenuDesktop } from '../components/MenuDesktop';
import { MenuMobile } from '../components/MenuMobile';

export type MenuType = {
  list: {
    title: string;
    link: string;
  }[];
};

const navList = [
  { title: 'About', link: '/about' },
  { title: 'Careers', link: '/careers' },
  { title: 'Events', link: '/events' },
  { title: 'Products', link: '/products' },
  { title: 'Support', link: '/support' },
];

export const Navigation = () => {
  return (
    <nav className="absolute top-12 left-1/2 -translate-x-1/2 max-w-7xl w-full mx-auto text-white flex items-center justify-between px-6 lg:px-0">
      <img src="./images/logo.svg" alt="logo" className="w-40" />
      <>
        <MenuMobile list={navList} />
        <MenuDesktop list={navList} />
      </>
    </nav>
  );
};