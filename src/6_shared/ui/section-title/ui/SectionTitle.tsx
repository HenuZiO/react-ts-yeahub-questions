import React from 'react'
import { cn } from '@/6_shared/lib/utils/classnames'

import styles from './SectionTitle.module.css'

type SectionTitleProps = {
    children: React.ReactNode
    className?: string
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
    return (
        <h2 className={cn(styles.section__title, className)}>
            {children}
        </h2>
    )
}