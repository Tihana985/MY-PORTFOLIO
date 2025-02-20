import styles from './Projects.module.css';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayot';
import { Footer } from '../../components/Footer/Footer';
import dashboardImg from '../../assets/dashboardimg.png';
import { useState } from 'react';
import LoginImg from '../../assets/LoginImg.png';
import SaveImg from '../../assets/SaveImg.png';
import ModalOrder from '../../assets/ModalOrder.png';
import ContactImg from '../../assets/ContactImg.png';
import ProjectImg2 from '../../assets/ProjectImg2.png';
import SkillsImg2 from '../../assets/SkillsImg2.png';
import SkillsImg from '../../assets/SkillsImg.png';


export const Projects = () => {

  const [imageSrc, setImageSrc] = useState(dashboardImg);
  const [imageSrcTwo, setImageSrcTwo] = useState(ModalOrder)
  const [imageSrcThree, setImageSrcThree] = useState(ProjectImg2)
  const [imageSrcFour, setImageSrcFour] = useState(SkillsImg)


  return (
    <div className={styles.projects}>
      <Header />
      <MainLayout>
        <div className={styles.mainContent}>
          <div className={styles.heading}>
            <h3 className={styles.h3}>Projects</h3>
            <h3 className={styles.h32}>I love creating digital experiences through beautifully designed websites and a strong, impactful brand image.</h3>
          </div>
          <div className={styles.workboxes}>
            <div className={styles.boxOne}
              onMouseEnter={() => setImageSrc(LoginImg)}
              onMouseLeave={() => setImageSrc(dashboardImg)}
            >
              <img src={imageSrc} alt="dashboard screenshot" className={styles.dashboardImg} />
              <div className={styles.twoparts}>
                <div className={styles.nameBtn}>
                <label className={styles.label}>Project Name: ITLabs Stock Dolphin</label>
                <a
                  href="https://github.com/Tihana985/StockDolphin"
                  target="_blank"
                  rel="noopener noreferrer" className={styles.link}>View Code</a>
                 </div>
                <p className={styles.p}>Innovative Inventory System designed to revolutionize the way offices manage and stock their supplies. </p>
              </div>
            </div>
            <div className={styles.boxTwo}
            onMouseEnter={() => setImageSrcTwo(SaveImg)}
              onMouseLeave={() => setImageSrcTwo(ModalOrder)}
            >
              <img src={imageSrcTwo} alt='/img ModalOrder' className={styles.modalOrderImg} />
            </div>
          </div>

          <div className={styles.workboxesTwo}>
            <div className={styles.twoBoxes}>
              <div className={styles.boxThree}
              onMouseEnter={() => setImageSrcThree(ContactImg)}
              onMouseLeave={() => setImageSrcThree(ProjectImg2)}
              >
                <img src={imageSrcThree} alt='/img Project page' className={styles.projectImg} />
              </div>
              <div className={styles.boxFour}
              onMouseEnter={()=> setImageSrcFour(SkillsImg2)}
              onMouseLeave={()=> setImageSrcFour(SkillsImg)}
              >
                <img src={imageSrcFour} alt='/img Skills Page' className={styles.skillsImg} />
              </div>
            </div>

            <div className={styles.twopartsTwo}>
            <div className={styles.nameBtnTwo}>
              <label className={styles.labelTwo}>Project Name: My Portfolio</label>
              <a
                href="https://github.com/Tihana985/MY-PORTFOLIO"
                target="_blank"
                rel="noopener noreferrer" className={styles.linkTwo}>View Code</a>
                </div>

              <p className={styles.pTwo}>Welcome to my portfolio! This project is designed to showcase my expertise skills, projects and experience. Feel free to reach out!</p>
            </div>
          </div>
          <div className={styles.workboxesThree}></div>
        </div>
        <Footer />
      </MainLayout>
    </div>
  )
}