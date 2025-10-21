import styles from '../(styles)/hero-section.module.css'

export default function HeroSection() {

    return (
        <div>
            <div className={styles.textSection}>
                <div className={styles.bigText}>DENYS PIYACK</div>
                <div className={styles.mediumText}>FRONTEND DEVELOPER</div>
            </div>
            <div className={styles.infoSection}>
                <div className={styles.smallText}>I built this website in a <span style={{color: `#005C71`}}>week!</span></div>
                <div className={styles.button}>CHECK VIDEO</div>
            </div>
        </div>
    )
}