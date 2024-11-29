import styles from './Skills.module.css';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayot';
import { SkillsBtns } from '../../components/SkillsBtns/SkillsBtns';

export const Skills =() => {

    const skillsItems = [
        {label: "HTML"},  {label: "CSS"},  {label: "JavaScript"} , 
        {label: "ReactJs"},  {label: "NodeJs"},  {label: "MongoDB"},  {label: "Rest APIs"},  {label: "GitHub"},  {label: "Postman"}
    ]

    return(
        <div className={styles.skills}>
              <Header />
              <MainLayout>
                <div className={styles.headers}>
                <h3 className={styles.header}>Skills</h3>
                <h4 className={styles.headerTwo}>Inovaitve and Creative User-friendly Interfaces </h4>
                </div>
                <div className={styles.twoParts}>
                <p className={styles.leftPatrt}>I have with expertise in HTML for structured content, CSS for stylish designs, 
                    and JavaScript for interactive functionality. 
                    I build responsive user interfaces using ReactJs and develop efficient backends with NodeJs, supported by MongoDB for data management. I create and test Rest APIs for seamless integration, use GitHub for version control, and Postman for API testing.</p>
                <div className={styles.rightPart}>
                {skillsItems.map ((item) => {
                    return <SkillsBtns key={item.id} label={item.label}  />
                })}
                </div>
                </div>
                <p className={styles.endP}>CREATE THE DIGITAL EXPRIENCE OF YOUR DREMS</p>
                </MainLayout>
        </div>
    )
}