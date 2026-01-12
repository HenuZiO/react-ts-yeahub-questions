import { Link } from 'react-router'
import { cn } from '@/6_shared/lib/utils/classnames'

import { ChevroneDownIcon } from '@/6_shared/ui/icon'

import type { SidebarGroupItem } from '../../model/menuTypes'

import styles from '../Sidebar.module.css'

type SidebarNavGroupProps = {
    item: SidebarGroupItem,
    isOpen: boolean,
    onToggle: () => void
}

export const SidebarNavGroup = (props: SidebarNavGroupProps) => {
    const { item, isOpen, onToggle } = props
    const { id, label, Icon, children } = item
    
    return (
        <li className={styles.nav__group} data-expanded={isOpen}>
            <button
                className={styles.nav__item}
                type='button'
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`${id}-submenu`}
            >
                <Icon className={styles.nav__icon} />
                <span className={styles.nav__label}>
                    {label}
                </span>
                <span className={styles.nav__chevron}>
                    <ChevroneDownIcon />
                </span>
            </button>

            <div className={styles.nav__submenu} id={`${id}-submenu`}>
                <div className={styles.nav__submenu_inner}>
                    {children.map(child => {
                        const { id, href, label, Icon } = child
                        
                        return (
                            <Link
                                className={cn(styles.nav__item, styles.nav__item_submenu)}
                                to={href}
                                key={id}
                            >
                            <Icon className={styles.nav__icon} />
                            <span className={styles.nav__label}>{label}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </li>
    )
}