import { Button } from '@/6_shared/ui/button'

type FiltersResetProps = {
    hasActiveFilters: boolean
    onReset: () => void
}

export const FiltersReset = (props: FiltersResetProps) => {
    const { hasActiveFilters, onReset } = props
    
    return (
        <Button
            variant={hasActiveFilters ? 'primary' : 'disable'}
            type='reset'
            onClick={onReset}
            aria-label='Очистить фильтры'
            disabled={!hasActiveFilters}
        >
            Очистить фильтры
        </Button>
    )
}