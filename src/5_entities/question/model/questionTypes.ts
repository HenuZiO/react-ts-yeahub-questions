import type { Skill } from '@/5_entities/skill'
import type { Specialization } from '@/5_entities/specialization'
import type { AuthorShort, BaseApiResponse } from '@/6_shared/model'

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
    createdBy: AuthorShort
    updatedBy: AuthorShort
    questionSpecializations: Specialization[]
    questionSkills: Skill[]
}

export type QuestionsApiResponse = BaseApiResponse<Question>

export type QuestionProps = {
    question: Question
    onMenuOpen: (questionId: number, anchorEl: HTMLButtonElement) => void
    isMenuOpen: boolean
}