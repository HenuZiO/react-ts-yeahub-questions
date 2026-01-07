import { routes } from '@/6_shared/config/routes'

import { BookmarkSimple, LogoutIcon, SettingsIcon, UserRoundedIcon } from '@/6_shared/ui/icon'

import type { SettingsMenuItemProps } from '../model/settingsMenuTypes'

export const SETTINGS_MENU_ITEMS: SettingsMenuItemProps[] = [
    {
        id: 'profile',
        label: 'Мой профиль',
        href: routes.home,
        Icon: UserRoundedIcon
    },
    {
        id: 'saved',
        label: 'Сохранённые',
        href: routes.home,
        Icon: BookmarkSimple
    },
    {
        id: 'settings',
        label: 'Настройки',
        href: routes.home,
        Icon: SettingsIcon
    },
    {
        id: 'logout',
        label: 'Выйти',
        href: routes.home,
        Icon: LogoutIcon
    }
]