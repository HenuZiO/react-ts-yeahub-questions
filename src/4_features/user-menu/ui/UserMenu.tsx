import { USER_MENU_ITEMS } from '../config/userMenuConfig'

import styles from './UserMenu.module.css'

export const UserMenu = () => {
    return (
        <ul className={styles.menu} role='menu'>
           {USER_MENU_ITEMS.map(({ id, label, href, Icon }) => (
               <li key={id} role="none">
                    <a
                        href={href}
                        className={styles.menu__item}
                        role="menuitem"
                    >
                        <Icon size={20} />
                        <span>{label}</span>
                    </a>
                </li>
           ))}
        </ul>
    )
}