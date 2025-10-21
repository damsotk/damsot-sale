import { useState } from "react"
export default function usePagination<T>(items: T[], itemsPerPage: number) {
    const [page, setPage] = useState(0)

    const startIndex = page * itemsPerPage
    const visibleItems = items.slice(startIndex, startIndex + itemsPerPage ) 

    function goToPage(newPage: number) {
        setPage(newPage)
    }

    return {page, visibleItems, goToPage}
}