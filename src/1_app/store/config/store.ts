import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'
import { questionApi } from '../../../5_entities/question/api/questionApi'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(questionApi.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

