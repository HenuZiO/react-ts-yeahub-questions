import { useState } from 'react'
import { useAppDispatch } from '@/1_app/store'
import type { Skill } from '@/5_entities/skill'
import { SkillIcon } from '@/6_shared/ui/skill-icon'
import { getSkillIcon } from '@/6_shared/lib/utils/skillIcon'
import { toggleSkill } from '../../model/questionsFiltersSlice'

import styles from '../../ui/QuestionsFilters.module.css'

type FilterProps = {
    skills: Skill[]
    selectedSkillIds: number[]
}

export const FilterBySkills = ({ skills, selectedSkillIds }: FilterProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    
    const dispatch = useAppDispatch()
    
    const visibleSkills = isExpanded
        ? skills.filter(skill => skill.createdBy === null)
        : skills.filter(skill => skill.createdBy === null)
            .slice(0, 5)
    
    return (
        <fieldset className={styles.filters__group}>
            <legend className={styles.group__title}>
                Категории вопросов
            </legend>

            <ul className={styles.group__list} id='categories-list'>
                {visibleSkills.map(skill => {
                    const iconSrc = getSkillIcon(skill.title)
                    const isSelected = selectedSkillIds.includes(skill.id)
                    
                    return (
                        <li key={skill.id}>
                            <button
                                className={styles.group__button}
                                type='button'
                                onClick={() => dispatch(toggleSkill(skill.id))}
                                aria-pressed={isSelected}
                            >
                                {iconSrc && <SkillIcon src={iconSrc} title={skill.title} />}
                                <span>{skill.title}</span>
                            </button>
                        </li>
                    )
                })}
            </ul>
            
            {skills.length > 5 && (
                <button
                    className={styles.group__more}
                    type='button'
                    onClick={() => setIsExpanded(prev => !prev)}
                    aria-expanded='false'
                    aria-controls='categories-list'
                >
                    {isExpanded ? 'Свернуть' : 'Посмотреть все'}
                </button>
            )}
        </fieldset>
    )
}