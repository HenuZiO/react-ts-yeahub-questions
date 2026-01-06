import { useParams } from 'react-router'
import { useGetQuestionByIdQuery } from '@/5_entities/question'
import { Breadcrumbs } from '@/6_shared/ui/breadcrumbs'
import type { BreadcrumbItem } from '@/6_shared/ui/breadcrumbs'
import { Container } from '@/6_shared/ui/container'

import { QuestionDescription } from './QuestionDescription'
import { QuestionShortAnswer } from './QuestionShortAnswer'
import { QuestionLongAnswer } from './QuestionLongAnswer'
import { QuestionMeta } from './QuestionMeta'

import styles from './QuestionPage.module.css'

export const QuestionPage = () => {
    const { questionId } = useParams<{ questionId: string }>()
    
    if (!questionId) return null
    
    const { data: question, isLoading, isError } = useGetQuestionByIdQuery(Number(questionId))
    
    if (isLoading) {
        return <div>Идет загрузка данных вопроса…</div>
    }
    
    if (isError || !question) {
        return <div>Вопрос не найден</div>
    }
    
    const firstSkill = question.questionSkills[0]
    
    const skillCrumb: BreadcrumbItem | null = firstSkill
        ? { label: firstSkill.title, to: `/questions?skills=${firstSkill.id}`}
        : null
    
    const crumbs: BreadcrumbItem[] = [
        { label: 'Обучение', to: '/' },
        { label: 'Список вопросов', to: '/questions' },
        ...(skillCrumb ? [skillCrumb] : []),
        { label: question.title ?? 'Загрузка…' }
    ]
    
    return (
        <>
            <Container>
                <Breadcrumbs items={crumbs} />
            </Container>

            <Container className={styles.sections}>
                <div className={styles.main}>
                    <QuestionDescription question={question} />
                    <QuestionShortAnswer shortAnswer={question.shortAnswer} />
                    <QuestionLongAnswer longAnswer={question.longAnswer} />
                </div>
                
                <div className={styles.additional}>
                    <QuestionMeta question={question}/>
                </div>
            </Container>
        </>
    )
}