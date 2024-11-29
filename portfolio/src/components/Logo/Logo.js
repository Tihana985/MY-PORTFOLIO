import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

export const Logo =() => {

    return(
        <div className={styles.logo}><Link to="/" className={styles.link}>TIHANA OBRADOVIKJ CHINGAROVA </Link></div>
    )
}