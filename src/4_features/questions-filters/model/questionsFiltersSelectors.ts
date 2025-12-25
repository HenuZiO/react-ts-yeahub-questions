import type { RootState } from '@/1_app/store'
import type { QuestionsQueryParams } from '@/5_entities/question'

export const selectQuestionsQueryParams = (state: RootState) => {
    const { page, limit, title, skills, skillFilterMode, complexity, rate } = state.questionsFilters
    
    const params: QuestionsQueryParams = {
        page,
        limit
    }
    
    if (title.trim()) {
        params.title = title
    }
    
    if (skills.length > 0) {
        params.skills = skills
        params.skillFilterMode = skillFilterMode
    }
    
    if (complexity.length > 0) {
        params.complexity = complexity
    }
    
    if (rate.length > 0) {
        params.rate = rate
    }
    
    return params
}

export const selectEnteredTitle = (state: RootState) => {
    return state.questionsFilters.title
}

export const selectChosenSkills = (state: RootState) => {
    return state.questionsFilters.skills
}

export const selectChosenComplexity = (state: RootState) => {
    return state.questionsFilters.complexity
}

export const selectChosenRate = (state: RootState) => {
    return state.questionsFilters.rate
}