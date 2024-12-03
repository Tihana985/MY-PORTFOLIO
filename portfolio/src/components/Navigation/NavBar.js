import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';


export const NavBar = ({ label, routeName }) => {
    return (
        <div className={styles.navBar}>
            <NavLink
                to={routeName}
                className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                }
            >
                <span className={styles.label}>{label}</span>
            </NavLink>
        </div>
    );
};