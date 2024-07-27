import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import Authnav from "../AuthNav/AuthNav";
import Usermenu from "../UserMenu/UserMenu";

import css from "./appbar.module.css";

const AppBar = () => {
    console.log(selectIsLoggedIn)
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn)

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <Usermenu /> : <Authnav />}
    </header>
  );
};

export default AppBar;
