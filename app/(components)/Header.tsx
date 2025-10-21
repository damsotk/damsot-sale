import styles from '../(styles)/header.module.css'

export default function Header() {
    return (
        <div className={styles.headerFlex}>
            <div className={styles.headerButton}>Technologies</div>
            <div className={styles.headerButton}>Roadmap</div>
            <div className={styles.headerButton}>Projects</div>
            <div className={styles.headerButton}>About me</div>
            <div className={styles.headerButton}>Contact me</div>
        </div>
    )
}