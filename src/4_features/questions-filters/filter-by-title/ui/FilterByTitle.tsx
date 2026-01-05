import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '@/1_app/store'
import { cn } from '@/6_shared/lib/utils/classnames'
import { useDebounce } from '@/6_shared/lib/hooks'

import { setTitle } from '../../model/questionsFiltersSlice'

import { CloseCircleIcon, MagniferIcon } from '@/6_shared/ui/icon'

import styles from '../../ui/QuestionsFilters.module.css'

export const FilterByTitle = ({ title }: { title: string }) => {
    const [inputValue, setInputValue] = useState(title)
    const inputRef = useRef<HTMLInputElement>(null)
    
    const debouncedTitle = useDebounce(inputValue, 500)
    
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(setTitle(debouncedTitle))
    }, [dispatch, debouncedTitle]);
    
    useEffect(() => {
        setInputValue(title)
    }, [title])
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    
    const handleInputClear = () => {
        setInputValue('')
        inputRef.current?.focus()
    }
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Escape') {
            setInputValue('')
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
                value={inputValue}
                placeholder='Введите запрос...'
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
                
                
            <button
                className={clearButtonClassName}
                type='button'
                onClick={handleInputClear}
                aria-hidden={!inputValue}
            >
                <CloseCircleIcon
                    className={cn(styles.search__icon, styles.search__icon_end)}
                    size={20}
                />
            </button>
        </div>
    )
}