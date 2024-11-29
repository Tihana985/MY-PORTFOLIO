import styles from './Contact.module.css';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayot';

export const Contact = () => {

    return (
        <div className={styles.contact}>
            <Header />
            <MainLayout>
                <div className={styles.headingContact}>
                    <h3 className={styles.h}>Contact Me </h3>
                    <p className={styles.p}>If you are ready to create the digital expirience of your dreams</p>
                </div>
                <hr className={styles.hr} />
                <div className={styles.contactinfo}> 
                    <span className={styles.text}>CONTACT INFO</span>
                    <span className={styles.number}> + 389 72 304 004 </span>
                    <span className={styles.email}>tihana.obradovic@hotmail.com</span>
                    <span className={styles.linkedin}>linkedin.com/in/tihana-obradovikj-chingarova-078835305</span>
                    <span className={styles.gitHub}>gitHub.com/Tihana985</span>
                </div>
                <p className={styles.footer}>CREATE THE DIGITAL EXPRIENCE OF YOUR DREMS</p>
            </MainLayout>

        </div>
    )
}