import { useGetQuestionByIdQuery } from '@/5_entities/question'
import { Section } from '@/6_shared/ui/section'
import { SectionTitle } from '@/6_shared/ui/section-title'

type SectionProps = {
    questionId: number
}

export const SectionQuestionShortAnswer = ({ questionId }: SectionProps) => {
    const { data: question, isLoading } = useGetQuestionByIdQuery(questionId)
    
    if (isLoading) {
        return <div>Идет загрузка данных вопроса...</div>
    }
    
    if (!question) {
        return <div>Вопрос не найден...</div>
    }
    
    return (
        <Section>
            <SectionTitle>
                Краткий ответ
            </SectionTitle>
            
            <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
        </Section>
    )
}