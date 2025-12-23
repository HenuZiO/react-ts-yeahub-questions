import type { Question } from './questionTypes'

export type QuestionsQueryParams = {
    page?: number
    limit?: number
    title?: string
    skills?: number[]
    complexity?: number[]
    rate?: number[]
    specialization?: number
    keywords?: string[]
}

export type QuestionsQueryResult = {
    questions: Question[]
    page: number
    limit: number
    total: number
}