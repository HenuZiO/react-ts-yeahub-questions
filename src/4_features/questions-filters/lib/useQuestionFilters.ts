import { useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/1_app/store'
import { resetFilters } from '@/4_features/questions-filters'

import {
    selectChosenComplexity,
    selectChosenRate,
    selectChosenSkills,
    selectEnteredTitle
} from '@/4_features/questions-filters/model/questionsFiltersSelectors'

export const useQuestionFilters = () => {
    const dispatch = useAppDispatch()
    
    const title = useAppSelector(selectEnteredTitle)
    const skills = useAppSelector(selectChosenSkills)
    const complexity = useAppSelector(selectChosenComplexity)
    const rate = useAppSelector(selectChosenRate)
    
    const hasActiveFilters = useMemo(() => {
        return Boolean(
            title.trim().length > 0
            || skills.length > 0
            || complexity.length > 0
            || rate.length > 0
        )
    }, [title, skills, complexity, rate])
    
    const handleReset = () => {
        dispatch(resetFilters())
    }
    
    return { title, skills, complexity, rate, hasActiveFilters, onReset: handleReset }
}