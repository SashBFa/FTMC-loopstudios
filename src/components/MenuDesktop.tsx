import { NavLink } from 'react-router-dom';
import { MenuType } from '../sections/Navigation';

export const MenuDesktop = ({ list }: MenuType) => {
  return (
    <ul className="hidden lg:flex gap-8">
      {list.map((link, index) => (
        <NavLink to={link.link} key={index}>
          <li className="text-lg font-semibold capitalize">{link.title}</li>
        </NavLink>
      ))}
    </ul>
  );
};
