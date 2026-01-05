import { baseApi } from '@/6_shared/api'
import type { QuestionsQueryParams, QuestionsQueryResult } from '../model/questionQueryTypes'
import type { Question, QuestionsApiResponse } from '../model/questionTypes'

export const questionApi = baseApi.injectEndpoints({
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
                total: response.total
            })
        }),
        getQuestionById: builder.query<Question, number>({
            query: (id) => ({
                url: `questions/public-questions/${id}`
            })
        })
    }),
    overrideExisting: false
})

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi