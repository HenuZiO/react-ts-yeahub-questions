import { useAppDispatch, useAppSelector } from '@/1_app/store'
import { selectQuestionsQueryParams, setPage } from '@/4_features/questions-filters'
import { useGetQuestionsQuery } from '@/5_entities/question'
import { Pagination } from '@/6_shared/ui/pagination'

export const QuestionsPagination = () => {
    const dispatch = useAppDispatch()
    const queryParams = useAppSelector(selectQuestionsQueryParams)
    
    const { total } = useGetQuestionsQuery(queryParams, {
        selectFromResult: ({ data }) => ({
            total: data?.total ?? 0
        })
    })
    
    const page = queryParams.page ?? 1
    const limit = queryParams.limit ?? 10
    const totalPages = Math.ceil(total / limit)
    
    if (totalPages <= 1) return null
    
    return (
        <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={page => dispatch(setPage(page))}
        />
    )
}