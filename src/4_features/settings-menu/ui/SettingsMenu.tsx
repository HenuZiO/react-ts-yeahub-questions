import { SETTINGS_MENU_ITEMS } from '../config/settingsMenuConfig'

import styles from './SettingsMenu.module.css'

export const SettingsMenu = () => {
    return (
        <ul className={styles.menu} role='menu'>
           {SETTINGS_MENU_ITEMS.map(({ id, label, href, Icon }) => (
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
    )
}