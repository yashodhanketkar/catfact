import { useState } from "react";
import { NavLink } from "react-router-dom";

import { AiFillCaretDown } from "react-icons/ai";

export const NavBar = () => {
  return (
    <div className="inline-flex justify-end w-1/6 ">
      <ul className="inline-flex gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};
