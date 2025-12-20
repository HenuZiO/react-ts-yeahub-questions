import React from 'react'

import styles from './Container.module.css'
import { cn } from '../../lib/utils/classNames'

type Props = {
    children: React.ReactNode
    className?: string
}

export const Container = (props: Props) => {
    const { children, className } = props
    
    return (
        <div className={cn(styles.container, className)}>
            {children}
        </div>
    )
}