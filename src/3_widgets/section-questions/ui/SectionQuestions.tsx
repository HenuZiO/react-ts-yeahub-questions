import { useAppSelector } from '@/1_app/store'
import { QuestionsPagination } from '@/4_features/questions-pagination'
import { selectQuestionsQueryParams } from '@/4_features/questions-filters'
import { QuestionItem, useGetQuestionsQuery } from '@/5_entities/question'
import { SectionTitle } from '@/6_shared/ui/section-title'
import { Section } from '@/6_shared/ui/section'

type SectionProps = {
    className: string
}

export const SectionQuestions = ({className}: SectionProps) => {
    const queryParams = useAppSelector(selectQuestionsQueryParams)
    
    const { data, isLoading } = useGetQuestionsQuery(queryParams)
    
    if (isLoading) {
        return <div>Идет загрузка данных…</div>
    }
    
    return (
        <Section className={className}>
            <SectionTitle>
                Вопросы для собеседований
            </SectionTitle>
            
            {data?.questions.map(question => (
                <QuestionItem key={question.id} question={question}/>
            ))}
            
            <QuestionsPagination />
        </Section>
    )
}