import { useRef, useState } from 'react'
import { SettingsMenu } from '@/4_features/settings-menu'
import { UserMenu } from '@/4_features/user-menu'
import { Popover } from '@/6_shared/ui/popover'

import { SettingsIcon } from '@/6_shared/ui/icon'

import styles from './Header.module.css'

export const Header = () => {
    const settingsRef = useRef<HTMLButtonElement>(null)
    const profileRef = useRef<HTMLButtonElement>(null)
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    
    return (
        <>
            <header className={styles.header}>
                <h1 className='visually-hidden'>
                    YeaHub - тренажер для подготовки к IT-собеседованиям
                </h1>

                <div className={styles.header__menu}>
                    <button
                        className={styles.menu__settings}
                        type='button'
                        ref={settingsRef}
                        onClick={() => setIsSettingsOpen(prev => !prev)}
                        aria-label={isSettingsOpen ? 'Закрыть настройки' : 'Открыть настройки'}
                        aria-haspopup='true'
                        aria-expanded={isSettingsOpen}
                    >
                        <SettingsIcon size={20} />
                    </button>
                    
                    <button
                        className={styles.menu__avatar}
                        type='button'
                        ref={profileRef}
                        onClick={() => setIsProfileOpen(prev => !prev)}
                        aria-label={isProfileOpen ? 'Закрыть меню профиля' : 'Открыть меню профиля'}
                        aria-haspopup='true'
                        aria-expanded={isProfileOpen}
                    >
                        <img
                            className={styles.menu__avatar_img}
                            src='/images/profile_photo.png'
                            alt=''
                            width='40'
                            height='40'
                        />
                    </button>
                </div>
            </header>
            
            <Popover
                anchorRef={settingsRef}
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            >
                <SettingsMenu />
            </Popover>
            
            <Popover
                anchorRef={profileRef}
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
                minWidth={280}
            >
                <UserMenu />
            </Popover>
        </>
    )
}