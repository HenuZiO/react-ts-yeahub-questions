import { cn } from '../6_shared/lib/utils/classNames'
import { Container } from '../6_shared/ui/container/Container'
import { ArrowLeftIcon } from '../6_shared/ui/icon/variants/ArrowLeftIcon'
import { ArrowRightIcon } from '../6_shared/ui/icon/variants/ArrowRightIcon'
import { Header } from '../3_widgets/header/ui/Header'
import { Sidebar } from '../3_widgets/sidebar/ui/Sidebar'
import { QuestionItem } from '../5_entities/question-item/ui/QuestionItem'
import { QuestionFilters } from '../3_widgets/questions-filters/ui/QuestionsFilters'

import styles from './styles.module.css'

function App() {
    
    return (
        <div className={styles.page}>
           <Sidebar />

            <div className={styles.page__content}>
                <Header />

                <main>
                    <Container>
                        <nav className={styles.breadcrumbs}>
                            <ol className={styles.breadcrumbs__list}>
                                <li className={styles.breadcrumbs__list_item}>
                                    <a className={styles.breadcrumbs__item_link} href='/'>
                                        Обучение
                                    </a>
                                </li>

                                <li className={styles.breadcrumbs__list_item}>
                                    <a className={styles.breadcrumbs__item_link} href='/'>
                                        Список вопросов
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </Container>

                    <Container className={styles.sections}>
                        <section className={styles.section}>
                            <h2 className={styles.section__title}>
                                Вопросы React, JavaScript
                            </h2>

                            <QuestionItem />
                            <QuestionItem />
                            <QuestionItem />

                            

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
                                        <button className={styles.pagination__button}>1</button>
                                    </li>

                                    <li>
                                        <button
                                            className={cn(styles.pagination__button, styles.pagination__button_active)}
                                            disabled={true}
                                        >
                                            2
                                        </button>
                                    </li>

                                    <li>
                                        <button className={styles.pagination__button}>3</button>
                                    </li>

                                    <li>
                                        <button className={styles.pagination__button}>4</button>
                                    </li>

                                    <li className={styles.pagination__ellipsis}>
                                        <span>…</span>
                                    </li>

                                    <li>
                                        <button className={styles.pagination__button}>17</button>
                                    </li>

                                    <li>
                                        <button className={styles.pagination__button}>18</button>
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
                        </section>

                        <QuestionFilters />
                    </Container>
                </main>
            </div>
        </div>
    )
}

export default App
