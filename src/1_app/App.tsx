import { Container } from '../6_shared/ui/container/Container'
import { Header } from '../3_widgets/header/ui/Header'
import { Sidebar } from '../3_widgets/sidebar/ui/Sidebar'
import { QuestionItem } from '../5_entities/question-item/ui/QuestionItem'
import { QuestionFilters } from '../3_widgets/questions-filters/ui/QuestionsFilters'
import { QuestionsPagination } from '../4_features/questions-pagination/ui/QuestionsPagination'
import { Section } from '../6_shared/ui/section/Section'
import { SectionTitle } from '../6_shared/ui/section-title/ui/SectionTitle'
import { Breadcrumbs } from '../6_shared/ui/breadcrumbs/ui/Breadcrumbs'

import styles from './styles.module.css'

function App() {
    
    return (
        <div className={styles.page}>
           <Sidebar />

            <div className={styles.page__content}>
                <Header />
                
                <main>
                    <Container>
                        <Breadcrumbs />
                    </Container>

                    <Container className={styles.sections}>
                        <Section>
                            <SectionTitle>Вопросы React, JavaScript</SectionTitle>
                            <QuestionItem />
                            <QuestionItem />
                            <QuestionItem />
                            <QuestionsPagination />
                        </Section>
                        
                        <Section className={styles.section__filters}>
                            <SectionTitle className='visually-hidden'>
                                Фильтры по вопросам для собеседований
                            </SectionTitle>
                            
                            <QuestionFilters />
                        </Section>
                    </Container>
                </main>
            </div>
        </div>
    )
}

export default App
