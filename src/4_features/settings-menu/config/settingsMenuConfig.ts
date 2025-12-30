import { BookmarkSimple, LogoutIcon, SettingsIcon, UserRoundedIcon } from '@/6_shared/ui/icon'

import type { SettingsMenuItem } from '../model/settingsMenuTypes'

export const SETTINGS_MENU_ITEMS: SettingsMenuItem[] = [
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