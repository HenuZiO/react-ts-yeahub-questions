import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { QuestionsQueryParams } from '../model/questionQueryTypes'
import type { QuestionsQueryResult } from '../model/questionQueryTypes'
import type { QuestionsApiResponse } from '../model/questionTypes'

export const questionApi = createApi({
    reducerPath: 'questionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.yeatwork.ru/'
    }),
    endpoints: (builder) => ({
        getQuestions: builder.query<QuestionsQueryResult, QuestionsQueryParams>({
            query: (params) => ({
                url: `questions/public-questions`,
                params
            }),
            transformResponse: (response: QuestionsApiResponse) => ({
                questions: response.data,
                page: response.page,
                limit: response.limit,
                total: response.total,
            })
        }),
    }),
})

export const { useGetQuestionsQuery } = questionApi