import { SectionQuestions } from '@/3_widgets/section-questions'
import { SectionFilters } from '@/3_widgets/section-filters'
import type { BreadcrumbItem } from '@/6_shared/ui/breadcrumbs'
import { Breadcrumbs } from '@/6_shared/ui/breadcrumbs'
import { Container } from '@/6_shared/ui/container'

import styles from './QuestionsPage.module.css'

const crumbs: BreadcrumbItem[] = [
    { label: 'Обучение', to: '/' },
    { label: 'Список вопросов' }
]

export const QuestionsPage = () => {
    return (
        <>
            <Container>
                <Breadcrumbs items={crumbs} />
            </Container>

            <Container className={styles.sections}>
                <div className={styles.main}>
                    <SectionQuestions className={styles.section__questions} />
                </div>
                
                <div className={styles.additional}>
                    <SectionFilters className={styles.section__filters} />
                </div>
            </Container>
        </>
    )
}