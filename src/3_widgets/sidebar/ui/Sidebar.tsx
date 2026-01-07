import { useState } from 'react'
import { Link } from 'react-router'
import { Button } from '@/6_shared/ui/button'
import { cn } from '@/6_shared/lib/utils/classnames'
import { YeaLogo } from '@/6_shared/ui/logo'

import { ChatCircleText, ChevroneDownIcon, LogoutIcon, SendSquareIcon } from '@/6_shared/ui/icon'

import { SIDEBAR_ITEMS } from '../config/menuConfig'
import type { SidebarLinkItem, SidebarNavGroupProps } from '../model/menuTypes'

import styles from './Sidebar.module.css'

const SidebarNavLink = (item: SidebarLinkItem) => {
    const { id, href, label, Icon } = item
    
    return (
        <li key={id}>
            <Link className={styles.nav__item} to={href}>
                <Icon className={styles.nav__icon} />
                <span className={styles.nav__label}>{label}</span>
            </Link>
        </li>
    )
}

const SidebarNavGroup = (props: SidebarNavGroupProps) => {
    const { item, isOpen, onToggle } = props
    const { id, label, Icon, children } = item
    
    return (
        <li
            key={id}
            className={styles.nav__group}
            data-expanded={isOpen}
        >
            <button
                className={styles.nav__item}
                type='button'
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`${id}-submenu`}
            >
                <Icon className={styles.nav__icon} />
                <span className={styles.nav__label}>{label}</span>

                <span className={styles.nav__chevron}>
                    <ChevroneDownIcon />
                </span>
            </button>

            <div
                className={styles.nav__submenu}
                id={`${id}-submenu`}
            >
                <div className={styles.nav__submenu_inner}>
                    {children.map(child => (
                        <Link
                            className={cn(styles.nav__item, styles.nav__item_submenu)}
                            to={child.href}
                            key={child.id}
                        >
                            <child.Icon className={styles.nav__icon} />
                            <span className={styles.nav__label}>{child.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </li>
    )
}

export const Sidebar = () => {
    const [isSidebarHidden, setIsSidebarHidden] = useState(false)
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        training: true,
        blog: false
    })
    
    const handleGroupToggle = (id: string) => {
        setExpanded(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }
    
    const handleSidebarToggle = () => {
        setIsSidebarHidden(prev => !prev)
    }
    
    return (
        <aside className={styles.sidebar} data-collapsed={isSidebarHidden}>
            <header className={styles.sidebar__header}>
                <YeaLogo isSidebarHidden={isSidebarHidden} />

                <button
                    className={styles.sidebar__toggle}
                    type='button'
                    onClick={handleSidebarToggle}
                    aria-label={isSidebarHidden ? 'Развернуть сайдбар' : 'Свернуть сайдбар'}
                >
                    <SendSquareIcon size={20} />
                </button>
            </header>

            <nav className={styles.sidebar__nav} aria-label='Основная навигация'>
                <ul className={styles.nav__list}>
                    {SIDEBAR_ITEMS.map(item => {
                        if (item.type === 'link') {
                            return SidebarNavLink(item)
                        }
                        
                        if (item.type === 'group') {
                            const isOpen = expanded[item.id]
                            
                            return SidebarNavGroup({
                                item,
                                isOpen,
                                onToggle: () => handleGroupToggle(item.id)
                            })
                        }
                        
                        return null
                    })}
                </ul>
            </nav>

            <footer className={styles.sidebar__footer}>
                <Button className={styles.footer__button} variant='primary' as='a' href='/'>
                    <ChatCircleText className={styles.nav__icon} />
                    <span className={styles.nav__label}>Поддержка</span>
                </Button>
            
                <Button className={styles.footer__button} variant='destructive'>
                    <LogoutIcon className={styles.nav__icon} />
                    <span className={styles.nav__label}>Выход</span>
                </Button>
            </footer>
        </aside>
    )
}