import { HistoryItem } from "@/data/pagination-data"
import styles from "@/app/(styles)/path-section.module.css"

interface PathCardProps {
    data: HistoryItem
}
export default function PathCard({ data }: PathCardProps) {
    const months = Object.entries(data.months)

    return (
        <div className={styles.pathCard}>
            <div className={styles.pathYear}>{data.year}</div>
            <div className={styles.pathMonth}>
                {months.map(([month, events], index) => (
                    <div className={styles.pathMonthInfo} key={index}>
                        <div className={styles.pathMonthName}>
                            {month.charAt(0).toUpperCase() + month.slice(1)}
                            <span className={styles.pathCircle}></span>
                        </div>
                        <div className={styles.pathAchivments}>
                            {events.map((e, i) => (
                                <div key={i}>
                                    {e}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.line}></div>
        </div>
    )
}