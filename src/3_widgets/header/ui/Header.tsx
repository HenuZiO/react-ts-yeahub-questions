import { useRef, useState } from 'react'
import { UserMenu } from '@/4_features/user-menu'
import { Popover } from '@/6_shared/ui/popover'

import { SettingsIcon } from '@/6_shared/ui/icon'

import styles from './Header.module.css'

export const Header = () => {
    const settingsRef = useRef<HTMLButtonElement>(null)
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    
    return (
        <header className={styles.header}>
            <h1 className='visually-hidden'>
                YeaHub - тренажер для подготовки к IT-собеседованиям
            </h1>

            <div className={styles.header__menu}>
                <button
                    className={styles.menu__settings}
                    type='button'
                    ref={settingsRef}
                    onClick={() => setIsPopupOpen(prev => !prev)}
                    aria-label={isPopupOpen ? 'Закрыть настройки' : 'Открыть настройки'}
                    aria-haspopup='true'
                    aria-expanded={isPopupOpen}
                >
                    <SettingsIcon size={20} />
                </button>
                
                <button
                    className={styles.menu__avatar}
                    type='button'
                    aria-label='Открыть меню профиля'
                    aria-haspopup='true'
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
            
            <Popover
                anchorRef={settingsRef}
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            >
                <UserMenu />
            </Popover>
        </header>
    )
}