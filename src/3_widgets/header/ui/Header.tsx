import { SettingsIcon } from '@/6_shared/ui/icon'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className='visually-hidden'>YeaHub - тренажер для подготовки к IT-собеседованиям</h1>
            
            <div className={styles.header__menu}>
                <button
                    className={styles.menu__settings}
                    type='button'
                    aria-label='Открыть меню настроек'
                    aria-haspopup='true'
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
        </header>
    )
}