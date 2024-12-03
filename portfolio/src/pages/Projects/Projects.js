import styles from './Projects.module.css';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayot';
import { Footer } from '../../components/Footer/Footer';

export const Projects =() => {

    return(
        <div className={styles.projects}>
              <Header />
              <MainLayout>
              <div className={styles.mainContent}> <h3 className={styles.h3}>Projects</h3>
                </div>
                <Footer />
              </MainLayout>
        </div>
    )
}