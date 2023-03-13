import { NavLink } from 'react-router-dom';
import { navList } from './Navigation';

const socialIcon = [
  { name: 'facebook', icon: '/images/icon-facebook.svg' },
  { name: 'instagram', icon: '/images/icon-instagram.svg' },
  { name: 'pinterest', icon: '/images/icon-pinterest.svg' },
  { name: 'twitter', icon: '/images/icon-twitter.svg' },
];
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white ">
      <section className="flex flex-col items-center max-w-5xl w-full mx-auto px-6 py-12 mt-16 lg:flex-row lg:justify-between lg:items-start lg:pb-0">
        <div className="lg:flex lg:flex-col">
          <NavLink to={'/'}>
            <img src="./images/logo.svg" alt="logo" className="w-40" />
          </NavLink>
          <ul className="my-8 flex flex-col items-center gap-4 lg:flex-row">
            {navList.map((link, index) => (
              <NavLink key={index} to={link.link}>
                <li>{link.title}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center lg:items-end">
          <ul className="flex gap-4">
            {socialIcon.map((icon, index) => (
              <NavLink to={'/'} key={index}>
                <li>
                  <img src={icon.icon} alt={icon.name} />
                </li>
              </NavLink>
            ))}
          </ul>
          <p className="mt-6 text-white/50 lg:mt-8">
            &copy; {year} Loopstudios. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};
