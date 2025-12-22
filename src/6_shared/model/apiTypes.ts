export type BaseApiResponse<T> = {
    data: T[]
    page: number
    limit: number
    total: number
}