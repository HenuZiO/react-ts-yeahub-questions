import { createPaginationItems } from '@/6_shared/lib/utils/pagination'

import { ArrowLeftIcon, ArrowRightIcon } from '@/6_shared/ui/icon'

import styles from './Pagination.module.css'

type PaginationProps = {
    page: number
    totalPages: number
    onPageChange: (page: number) => void
}

export const Pagination = (props: PaginationProps) => {
    const { page, totalPages, onPageChange } = props
    
    const items = createPaginationItems(page, totalPages)
    
    return (
        <nav className={styles.pagination} aria-label='Пагинация'>
            <button
                type='button'
                className={styles.pagination__arrow}
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                aria-label='Предыдущая страница'
            >
                <ArrowLeftIcon size={20} />
            </button>
            
            <ul className={styles.pagination__list}>
                {items.map((item, index) => {
                    if (item === '…') {
                        return (
                            <li
                                className={styles.pagination__ellipsis}
                                key={`ellipsis-${index}`}
                                aria-hidden='true'
                            >
                                <span>…</span>
                            </li>
                        )
                    }
                    
                    return (
                        <li key={item}>
                            <button
                                className={styles.pagination__button}
                                type='button'
                                onClick={() => onPageChange(item)}
                                disabled={item === page}
                                aria-current={item === page ? 'page' : undefined}
                            >
                                {item}
                            </button>
                        </li>
                    )
                })}
            </ul>

            <button
                type='button'
                className={styles.pagination__arrow}
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                aria-label='Следующая страница'
            >
                <ArrowRightIcon size={20} />
            </button>
        </nav>
    )
}