import styles from './SkillsBtns.module.css';

export const SkillsBtns = ({ label }) => {

    return (
        <div className={styles.btns}>
            <label className={styles.labelBtns}>{label}</label>
        </div>
    )
}