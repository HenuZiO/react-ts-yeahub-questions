import { SectionQuestions } from '@/3_widgets/section-questions'
import { SectionFilters } from '@/3_widgets/section-filters'
import { Container } from '@/6_shared/ui/container'
import { Breadcrumbs } from '@/6_shared/ui/breadcrumbs'

import styles from './QuestionsPage.module.css'

export const QuestionsPage = () => {
    return (
        <>
            <Container>
                <Breadcrumbs />
            </Container>

            <Container className={styles.sections}>
                <SectionQuestions className={styles.section__questions} />
                <SectionFilters className={styles.section__filters} />
            </Container>
        </>
    )
}