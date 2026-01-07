import { useAppDispatch } from '@/1_app/store'
import { FilterChip } from '@/6_shared/ui/filter-chip'

import { COMPLEXITY_GROUPS } from '../config/complexityConfig'
import { toggleComplexityGroup } from '../model/questionsFiltersSlice'

import { FilterGroup } from './FilterGroup'

import styles from './QuestionsFilters.module.css'

export const FilterByComplexity = ({ complexity }: { complexity: number[] }) => {
    const dispatch = useAppDispatch()
    
    return (
        <FilterGroup title='Уровень сложности'>
            <ul className={styles.group__list}>
                {COMPLEXITY_GROUPS.map(group => {
                    const isSelected = group.values.some(value => complexity.includes(value))
                    
                    return (
                        <li key={group.label}>
                            <FilterChip
                                label={group.label}
                                selected={isSelected}
                                onClick={() => dispatch(toggleComplexityGroup(group.values))}
                            />
                        </li>
                    )
                })}
            </ul>
        </FilterGroup>
    )
}