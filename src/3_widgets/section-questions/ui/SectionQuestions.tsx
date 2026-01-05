import { useRef, useState } from 'react'
import { useAppSelector } from '@/1_app/store'
import { QuestionsPagination } from '@/4_features/questions-pagination'
import { selectQuestionsQueryParams } from '@/4_features/questions-filters'
import { QuestionMenu } from '@/4_features/question-menu'
import { QuestionItem, useGetQuestionsQuery } from '@/5_entities/question'
import { EmptyState } from '@/6_shared/ui/empty-state'
import { Section } from '@/6_shared/ui/section'
import { SectionTitle } from '@/6_shared/ui/section-title'
import { Popover } from '@/6_shared/ui/popover'

type SectionProps = {
    className: string
}

export const SectionQuestions = ({ className }: SectionProps) => {
    const queryParams = useAppSelector(selectQuestionsQueryParams)
    const { data, isLoading } = useGetQuestionsQuery(queryParams)
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null)
    
    const menuAnchorRef = useRef<HTMLButtonElement>(null)
    
    if (isLoading) {
        return <div>Идет загрузка данных…</div>
    }
    
    const questionsList = data?.questions ?? []
    
    const handleMenuOpen = (questionId: number, anchorEl: HTMLButtonElement) => {
        menuAnchorRef.current = anchorEl
        setActiveQuestionId(questionId)
        setIsMenuOpen(true)
    }
    
    const handleMenuClose = () => {
        setIsMenuOpen(false)
    }
    
    return (
        <Section className={className}>
            <SectionTitle>
                Вопросы для собеседований
            </SectionTitle>
            
            {questionsList.length > 0
                ? questionsList.map(question => (
                    <QuestionItem
                        key={question.id}
                        question={question}
                        onMenuOpen={handleMenuOpen}
                        isMenuOpen={isMenuOpen && activeQuestionId === question.id}
                    />
                ))
                : <EmptyState />
            }
            
            <QuestionsPagination />
            
            <Popover
                anchorRef={menuAnchorRef}
                isOpen={isMenuOpen}
                onClose={handleMenuClose}
            >
                {activeQuestionId !== null ? (
                    <QuestionMenu
                        questionId={activeQuestionId}
                        onSelect={handleMenuClose}
                    />
                ) : null}
            </Popover>
        </Section>
    )
}