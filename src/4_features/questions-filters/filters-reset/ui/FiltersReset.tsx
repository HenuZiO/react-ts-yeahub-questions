import { useAppDispatch } from '@/1_app/store'
import { Button } from '@/6_shared/ui/button'
import { resetFilters } from '../../model/questionsFiltersSlice'

type FilterProps = {
    hasActiveFilters: boolean
}

export const FiltersReset = ({hasActiveFilters}: FilterProps) => {
    const dispatch = useAppDispatch()
    
    return (
        <Button
            variant={hasActiveFilters ? 'primary' : 'disable'}
            type='reset'
            onClick={() => dispatch(resetFilters())}
            aria-label='Очистить фильтры'
            disabled={!hasActiveFilters}
        >
            Очистить фильтры
        </Button>
    )
}