import styles from './AboutMe.module.css';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayot';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';

export const AboutMe = () => {

    return (
        <div className={styles.aboutme}>
            <Header />
            <MainLayout>
                <div className={styles.mainContent}>
                    <div className={styles.aboutText}>
                        <h3 className={styles.h3text}>About Me</h3>
                        <p className={styles.ptext}>I am a JavaScript Full-Stack Developer specializing in web applications with a strong sense of persistence and motivation.
                            I am especially passionate about front-end development, leveraging the power of React to build modern and dynamic user interfaces that enhance user experiences.
                            <br />
                            On the backend, I use Node.js to create robust, scalable server-side applications and APIs.
                            <br />An enthusiast dedicated to development and progress, I bring a multilevel approach to project design, development, and coordination.</p>
                    </div>
                    <div className={styles.imgRart}>
                        <img src='./img/img portfolio 2.png' alt="profile img" className={styles.profileimg}/>
                    </div>
                    
                </div>
                <div className={styles.contactInfo}>
                        
                        <p className={styles.pContact}>If you would like to reach out, please feel free to <Link to="/contact" className={styles.contactLink}>Contact me.</Link></p>
                    </div>
                    <Footer />
            </MainLayout>
        </div>
    )
}