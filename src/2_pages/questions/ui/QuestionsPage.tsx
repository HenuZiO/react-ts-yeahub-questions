import { QuestionsFeed } from '@/3_widgets/questions-feed'
import { QuestionsFiltersSidebar } from '@/3_widgets/questions-filters-sidebar'
import { Breadcrumbs } from '@/6_shared/ui/breadcrumbs'
import { Container } from '@/6_shared/ui/container'

import { QUESTIONS_PAGE_BREADCRUMBS } from '../config/questionPageBreadcrumbsConfig'

import styles from './QuestionsPage.module.css'

export const QuestionsPage = () => {
    return (
        <>
            <Container>
                <Breadcrumbs items={QUESTIONS_PAGE_BREADCRUMBS} />
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