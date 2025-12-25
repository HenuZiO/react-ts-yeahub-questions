import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { SkillsApiResponse } from '../model/skillTypes'
import type { SkillsQueryResult, SkillsQueryParams } from '../model/skillsQueryTypes'

export const skillApi = createApi({
    reducerPath: 'skillApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.yeatwork.ru/'
    }),
    endpoints: (builder) => ({
        getSkills: builder.query<SkillsQueryResult, SkillsQueryParams>({
            query: (params) => ({
                url: `skills`,
                params
            }),
            transformResponse: (response: SkillsApiResponse) => ({
                skills: response.data,
                page: response.page,
                limit: response.limit,
                total: response.total,
            })
        }),
    }),
})

export const { useGetSkillsQuery } = skillApi