import { useAppDispatch } from '@/1_app/store'
import { FilterChip } from '@/6_shared/ui/filter-chip'

import { toggleComplexity } from '../../model/questionsFiltersSlice'
import { COMPLEXITY_GROUPS } from '../../config/complexityConfig'

import styles from '../../ui/QuestionsFilters.module.css'

export const FilterByComplexity = ({ complexity }: { complexity: number[] }) => {
    const dispatch = useAppDispatch()
    
    return (
        <fieldset className={styles.filters__group}>
            <legend className={styles.group__title}>
                Уровень сложности
            </legend>
                
            <ul className={styles.group__list}>
                {COMPLEXITY_GROUPS.map(group => {
                    const isActive = group.values.some(value => complexity.includes(value))
                    
                    return (
                        <li key={group.label}>
                            <FilterChip
                                label={group.label}
                                selected={isActive}
                                onClick={() => {
                                    group.values.forEach(value => {
                                        dispatch(toggleComplexity(value))
                                    })
                                }}
                            />
                        </li>
                    )
                })}
            </ul>
        </fieldset>
    )
}