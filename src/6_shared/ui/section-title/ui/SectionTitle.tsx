import React from 'react'

import styles from './SectionTitle.module.css'
import { cn } from '../../../lib/utils/classNames'

type SectionTitleProps = {
    children: React.ReactNode
    className?: string
}

export const SectionTitle = (props: SectionTitleProps) => {
    const { children, className } = props
    
    return (
        <h2 className={cn(styles.section__title, className)}>
            {children}
        </h2>
    )
}