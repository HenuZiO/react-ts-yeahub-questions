import { Section } from '@/6_shared/ui/section'
import { SectionTitle } from '@/6_shared/ui/section-title'

type QuestionLongAnswerProps = {
    longAnswer: string
}

export const QuestionLongAnswer = ({ longAnswer }: QuestionLongAnswerProps) => {
    return (
        <Section>
            <SectionTitle>
                Развёрнутый ответ
            </SectionTitle>
            
            <div dangerouslySetInnerHTML={{ __html: longAnswer }} />
        </Section>
    )
}