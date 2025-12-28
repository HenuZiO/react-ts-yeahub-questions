import { BookmarkSimple, LogoutIcon, SettingsIcon, UserRoundedIcon } from '@/6_shared/ui/icon'

import type { UserMenuItem } from '../model/userMenuTypes'

export const USER_MENU_ITEMS: UserMenuItem[] = [
    {
        id: 'profile',
        label: 'Мой профиль',
        href: '/',
        Icon: UserRoundedIcon
    },
    {
        id: 'saved',
        label: 'Сохранённые',
        href: '/',
        Icon: BookmarkSimple
    },
    {
        id: 'settings',
        label: 'Настройки',
        href: '/',
        Icon: SettingsIcon
    },
    {
        id: 'logout',
        label: 'Выйти',
        href: '/',
        Icon: LogoutIcon
    }
]