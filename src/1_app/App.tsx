import { Container } from '../6_shared/ui/container/Container'
import { Header } from '../3_widgets/header/ui/Header'
import { Sidebar } from '../3_widgets/sidebar/ui/Sidebar'
import { QuestionItem } from '../5_entities/question-item/ui/QuestionItem'
import { QuestionFilters } from '../3_widgets/questions-filters/ui/QuestionsFilters'
import { QuestionsPagination } from '../4_features/questions-pagination/ui/QuestionsPagination'

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
                            <QuestionsPagination />
                        </section>
                        
                        <QuestionFilters />
                    </Container>
                </main>
            </div>
        </div>
    )
}

export default App
