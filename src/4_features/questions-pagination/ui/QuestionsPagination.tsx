import { ArrowLeftIcon } from '../../../6_shared/ui/icon/variants/ArrowLeftIcon'
import { ArrowRightIcon } from '../../../6_shared/ui/icon/variants/ArrowRightIcon'

import styles from './QuestionsPagination.module.css'

export const QuestionsPagination = () => {
    return (
        <nav className={styles.pagination} aria-label='Пагинация'>
            <button
                className={styles.pagination__arrow}
                type='button'
                aria-label='Предыдущая страница'
            >
                <ArrowLeftIcon size={20} />
            </button>

            <ul className={styles.pagination__list}>
                <li>
                    <button className={styles.pagination__button} aria-label="Перейти на страницу 1">
                        1
                    </button>
                </li>

                <li>
                    <button
                        className={styles.pagination__button}
                        disabled={true}
                        aria-label="Страница 2"
                        aria-current="page"
                    >
                        2
                    </button>
                </li>

                <li>
                    <button className={styles.pagination__button} aria-label="Перейти на страницу 3">
                        3
                    </button>
                </li>

                <li>
                    <button className={styles.pagination__button} aria-label="Перейти на страницу 4">
                        4
                    </button>
                </li>

                <li className={styles.pagination__ellipsis} aria-hidden="true">
                    <span>…</span>
                </li>

                <li>
                    <button className={styles.pagination__button} aria-label="Перейти на страницу 17">
                        17
                    </button>
                </li>

                <li>
                    <button className={styles.pagination__button} aria-label="Перейти на страницу 18">
                        18
                    </button>
                </li>
            </ul>

            <button
                className={styles.pagination__arrow}
                type='button'
                aria-label='Следующая страница'
            >
                <ArrowRightIcon size={20} />
            </button>
        </nav>
    )
}