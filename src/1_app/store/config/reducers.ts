import { combineReducers } from '@reduxjs/toolkit'
import { questionsFiltersReducer } from '@/4_features/questions-filters'
import { questionApi } from '@/5_entities/question'
import { skillApi } from '@/5_entities/skill'

export const rootReducer = combineReducers({
    [questionApi.reducerPath]: questionApi.reducer,
    [skillApi.reducerPath]: skillApi.reducer,
    questionsFilters: questionsFiltersReducer
})