import styles from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';


export const Header = () => {

    return (
        <div className={styles.header}>
            <Logo />
            <Navigation />
        </div>
    )
}