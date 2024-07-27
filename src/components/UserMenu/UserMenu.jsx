import css from './usermenu.module.css';

const Usermenu = () => {
    return(
        <div className={css.userMenu}>
            <p className={css.greeting}>Welcome, new User!</p>
            <button type="button" className={css.logOutBtn}>Log out</button>
        </div>
    )
}

export default Usermenu;