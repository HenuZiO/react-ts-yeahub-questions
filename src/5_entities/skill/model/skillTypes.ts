import type { Specialization } from '@/5_entities/specialization'
import type { AuthorShort, BaseApiResponse } from '@/6_shared/model'

export type Skill = {
    id: number
    title: string
    description: string
    imageSrc: string | null
    createdAt: string
    updatedAt: string
    createdBy: AuthorShort
    specializations: Specialization[]
}

export type SkillsApiResponse = BaseApiResponse<Skill>