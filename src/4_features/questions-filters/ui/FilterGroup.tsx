import React from 'react'
import { cn } from '@/6_shared/lib/utils/classnames'

import styles from './QuestionsFilters.module.css'

type FilterGroupProps = {
    title: string
    children: React.ReactNode
    className?: string
}

export const FilterGroup = (props: FilterGroupProps) => {
    const {children, className, title} = props
    
    return (
        <fieldset className={cn(styles.filters__group, className)}>
            <legend className={styles.group__title}>{title}</legend>
            {children}
        </fieldset>
    )
}