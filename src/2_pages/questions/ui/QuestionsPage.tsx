import { Container } from '../../../6_shared/ui/container/Container'
import { Breadcrumbs } from '../../../6_shared/ui/breadcrumbs/ui/Breadcrumbs'
import { Section } from '../../../6_shared/ui/section/Section'
import { SectionTitle } from '../../../6_shared/ui/section-title/ui/SectionTitle'
import { QuestionsPagination } from '../../../4_features/questions-pagination/ui/QuestionsPagination'
import { QuestionFilters } from '../../../3_widgets/questions-filters/ui/QuestionsFilters'
import { QuestionsList } from '../../../3_widgets/questions-list/ui/QuestionsList'

import styles from './QuestionsPage.module.css'

export const QuestionsPage = () => {
    return (
        <>
            <Container>
                <Breadcrumbs />
            </Container>

            <Container className={styles.sections}>
                <Section>
                    <SectionTitle>
                        Вопросы для собеседований
                    </SectionTitle>
                    <QuestionsList />
                    <QuestionsPagination />
                </Section>
                
                <Section className={styles.section__filters}>
                    <SectionTitle className='visually-hidden'>
                        Фильтры по вопросам для собеседований
                    </SectionTitle>
                    <QuestionFilters />
                </Section>
            </Container>
        </>
    )
}