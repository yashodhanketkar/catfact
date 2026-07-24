import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="inline-flex justify-end mx-2">
      <ul className="inline-flex gap-2">
        <NavLinkWrapper to="/catfact/" title="Home" />
        <NavLinkWrapper to="/catfact/about" title="About" />
      </ul>
    </div>
  );
};

const NavLinkWrapper = ({ to, title }: { to: string; title: string }) => {
  return (
    <li className="font-semibold opacity-70 hover:opacity-100">
      <NavLink to={to}>{title}</NavLink>
    </li>
  );
};
