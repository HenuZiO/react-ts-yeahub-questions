import { Link } from 'react-router'

import type { SidebarLinkItem } from '../../model/menuTypes'

import styles from '../Sidebar.module.css'

type SidebarNavLinkProps = {
    item: SidebarLinkItem
}

export const SidebarNavLink = ({ item }: SidebarNavLinkProps) => {
    const { href, label, Icon } = item
    
    return (
        <li>
            <Link className={styles.nav__item} to={href}>
                <Icon className={styles.nav__icon} />
                <span className={styles.nav__label}>
                    {label}
                </span>
            </Link>
        </li>
    )
}