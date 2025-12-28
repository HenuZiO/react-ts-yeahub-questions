import { QUESTION_MENU_ITEMS } from '../config/questionMenuConfig'

import styles from './QuestonMenu.module.css'

export const QuestionMenu = () => {
    return (
        <ul className={styles.menu} role='menu'>
           {QUESTION_MENU_ITEMS.map(({ id, label, href, Icon }) => (
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