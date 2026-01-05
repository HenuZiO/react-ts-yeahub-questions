import { baseApi } from '@/6_shared/api'

import type { SkillsApiResponse } from '../model/skillTypes'
import type { SkillsQueryResult, SkillsQueryParams } from '../model/skillsQueryTypes'

export const skillApi = baseApi.injectEndpoints({
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
    overrideExisting: false
})

export const { useGetSkillsQuery } = skillApi