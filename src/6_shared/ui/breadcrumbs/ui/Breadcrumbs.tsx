import styles from './Breadcrumbs.module.css'

export const Breadcrumbs = () => {
    return (
        <nav className={styles.breadcrumbs} aria-label='Хлебные крошки'>
            <ol className={styles.breadcrumbs__list}>
                <li className={styles.list__item}>
                    <a className={styles.list__link} href='/'>
                        Обучение
                    </a>
                </li>

                <li className={styles.list__item}>
                    <span aria-current='page'>
                        Список вопросов
                    </span>
                </li>
            </ol>
        </nav>
    )
}