import { useState } from 'react'
import { useAppDispatch } from '@/1_app/store'
import type { Skill } from '@/5_entities/skill'
import { getSkillIcon } from '@/6_shared/lib/utils/skillIcon'
import { FilterChip } from '@/6_shared/ui/filter-chip'

import { FilterGroup } from './FilterGroup'

import { toggleSkill } from '../model/questionsFiltersSlice'

import styles from './QuestionsFilters.module.css'

type FilterBySkillsProps = {
    skills: Skill[]
    selectedSkillIds: number[]
}

export const FilterBySkills = ({ skills, selectedSkillIds }: FilterBySkillsProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    
    const dispatch = useAppDispatch()
    
    const baseSkills = skills.filter(skill => skill.createdBy === null)
    
    const visibleSkills = isExpanded ? baseSkills : baseSkills.slice(0, 5)
    
    return (
        <FilterGroup title='Категории вопросов'>
            <ul className={styles.group__list} id='categories-list'>
                {visibleSkills.map(skill => {
                    const iconSrc = getSkillIcon(skill.title)
                    const isSelected = selectedSkillIds.includes(skill.id)
                    
                    return (
                        <li key={skill.id}>
                            <FilterChip
                                label={skill.title}
                                iconSrc={iconSrc}
                                selected={isSelected}
                                onClick={() => dispatch(toggleSkill(skill.id))}
                            />
                        </li>
                    )
                })}
            </ul>
            
            {skills.length > 5 && (
                <button
                    className={styles.group__more}
                    type='button'
                    onClick={() => setIsExpanded(prev => !prev)}
                    aria-expanded={isExpanded}
                    aria-controls='categories-list'
                >
                    {isExpanded ? 'Свернуть' : 'Посмотреть все'}
                </button>
            )}
        </FilterGroup>
    )
}