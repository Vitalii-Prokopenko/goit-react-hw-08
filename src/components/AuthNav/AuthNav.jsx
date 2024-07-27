import { NavLink } from "react-router-dom";

import css from './authnav.module.css';

const Authnav = () => {
  return (
    <div>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Log In
      </NavLink>
    </div>
  );
};

export default Authnav;
