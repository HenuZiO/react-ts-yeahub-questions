import { QuestionsFeed } from '@/3_widgets/questions-feed'
import { QuestionsFiltersSidebar } from '@/3_widgets/questions-filters-sidebar'
import { Breadcrumbs } from '@/6_shared/ui/breadcrumbs'
import type { BreadcrumbItem } from '@/6_shared/ui/breadcrumbs'
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
                    <QuestionsFeed />
                </div>
                
                <div className={styles.additional}>
                    <QuestionsFiltersSidebar />
                </div>
            </Container>
        </>
    )
}