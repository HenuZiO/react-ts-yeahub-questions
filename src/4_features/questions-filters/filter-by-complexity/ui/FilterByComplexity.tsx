import { useAppDispatch } from '@/1_app/store'
import { toggleComplexity } from '../../model/questionsFiltersSlice'
import { COMPLEXITY_GROUPS } from '../../config/complexityConfig'

import styles from '../../ui/QuestionsFilters.module.css'

type FilterProps = {
    complexity: number[]
}

export const FilterByComplexity = ({ complexity }: FilterProps) => {
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
                            <button
                                className={styles.group__button}
                                type='button'
                                aria-pressed={isActive}
                                onClick={() => {
                                    group.values.forEach(value => {
                                        dispatch(toggleComplexity(value))
                                    })
                                }}
                            >
                                {group.label}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </fieldset>
    )
}