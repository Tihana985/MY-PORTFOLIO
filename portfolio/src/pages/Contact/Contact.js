import styles from './Contact.module.css';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayot';
import { Footer } from '../../components/Footer/Footer';

export const Contact = () => {

    return (
        <div className={styles.contact}>
            <Header />
            <MainLayout>
            <div className={styles.mainContent}>
                    <h3 className={styles.h}>Contact Me </h3>
                    <p className={styles.p}>If you are ready to create the digital experience of your dreams</p>   
                <hr className={styles.hr} />
                <div className={styles.contactinfo}> 
                <div className={styles.headline}>
                    <span className={styles.dot}></span>
                    <span className={styles.text}>CONTACT INFO</span>
                    </div>
                    <span className={styles.number}> + 389 72 304 004 </span>
                    <span className={styles.email}>tihana.obradovic@hotmail.com</span>
                    <span className={styles.linkedin}>linkedin.com/in/tihana-obradovikj-chingarova-078835305</span>
                    <span className={styles.gitHub}>gitHub.com/Tihana985</span>
                </div>
              <Footer />
               </div>
            </MainLayout>

        </div>
    )
}