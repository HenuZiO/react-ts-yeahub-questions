import type { AuthorShort } from '@/6_shared/model'

export type Specialization = {
    id: number
    title: string
    description: string
    imageSrc: string | null
    createdAt: string
    updatedAt: string
    createdBy: AuthorShort | null
}