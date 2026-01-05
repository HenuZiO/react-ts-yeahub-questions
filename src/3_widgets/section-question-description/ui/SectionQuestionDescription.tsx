import { useGetQuestionByIdQuery } from '@/5_entities/question'
import { Section } from '@/6_shared/ui/section'
import { SectionTitle } from '@/6_shared/ui/section-title'
import { getSkillIcon } from '@/6_shared/lib/utils/skillIcon'

import styles from './SectionQuestionDescription.module.css'

type SectionProps = {
    questionId: number
}

export const SectionQuestionDescription = ({ questionId }: SectionProps) => {
    const { data: question, isLoading } = useGetQuestionByIdQuery(questionId)
    
    if (isLoading) {
        return <div>Идет загрузка данных вопроса...</div>
    }
    
    if (!question) {
        return <div>Вопрос не найден...</div>
    }
    
    const skillIconSrc = getSkillIcon(question.questionSkills[0].title)
    
    return (
        <Section className={styles.section__question_description} imageSrc={skillIconSrc}>
                <SectionTitle>
                    {question.title}
                </SectionTitle>
            
                <p className={styles.question__description}>
                    {question.description}
                </p>
        </Section>
    )
}