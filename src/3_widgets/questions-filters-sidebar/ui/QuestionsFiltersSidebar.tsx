import { QuestionFilters } from '@/4_features/questions-filters'
import { SectionTitle } from '@/6_shared/ui/section-title'
import { Section } from '@/6_shared/ui/section'

export const QuestionsFiltersSidebar = () => {
    return (
        <Section>
            <SectionTitle className='visually-hidden'>
                Фильтры по вопросам для собеседований
            </SectionTitle>
            
            <QuestionFilters />
        </Section>
    )
}