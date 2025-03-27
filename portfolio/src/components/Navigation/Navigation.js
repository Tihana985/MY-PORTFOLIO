
import styles from './Navigation.module.css';
import { NavBar } from './NavBar';



const navItems = [
    {
        id: 1,
        label: 'ABOUT ME',
        routeName: '/',
    },
    {
        id: 2,
        label: 'PROJECTS',
        routeName: '/projects',
    },
    {
        id: 3,
        label: 'SKILLS',
        routeName: '/skills',
    },
    {
        id: 4,
        label: 'CONTACT',
        routeName: '/contact',
    }
]

export const Navigation = () => {

    return (
        <div className={styles.nav}>
            <ul className={styles.navList}>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <NavBar id={item.id} label={item.label} routeName={item.routeName} />
                    </li>
                ))}
            </ul>
        </div>
    )
}