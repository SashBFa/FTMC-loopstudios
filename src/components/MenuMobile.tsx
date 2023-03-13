import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuType } from '../sections/Navigation';

export const MenuMobile = ({ list }: MenuType) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
      {toggleMenu ? (
        <>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="select-none z-50"
          >
            <img src="./images/icon-close.svg" alt="menu" className="h-5" />
          </button>
          <ul className="absolute -top-12 left-0 w-full h-screen bg-black -z-10 px-6 flex flex-col justify-center gap-4">
            {list.map((link, index) => (
              <NavLink to={link.link} key={index}>
                <li className="text-3xl font-thin uppercase">{link.title}</li>
              </NavLink>
            ))}
          </ul>
        </>
      ) : (
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="select-none z-50"
        >
          <img src="./images/icon-hamburger.svg" alt="menu" className="h-5" />
        </button>
      )}
    </div>
  );
};
