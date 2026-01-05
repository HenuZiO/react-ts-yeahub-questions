import React from 'react'
import { cn } from '@/6_shared/lib/utils/classnames'

import styles from './Section.module.css'

type SectionProps = {
    children: React.ReactNode
    className?: string
    imageSrc?: string
}

export const Section = (props: SectionProps) => {
    const { children, className, imageSrc } = props
    
    return (
        <section className={cn(styles.section, className)}>
            
            {imageSrc && (
                <div className={styles.image__wrapper}>
                    <img
                        className={styles.image}
                        src={imageSrc}
                        alt=''
                        width='170'
                        height='114'
                        loading='lazy'
                    />
                </div>
            )}
            
            <div className={styles.content}>
                {children}
            </div>
        </section>
    )
}