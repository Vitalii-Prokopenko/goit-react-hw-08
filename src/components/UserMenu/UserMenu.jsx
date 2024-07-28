import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./usermenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <p className={css.greeting}>Welcome, {user.name}</p>
      <button type="button" className={css.logOutBtn} onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
