import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';


export const NavBar = ({ label, routeName }) => {

    return (
        <div className={styles.navBar}>
            <NavLink to={routeName} className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
            }
            >
                <label className={styles.label}> {label}</label>
            </NavLink>

        </div>
    )
}