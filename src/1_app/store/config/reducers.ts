import { combineReducers } from '@reduxjs/toolkit'
import { questionApi } from '../../../5_entities/question/api/questionApi'

export const rootReducer = combineReducers({
    [questionApi.reducerPath]: questionApi.reducer
})