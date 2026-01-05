import React from 'react'

import { useAppSelector } from '@/1_app/store'
import { useGetSkillsQuery } from '@/5_entities/skill'

import { FilterByTitle } from '../filter-by-title'
import { FilterBySkills } from '../filter-by-skills'
import { FilterByComplexity } from '../filter-by-complexity'
import { FilterByRate } from '../filter-by-rate'
import { FiltersReset } from '../filters-reset'

import {
    selectChosenComplexity,
    selectChosenRate,
    selectChosenSkills,
    selectEnteredTitle
} from '../model/questionsFiltersSelectors'

import styles from './QuestionsFilters.module.css'

export const QuestionFilters = () => {
    const title = useAppSelector(selectEnteredTitle)
    const skills = useAppSelector(selectChosenSkills)
    const complexity = useAppSelector(selectChosenComplexity)
    const rate = useAppSelector(selectChosenRate)
    
    const { data, isLoading } = useGetSkillsQuery({ page: 1, limit: 100 })
    
    if (isLoading) {
        return <div>Идет загрузка данных…</div>
    }
    
    const skillsList = data?.skills ?? []
    
    const hasActiveFilters = title.trim().length > 0 || skills.length > 0 || complexity.length > 0 || rate.length > 0
    
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
            <FiltersReset hasActiveFilters={hasActiveFilters} />
        </form>
    )
}