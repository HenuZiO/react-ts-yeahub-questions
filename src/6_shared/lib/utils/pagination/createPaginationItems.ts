type PaginationItem = number | '…'

export const createPaginationItems = ( page: number, totalPages: number): PaginationItem[] => {
    if (totalPages <= 9) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    
    if (page <= 4) {
        return [1, 2, 3, 4, 5, 6, 7, '…', totalPages]
    }
    
    if (page >= totalPages - 3) {
        return [
            1,
            '…',
            totalPages - 6,
            totalPages - 5,
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages
        ]
    }
    
    return [
        1,
        '…',
        page - 2,
        page - 1,
        page,
        page + 1,
        page + 2,
        '…',
        totalPages
    ]
}