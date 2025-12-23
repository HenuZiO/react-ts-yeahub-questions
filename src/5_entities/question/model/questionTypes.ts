import type { Specialization } from '../../specialization/model/specializationTypes'
import type { Skill } from '../../skill/model/skillTypes'
import type { BaseApiResponse } from '../../../6_shared/model/apiTypes'
import type { UserShort } from '../../../6_shared/model/userTypes'

export type Question = {
    id: number
    title: string
    description: string
    code: string | null
    imageSrc: string | null
    keywords: string[]
    longAnswer: string
    shortAnswer: string
    status: string
    rate: number
    complexity: number
    createdAt: string
    updatedAt: string
    createdById: string
    updatedById: string
    createdBy: UserShort
    updatedBy: UserShort
    questionSpecializations: Specialization[]
    questionSkills: Skill[]
}

export type QuestionsApiResponse = BaseApiResponse<Question>

export type QuestionProps = {
    question: Question
}