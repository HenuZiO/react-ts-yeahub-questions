import React from 'react'
import { cn } from '../../lib/utils/classNames'

import styles from './Button.module.css'

const buttonVariants = {
    primary: styles.button__primary,
    outline: styles.button__outline
} as const

type ButtonVariants = keyof typeof buttonVariants

type ButtonProps = {
    as?: 'button' | 'a'
    variant?: ButtonVariants
    className?: string
    children: React.ReactNode
} & (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>)

export const Button = (props: ButtonProps) => {
    const { as = 'button', variant = 'primary', className, children, ...rest } = props
    
    const styleClasses = cn(styles.button, buttonVariants[variant], className)
    
    if (as === 'a') {
        return (
            <a
                className={styleClasses}
                {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </a>
        )
    }
    
    return (
        <button
            className={styleClasses}
            type='button'
            {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    )
}