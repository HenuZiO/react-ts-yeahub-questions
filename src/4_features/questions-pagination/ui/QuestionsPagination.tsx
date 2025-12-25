import { useAppDispatch, useAppSelector } from '@/1_app/store'
import {setPage, selectQuestionsQueryParams} from '@/4_features/questions-filters'
import { useGetQuestionsQuery } from '@/5_entities/question'
import { createPaginationItems } from '@/6_shared/lib/utils/pagination'
import { ArrowLeftIcon, ArrowRightIcon } from '@/6_shared/ui/icon'

import styles from './QuestionsPagination.module.css'

export const QuestionsPagination = () => {
    const dispatch = useAppDispatch()
    
    const queryParams = useAppSelector(selectQuestionsQueryParams)
    
    const { total } = useGetQuestionsQuery(queryParams, {
        selectFromResult: ({ data }) => ({
            total: data?.total ?? 0
        })
    })
    
    const page = queryParams.page ?? 1
    const limit = queryParams.limit ?? 10
    const totalPages = Math.ceil(total / limit)
    
    if (totalPages <= 1) return null
    
    const items = createPaginationItems(page, totalPages)
    
    return (
        <nav className={styles.pagination} aria-label='Пагинация'>
            <button
                type='button'
                className={styles.pagination__arrow}
                disabled={page === 1}
                onClick={() => dispatch(setPage(page - 1))}
                aria-label='Предыдущая страница'
            >
                <ArrowLeftIcon size={20} />
            </button>
            
            <ul className={styles.pagination__list}>
                {items.map((item, index) => {
                    if (item === '…') {
                        return (
                            <li
                                key={`ellipsis-${index}`}
                                className={styles.pagination__ellipsis}
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
                                onClick={() => dispatch(setPage(item))}
                                aria-current={item === page ? 'page' : undefined}
                                disabled={item === page}
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
                aria-label='Следующая страница'
                disabled={page === totalPages}
                onClick={() => dispatch(setPage(page + 1))}
            >
                <ArrowRightIcon size={20} />
            </button>
        </nav>
    )
}