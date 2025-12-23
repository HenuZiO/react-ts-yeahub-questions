import { useGetQuestionsQuery } from '../../../5_entities/question/api/questionApi'
import { QuestionItem } from '../../../5_entities/question/ui/QuestionItem'

export const QuestionsList = () => {
    const { data, isLoading } = useGetQuestionsQuery({ page: 1, limit: 10 })
    
    if (isLoading) {
        return (
            <div>Идет загрузка данных…</div>
        )
    }
    
    return (
        <>
            {data?.questions.map(question => (
                <QuestionItem key={question.id} question={question}/>
            ))}
        </>
    )
}