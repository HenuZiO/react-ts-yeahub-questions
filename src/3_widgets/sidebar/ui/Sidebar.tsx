import { useState } from 'react'
import { Button } from '@/6_shared/ui/button'
import { YeaLogo } from '@/6_shared/ui/logo'
import { cn } from '@/6_shared/lib/utils/classnames'
import { SIDEBAR_ITEMS } from '../config/menuConfig'

import { ChatCircleText, ChevroneDownIcon, LogoutIcon, SendSquareIcon } from '@/6_shared/ui/icon'

import styles from './Sidebar.module.css'

export const Sidebar = () => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        training: false
    })
    
    const handleGroupToggle = (id: string) => {
        setExpanded(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }
    
    return (
        <aside className={styles.sidebar}>
            <header className={styles.sidebar__header}>
                <YeaLogo />

                <button
                    className={styles.sidebar__toggle}
                    type='button'
                    aria-label='Свернуть меню'
                >
                    <SendSquareIcon size={20} />
                </button>
            </header>

            <nav className={styles.sidebar__nav} aria-label='Основная навигация'>
                <ul className={styles.nav__list}>
                    {SIDEBAR_ITEMS.map(item => {
                        if (item.type === 'link') {
                            const { id, href, label, Icon } = item
                            
                            return (
                                <li key={id}>
                                    <a className={styles.nav__item} href={href}>
                                        <Icon />
                                        <span>{label}</span>
                                    </a>
                                </li>
                            )
                        }
                        
                        if (item.type === 'group') {
                            const isOpen = expanded[item.id]
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
                                        aria-expanded={isOpen}
                                        aria-controls={`${id}-submenu`}
                                        onClick={() => handleGroupToggle(id)}
                                    >
                                        <Icon />
                                        <span>{label}</span>

                                        <span className={styles.nav__chevron}>
                                            <ChevroneDownIcon />
                                        </span>
                                    </button>

                                    <div
                                        className={styles.nav__submenu}
                                        id={`${id}-submenu`}
                                    >
                                        <div className={styles.nav__submenu_inner}>
                                            {children.map(child => {
                                                const { id, href, label, Icon } = child
                                                
                                                return (
                                                    <a
                                                        className={cn(styles.nav__item, styles.nav__item_submenu)}
                                                        href={href}
                                                        key={id}
                                                    >
                                                        <Icon />
                                                        <span>{label}</span>
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        
                        return null
                    })}
                </ul>
            </nav>

            <footer className={styles.sidebar__footer}>
                <Button variant='primary' as='a' href='/'>
                    <ChatCircleText />
                    <span>Поддержка</span>
                </Button>

                <Button variant='outline'>
                    <LogoutIcon />
                    <span>Выход</span>
                </Button>
            </footer>
        </aside>
    )
}