import { useAppDispatch } from '@/1_app/store'
import { toggleRate } from '../../model/questionsFiltersSlice'
import { RATE_VALUES } from '../../config/rateConfig'

import styles from '../../ui/QuestionsFilters.module.css'

type FilterProps = {
    rate: number[]
}

export const FilterByRate = ({ rate }: FilterProps) => {
    const dispatch = useAppDispatch()
    
    return (
        <fieldset className={styles.filters__group}>
            <legend className={styles.group__title}>
                Рейтинг
            </legend>
                
            <ul className={styles.group__list}>
                {RATE_VALUES.map(value => {
                    const isActive = rate.includes(value)
                    
                    return (
                        <li key={value}>
                            <button
                                className={styles.group__button}
                                type='button'
                                aria-pressed={isActive}
                                onClick={() => dispatch(toggleRate(value))}
                            >
                                {value}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </fieldset>
    )
}