import { useParams } from 'react-router'
import { SectionQuestionShortAnswer } from '@/3_widgets/section-question-short-answer'
import { SectionQuestionDescription } from '@/3_widgets/section-question-description'
import { SectionQuestionLongAnswer } from '@/3_widgets/section-question-long-answer'
import { SectionQuestionMeta } from '@/3_widgets/section-question-meta'
import { useGetQuestionByIdQuery } from '@/5_entities/question'
import { Breadcrumbs } from '@/6_shared/ui/breadcrumbs'
import type { BreadcrumbItem } from '@/6_shared/ui/breadcrumbs'
import { Container } from '@/6_shared/ui/container'

import styles from './QuestionPage.module.css'

export const QuestionPage = () => {
    const { questionId } = useParams<{ questionId: string }>()
    const numericQuestionId = Number(questionId)
    
    if (!questionId) return null
    
    const { data: question } = useGetQuestionByIdQuery(numericQuestionId)
    
    const firstSkill = question?.questionSkills?.[0]
    
    const skillCrumb: BreadcrumbItem | null = firstSkill
        ? { label: firstSkill.title, to: `/questions?skills=${firstSkill.id}`}
        : null
    
    const crumbs: BreadcrumbItem[] = [
        { label: 'Обучение', to: '/' },
        { label: 'Список вопросов', to: '/questions' },
        ...(skillCrumb ? [skillCrumb] : []),
        { label: question?.title ?? 'Загрузка…' }
    ]
    
    return (
        <>
            <Container>
                <Breadcrumbs items={crumbs} />
            </Container>

            <Container className={styles.sections}>
                <div className={styles.main}>
                    <SectionQuestionDescription questionId={numericQuestionId} />
                    <SectionQuestionShortAnswer questionId={numericQuestionId} />
                    <SectionQuestionLongAnswer questionId={numericQuestionId} />
                </div>
                
                <div className={styles.additional}>
                    <SectionQuestionMeta questionId={numericQuestionId} />
                </div>
            </Container>
        </>
    )
}