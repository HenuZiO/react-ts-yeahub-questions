import React from 'react'
import styles from './Popover.module.css'

type PopoverContentProps = {
    children: React.ReactNode
}

export const PopoverContent = ({ children }: PopoverContentProps) => {
    return (
        <div className={styles.popover__content}>
            {children}
        </div>
    )
}