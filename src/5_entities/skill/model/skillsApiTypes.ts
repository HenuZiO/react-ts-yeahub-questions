import type { BaseApiResponse } from '@/6_shared/model'

import type { Skill } from './skillTypes'

export type SkillsQueryParams = {
    page?: number
    limit?: number
    specialization?: number[]
    authorId?: string
    title?: string
}

export type SkillsQueryResult = {
    skills: Skill[]
    page: number
    limit: number
    total: number
}

export type SkillsApiResponse = BaseApiResponse<Skill>
