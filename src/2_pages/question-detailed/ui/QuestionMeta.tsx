import { useNavigate } from 'react-router'
import { useAppDispatch } from '@/1_app/store'
import { resetFilters, toggleSkill } from '@/4_features/questions-filters'
import type { Question } from '@/5_entities/question'
import { Section } from '@/6_shared/ui/section'
import { QuestionMetaChip } from '@/6_shared/ui/question-meta-chip'
import { FilterChip } from '@/6_shared/ui/filter-chip'
import { getSkillIcon } from '@/6_shared/lib/utils/skillIcon'
import { routes } from '@/6_shared/config/routes'

import styles from './QuestionMeta.module.css'
import { SectionTitle } from '@/6_shared/ui/section-title'

type QuestionMetaProps = {
    question: Question
}

export const QuestionMeta = ({ question }: QuestionMetaProps) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleNavigateToQuestions = (skillId: number) => {
        dispatch(resetFilters())
        dispatch(toggleSkill(skillId))
        
        navigate(routes.questions)
    }
    
    return (
        <Section>
            <SectionTitle className='visually-hidden'>
                Информация о вопросе
            </SectionTitle>
            
            <div className={styles.group}>
                <h3 className={styles.group__title}>Уровень:</h3>
                
                <div className={styles.meta__list}>
                    <QuestionMetaChip label='Сложность' value={question.complexity} />
                    <QuestionMetaChip label='Рейтинг' value={question.rate} />
                </div>
            </div>
            
            <div className={styles.group}>
                <h3 className={styles.group__title}>Навыки:</h3>
                
                <ul className={styles.skills__list}>
                    {question.questionSkills.map(skill => (
                        <FilterChip
                            className={styles.chip}
                            key={skill.id}
                            label={skill.title}
                            iconSrc={getSkillIcon(skill.title)}
                            onClick={() => handleNavigateToQuestions(skill.id)}
                        />
                    ))}
                </ul>
            </div>
            
            <div className={styles.group}>
                <h3 className={styles.group__title}>Ключевые слова:</h3>
                
                <ul className={styles.keywords__list}>
                    {question.keywords.map(keyword => (
                        <li>#{keyword}</li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}