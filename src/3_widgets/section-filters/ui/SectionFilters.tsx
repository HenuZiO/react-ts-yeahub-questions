import { QuestionFilters } from '@/4_features/questions-filters'
import { SectionTitle } from '@/6_shared/ui/section-title'
import { Section } from '@/6_shared/ui/section'

type SectionProps = {
    className: string
}

export const SectionFilters = ({ className }: SectionProps) => {
    return (
        <Section className={className}>
            <SectionTitle className='visually-hidden'>
                Фильтры по вопросам для собеседований
            </SectionTitle>
            
            <QuestionFilters />
        </Section>
    )
}