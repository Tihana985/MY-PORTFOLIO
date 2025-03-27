import styles from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';


export const Header = () => {


    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles['center-container']}>
                <img src="./img/pearlimgsymbol.png" alt="pearl img" className={styles.imgp} />
                <Navigation />
            </div>
        </div>
    );
};