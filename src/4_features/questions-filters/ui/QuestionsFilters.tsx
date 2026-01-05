import React from 'react'
import { useGetSkillsQuery } from '@/5_entities/skill'

import { useQuestionFilters } from '../lib/useQuestionFilters'

import { FilterByTitle } from './FilterByTitle'
import { FilterBySkills } from './FilterBySkills'
import { FilterByComplexity } from './FilterByComplexity'
import { FilterByRate } from './FilterByRate'
import { FiltersReset } from './FiltersReset'

import styles from './QuestionsFilters.module.css'

export const QuestionFilters = () => {
    const { title, skills, complexity, rate, hasActiveFilters, onReset } = useQuestionFilters()
    
    const { data, isLoading } = useGetSkillsQuery({ page: 1, limit: 100 })
    
    if (isLoading) {
        return <div>Идет загрузка данных…</div>
    }
    
    const skillsList = data?.skills ?? []
    
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    
    return (
        <form
            className={styles.filters}
            aria-label='Фильтры вопросов'
            onSubmit={handleFormSubmit}
        >
            <FilterByTitle title={title} />
            <FilterBySkills skills={skillsList} selectedSkillIds={skills} />
            <FilterByComplexity complexity={complexity} />
            <FilterByRate rate={rate} />
            <FiltersReset hasActiveFilters={hasActiveFilters} onReset={onReset} />
        </form>
    )
}