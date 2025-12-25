import React from 'react'
import { cn } from '@/6_shared/lib/utils/classnames'

import styles from './Section.module.css'

type SectionProps = {
    children: React.ReactNode
    className?: string
}

export const Section = (props: SectionProps) => {
    const { children, className } = props
    
    return (
        <section className={cn(styles.section, className)}>
            {children}
        </section>
    )
}