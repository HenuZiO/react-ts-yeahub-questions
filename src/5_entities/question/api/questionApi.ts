import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { QuestionsQueryParams } from '../model/questionQueryTypes'
import type { QuestionsApiResponse } from '../model/questionTypes'

export const questionApi = createApi({
    reducerPath: 'questionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.yeatwork.ru/'
    }),
    endpoints: (builder) => ({
        getQuestions: builder.query<QuestionsApiResponse, QuestionsQueryParams>({
            query: (params) => ({
                url: `questions/public-questions`,
                params
            }),
        }),
    }),
})

export const { useGetQuestionsQuery } = questionApi