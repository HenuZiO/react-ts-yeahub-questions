import React, { useRef } from 'react'
import { useAppDispatch } from '@/1_app/store'
import { cn } from '@/6_shared/lib/utils/classnames'
import { setTitle } from '../../model/questionsFiltersSlice'

import { CloseCircleIcon, MagniferIcon } from '@/6_shared/ui/icon'

import styles from '../../ui/QuestionsFilters.module.css'

type FilterProps = {
    title: string
}

export const FilterByTitle = ({ title }: FilterProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    
    const dispatch = useAppDispatch()
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTitle(event.target.value))
    }
    
    const handleInputClear = () => {
        dispatch(setTitle(''))
        inputRef.current?.focus()
    }
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Escape') {
            dispatch(setTitle(''))
            inputRef.current?.blur()
        }
    }
    
    const clearButtonClassName = cn(styles.search__clear, title && styles.search__clear_visible)
    
    return (
        <div className={styles.filters__search}>
            <label className='visually-hidden' htmlFor='questions-search'>
                Поиск вопросов
            </label>

            <MagniferIcon
                className={cn(styles.search__icon, styles.search__icon_start)}
                size={20}
            />

            <input
                className={styles.search__input}
                id='questions-search'
                type='text'
                ref={inputRef}
                value={title}
                placeholder='Введите запрос...'
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
                
                
            <button
                className={clearButtonClassName}
                type='button'
                onClick={handleInputClear}
                aria-hidden={!title}
            >
                <CloseCircleIcon
                    className={cn(styles.search__icon, styles.search__icon_end)}
                    size={20}
                />
            </button>
        </div>
    )
}