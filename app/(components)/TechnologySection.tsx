'use client'
import usePagination from '../(hooks)/usePagination'
import styles from '../(styles)/technology-section.module.css'
import { technologies } from '@/data/pagination-data'

export default function TechnologySection() {
    const { page, visibleItems, goToPage } = usePagination(technologies, 5)

    return (
        <div className={styles.technlogySection}>
            <div className={styles.technologiesText}>My technology stack</div>
            <div className={styles.cardTechnologiesSection}>
                {visibleItems.map((tech, index) => (
                    <div key={index} className={styles.cardTechnology}>
                        <div className={styles.technologyName}>{tech.name}</div>
                        <div className={styles.technologyDuration}>{tech.duration}</div>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                <div onClick={() => goToPage(0)} className={page === 0 ? styles.paginationButtonActive : styles.paginationButton}></div>
                <div onClick={() => goToPage(1)} className={page === 1 ? styles.paginationButtonActive : styles.paginationButton}></div>
            </div>
        </div>
    )
}