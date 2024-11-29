import styles from './Projects.module.css';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayot';

export const Projects =() => {

    return(
        <div className={styles.projects}>
              <Header />
              <MainLayout>Projects</MainLayout>
        </div>
    )
}