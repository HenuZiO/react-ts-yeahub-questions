import { combineReducers } from '@reduxjs/toolkit'
import { questionsFiltersReducer } from '@/4_features/questions-filters'
import { baseApi } from '@/6_shared/api'

export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    questionsFilters: questionsFiltersReducer
})