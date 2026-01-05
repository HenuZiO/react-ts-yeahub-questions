import { ProfileBadge } from '@/6_shared/ui/profile-badge'

import { USER_MENU_ITEMS } from '../config/userMenuConfig'

import styles from './UserMenu.module.css'

export const UserMenu = () => {
    return (
        <div className={styles.popup__profile}>
            <div className={styles.profile__header}>
                <img src='/images/profile_photo.png' alt='' width='56' height='56' loading='lazy' />
                <div className={styles.profile__text_inner}>
                    <h2 className={styles.profile__name}>Kendrix</h2>
                    <p className={styles.profile__mail}>pavel.kendrix@gmail.com</p>
                </div>
                
                <ProfileBadge />
            </div>
            
            <ul className={styles.menu} role='menu'>
                {USER_MENU_ITEMS.map(({ id, label, href, Icon }) => (
                    <li key={id} role='none'>
                        <a
                            href={href}
                            className={styles.menu__item}
                            role='menuitem'
                        >
                            <Icon size={20} />
                            <span>{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}