import { Section } from '@/6_shared/ui/section'
import { useGetQuestionByIdQuery } from '@/5_entities/question/api/questionApi'

export const SectionQuestionDescription = ({ questionId }) => {
    const { data, isLoading } = useGetQuestionByIdQuery(questionId)
    
    if (isLoading) {
        return <div>Идет загрузка данных вопроса...</div>
    }
    
    console.log(data)
    
    return (
        <Section>
            Секция с кратким описанием вопроса #{data?.id}: {data?.title}
        </Section>
    )
}