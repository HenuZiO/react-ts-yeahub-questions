import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { QuestionsFiltersState } from './questionsFiltersTypes'

const initialState: QuestionsFiltersState = {
    page: 1,
    limit: 10,
    title: '',
    skills: [],
    skillFilterMode: 'ANY',
    complexity: [],
    rate: []
}

const questionsFiltersSlice = createSlice({
    name: 'questionsFilters',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
            state.page = 1
        },
        toggleSkill: (state, action: PayloadAction<number>) => {
            const selectedSkillId = action.payload
            
            if (state.skills.includes(selectedSkillId)) {
                state.skills = state.skills.filter(skillId => selectedSkillId !== skillId)
            } else {
                state.skills.push(selectedSkillId)
            }
            
            state.page = 1
        },
        toggleComplexityGroup: (state, action: PayloadAction<number[]>) => {
            const values = action.payload
            
            const hasAnySelected = values.some(value => state.complexity.includes(value))
            
            if (hasAnySelected) {
                state.complexity = state.complexity.filter(
                    value => !values.includes(value)
                )
            } else {
                values.forEach(value => {
                    if (!state.complexity.includes(value)) {
                        state.complexity.push(value)
                    }
                })
            }
            
            state.page = 1
        },
        toggleRate: (state, action: PayloadAction<number>) => {
            const selectedValue = action.payload
            
            if (state.rate.includes(selectedValue)) {
                state.rate = state.rate.filter(value => selectedValue !== value)
            } else {
                state.rate.push(selectedValue)
            }
            
            state.page = 1
        },
        resetFilters: (state) => {
            state.page = 1
            state.title = ''
            state.skills = []
            state.complexity = []
            state.rate = []
        }
    }
})

export const {
    setPage,
    setTitle,
    toggleSkill,
    toggleComplexityGroup,
    toggleRate,
    resetFilters
} = questionsFiltersSlice.actions

export default questionsFiltersSlice.reducer

