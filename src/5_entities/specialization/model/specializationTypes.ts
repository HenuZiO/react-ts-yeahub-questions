import type { BaseApiResponse } from '../../../6_shared/model/apiTypes'
import type { UserShort } from '../../../6_shared/model/userTypes'

export type Specialization = {
    id: number
    title: string
    description: string
    imageSrc: string | null
    createdAt: string
    updatedAt: string
    createdBy: UserShort | null
}

export type SpecializationsApiResponse = BaseApiResponse<Specialization>
