import { Section } from '@/6_shared/ui/section'
import { SectionTitle } from '@/6_shared/ui/section-title'

type QuestionShortAnswerProps = {
    shortAnswer: string
}

export const QuestionShortAnswer = ({ shortAnswer }: QuestionShortAnswerProps) => {
    
    return (
        <Section>
            <SectionTitle>
                Краткий ответ
            </SectionTitle>
            
            <div dangerouslySetInnerHTML={{ __html: shortAnswer }} />
        </Section>
    )
}