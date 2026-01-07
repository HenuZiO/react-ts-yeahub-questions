export type QuestionsFiltersState = {
    page: number
    limit: number
    title: string
    skills: number[]
    skillFilterMode: 'ANY' | 'ALL'
    complexity: number[]
    rate: number[]
}