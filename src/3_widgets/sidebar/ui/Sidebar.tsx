import { YeaLogo } from '../../../6_shared/ui/logo/YeaLogo'
import { SendSquareIcon } from '../../../6_shared/ui/icon/variants/SendSquareIcon'
import { HomeIcon } from '../../../6_shared/ui/icon/variants/HomeIcon'
import { UserRoundedIcon } from '../../../6_shared/ui/icon/variants/UserRoundedIcon'
import { BookIcon } from '../../../6_shared/ui/icon/variants/BookIcon'
import { ChevroneUpIcon } from '../../../6_shared/ui/icon/variants/ChevroneUpIcon'
import { StudentIcon } from '../../../6_shared/ui/icon/variants/StudentIcon'
import { BroadcastIcon } from '../../../6_shared/ui/icon/variants/BroadcastIcon'
import { ChatCircleText } from '../../../6_shared/ui/icon/variants/ChatCircleText'
import { LogoutIcon } from '../../../6_shared/ui/icon/variants/LogoutIcon'
import { Button } from '../../../6_shared/ui/button/Button'

import styles from './Sidebar.module.css'
import { cn } from '../../../6_shared/lib/utils/classNames'

export const Sidebar = () => {
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
                        <li>
                            <a className={styles.nav__item} href='/'>
                                <HomeIcon />
                                <span>Главная</span>
                            </a>
                        </li>

                        <li>
                            <a className={styles.nav__item} href='/'>
                                <UserRoundedIcon />
                                <span>Мой профиль</span>
                            </a>
                        </li>

                        <li className={styles.nav__item_expanded}>
                            <button
                                className={styles.nav__item}
                                type='button'
                                aria-expanded='true'
                                aria-controls='training-submenu'
                            >
                                <BookIcon />
                                <span>Обучение</span>
                                <ChevroneUpIcon className={styles.nav__icon_chevron} />
                            </button>

                            <ul className={styles.nav__submenu} id='training-submenu'>
                                <li>
                                    <a className={cn(styles.nav__item, styles.nav__item_submenu)} href='/'>
                                        <StudentIcon />
                                        <span>Собеседование</span>
                                    </a>
                                </li>

                                <li>
                                    <a className={cn(styles.nav__item, styles.nav__item_submenu)} href='/'>
                                        <BroadcastIcon />
                                        <span>Roadmap</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <footer className={styles.sidebar__footer}>
                    <Button variant='primary' as='a' href='/' aria-label='Поддержка в Telegram'>
                        <ChatCircleText />
                        <span>Поддержка</span>
                    </Button>

                    <Button variant='outline' aria-label='Выйти из аккаунта'>
                        <LogoutIcon />
                        <span>Выход</span>
                    </Button>
                </footer>
            </aside>
    )
}