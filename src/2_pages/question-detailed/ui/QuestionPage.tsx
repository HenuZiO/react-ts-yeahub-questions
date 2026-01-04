import { SectionQuestionShortAnswer } from '@/3_widgets/section-question-short-answer'
import { SectionQuestionDescription } from '@/3_widgets/section-question-description'
import { SectionQuestionLongAnswer } from '@/3_widgets/section-question-long-answer'
import { SectionQuestionMeta } from '@/3_widgets/section-question-meta'
import { Container } from '@/6_shared/ui/container'
import { Breadcrumbs } from '@/6_shared/ui/breadcrumbs'

import styles from './QuestionPage.module.css'
import { useParams } from 'react-router'

export const QuestionPage = () => {
    const { questionId } = useParams<{ questionId: string }>()
    
    if (!questionId) return null
    
    return (
        <>
            <Container>
                <Breadcrumbs />
            </Container>

            <Container className={styles.sections}>
                <div className={styles.main}>
                    <SectionQuestionDescription questionId={questionId} />
                    <SectionQuestionShortAnswer />
                    <SectionQuestionLongAnswer />
                </div>
                
                <div className={styles.additional}>
                    <SectionQuestionMeta />
                </div>
                
            </Container>
        </>
    )
}