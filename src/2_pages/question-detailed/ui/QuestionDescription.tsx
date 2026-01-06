import type { Question } from '@/5_entities/question'
import { Section } from '@/6_shared/ui/section'
import { SectionTitle } from '@/6_shared/ui/section-title'
import { getSkillIcon } from '@/6_shared/lib/utils/skillIcon'

import styles from './QuestionDescription.module.css'

type QuestionDescriptionProps = {
    question: Question
}

export const QuestionDescription = ({ question }: QuestionDescriptionProps) => {
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