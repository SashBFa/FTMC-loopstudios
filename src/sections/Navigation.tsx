import { NavLink } from 'react-router-dom';
import { MenuDesktop } from '../components/MenuDesktop';
import { MenuMobile } from '../components/MenuMobile';

export type MenuType = {
  list: {
    title: string;
    link: string;
  }[];
};

const navList = [
  { title: 'About', link: '/' },
  { title: 'Careers', link: '/' },
  { title: 'Events', link: '/' },
  { title: 'Products', link: '/' },
  { title: 'Support', link: '/' },
];

export const Navigation = () => {
  return (
    <nav className="absolute top-12 left-1/2 -translate-x-1/2 max-w-5xl w-full mx-auto text-white flex items-center justify-between px-6 lg:px-0">
      <NavLink to={'/'}>
        <img src="./images/logo.svg" alt="logo" className="w-40" />
      </NavLink>

      <>
        <MenuMobile list={navList} />
        <MenuDesktop list={navList} />
      </>
    </nav>
  );
};
