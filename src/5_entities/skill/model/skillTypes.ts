import type { Specialization } from '../../specialization/model/specializationTypes'
import type { BaseApiResponse } from '../../../6_shared/model/apiTypes'
import type { UserShort } from '../../../6_shared/model/userTypes'

export type Skill = {
    id: number
    title: string
    description: string
    imageSrc: string | null
    createdAt: string
    updatedAt: string
    createdBy: UserShort
    specializations: Specialization[]
}

export type SkillsApiResponse = BaseApiResponse<Skill>