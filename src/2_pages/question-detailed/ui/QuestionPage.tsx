import { useParams } from 'react-router'
import { useGetQuestionByIdQuery } from '@/5_entities/question'
import { Breadcrumbs } from '@/6_shared/ui/breadcrumbs'
import { Container } from '@/6_shared/ui/container'

import { buildQuestionPageCrumbs } from '../lib/buildQuestionPageCrumbs'

import { QuestionDescription } from './blocks/QuestionDescription'
import { QuestionShortAnswer } from './blocks/QuestionShortAnswer'
import { QuestionLongAnswer } from './blocks/QuestionLongAnswer'
import { QuestionMeta } from './blocks/QuestionMeta'

import { QuestionPageSkeleton } from './fallbacks/QuestionPageSkeleton'
import { QuestionPageError } from './fallbacks/QuestionPageError'

import styles from './QuestionPage.module.css'

export const QuestionPage = () => {
    const { questionId } = useParams<{ questionId: string }>()
    
    if (!questionId) return null
    
    const { data: question, isLoading, isError } = useGetQuestionByIdQuery(Number(questionId))
    
    if (isLoading) return <QuestionPageSkeleton />
    if (isError || !question) return <QuestionPageError />
    
    const crumbs = buildQuestionPageCrumbs(question)
    
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