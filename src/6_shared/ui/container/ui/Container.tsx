import React from 'react'
import { cn } from '@/6_shared/lib/utils/classnames'

import styles from './Container.module.css'

type ContainerProps = {
    children: React.ReactNode
    className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn(styles.container, className)}>
            {children}
        </div>
    )
}