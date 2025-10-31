'use client'
import usePagination from "@/app/(hooks)/usePagination"
import PathCard from "./PathCard"
import { history } from "@/data/pagination-data"
import styles from '@/app/(styles)/path-section.module.css'

export default function PathSection() {
    const { page, visibleItems, goToPage } = usePagination(history, 1)
    return (
        <div className={styles.pathSection}>
            <div className={styles.pathText}>Unfinished <span style={{color: "#005C71"}}>path</span></div>
            {visibleItems.map((pathPage, index) => (
                <PathCard key={index} data={pathPage} />
            ))}
            <div className={styles.pagination}>
                <div onClick={() => goToPage(0)} className={page === 0 ? styles.paginationButtonActive : styles.paginationButton}></div>
                <div onClick={() => goToPage(1)} className={page === 1 ? styles.paginationButtonActive : styles.paginationButton}></div>
            </div>
        </div>
    )
}