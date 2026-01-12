import { useState } from 'react'
import { Button } from '@/6_shared/ui/button'
import { YeaLogo } from '@/6_shared/ui/logo'

import { ChatCircleText, LogoutIcon, SendSquareIcon } from '@/6_shared/ui/icon'

import { SIDEBAR_ITEMS } from '../config/menuConfig'

import { SidebarNavLink } from './nav/SidebarNavLink'
import { SidebarNavGroup } from './nav/SidebarNavGroup'

import styles from './Sidebar.module.css'

export const Sidebar = () => {
    const [isSidebarHidden, setIsSidebarHidden] = useState(false)
    
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        training: true,
        blog: false
    })
    
    const handleGroupToggle = (id: string) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
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
                            return (
                                <SidebarNavLink key={item.id} item={item} />
                            )
                        }
                        
                        if (item.type === 'group') {
                            return (
                                <SidebarNavGroup
                                    key={item.id}
                                    item={item}
                                    isOpen={expanded[item.id]}
                                    onToggle={() => handleGroupToggle(item.id)}
                                />
                            )
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