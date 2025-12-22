import { Container } from '../../../6_shared/ui/container/Container'
import { Breadcrumbs } from '../../../6_shared/ui/breadcrumbs/ui/Breadcrumbs'
import { Section } from '../../../6_shared/ui/section/Section'
import { SectionTitle } from '../../../6_shared/ui/section-title/ui/SectionTitle'
import { QuestionItem } from '../../../5_entities/question-item/ui/QuestionItem'
import { QuestionsPagination } from '../../../4_features/questions-pagination/ui/QuestionsPagination'
import { QuestionFilters } from '../../../3_widgets/questions-filters/ui/QuestionsFilters'

import styles from './QuestionsPage.module.css'


export const QuestionsPage = () => {
    return (
        <>
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
        </>
    )
}