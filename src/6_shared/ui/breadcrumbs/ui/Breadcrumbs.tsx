import { Link } from 'react-router'

import type { BreadcrumbItem } from '../model/breadcrumbsTypes'

import styles from './Breadcrumbs.module.css'

export type BreadcrumbsProps = {
    items: BreadcrumbItem[]
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    if (!items.length) return null
    
    return (
        <nav className={styles.breadcrumbs} aria-label='Хлебные крошки'>
            <ol className={styles.breadcrumbs__list}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1
                    
                    return (
                        <li key={`${item.label}-${index}`} className={styles.list__item}>
                            {item.to && !isLast ? (
                                <Link className={styles.list__link} to={item.to}>
                                    {item.label}
                                </Link>
                            ) : (
                                <span aria-current={isLast ? 'page' : undefined}>
                                    {item.label}
                                </span>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}