import { useAppDispatch } from '@/1_app/store'
import { FilterChip } from '@/6_shared/ui/filter-chip'

import { FilterGroup } from './FilterGroup'

import { toggleRate } from '../model/questionsFiltersSlice'
import { RATE_VALUES } from '../config/rateConfig'

import styles from './QuestionsFilters.module.css'

export const FilterByRate = ({ rate }: { rate: number[] }) => {
    const dispatch = useAppDispatch()
    
    return (
        <FilterGroup title='Рейтинг'>
            <ul className={styles.group__list}>
                {RATE_VALUES.map(value => {
                    const isActive = rate.includes(value)
                    
                    return (
                        <li key={value}>
                            <FilterChip
                                label={value}
                                selected={isActive}
                                onClick={() => dispatch(toggleRate(value))}
                            />
                        </li>
                    )
                })}
            </ul>
        </FilterGroup>
    )
}