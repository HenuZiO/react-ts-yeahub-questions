import type { SidebarItem } from '@/3_widgets/sidebar/model/menuTypes'

import {
    BookIcon, BookmarkSimple,
    BroadcastIcon,
    HomeIcon, ListMagnifyingGlassIcon,
    NotebookIcon, PencilSimple,
    StudentIcon, UserHeart,
    UserRoundedIcon
} from '@/6_shared/ui/icon'

export const SIDEBAR_ITEMS: SidebarItem[] = [
    {
        id: 'home',
        type: 'link',
        label: 'Главная',
        href: '/',
        Icon: HomeIcon
    },
    {
        id: 'profile',
        type: 'link',
        label: 'Мой профиль',
        href: '/',
        Icon: UserRoundedIcon
    },
    {
        id: 'training',
        type: 'group',
        label: 'Обучение',
        Icon: BookIcon,
        children: [
            {
                id: 'interview',
                type: 'link',
                label: 'Собеседование',
                href: '/',
                Icon: StudentIcon
            },
            {
                id: 'roadmap',
                type: 'link',
                label: 'Roadmap',
                href: '/',
                Icon: BroadcastIcon
            }
        ]
    },
    {
        id: 'Blog',
        type: 'group',
        label: 'Блог',
        Icon: NotebookIcon,
        children: [
            {
                id: 'all-articles',
                type: 'link',
                label: 'Все статьи',
                href: '/',
                Icon: ListMagnifyingGlassIcon
            },
            {
                id: 'personal-blog',
                type: 'link',
                label: 'Личный блог',
                href: '/',
                Icon: UserHeart
            },
            {
                id: 'write-article',
                type: 'link',
                label: 'Написать статью',
                href: '/',
                Icon: PencilSimple
            },
            {
                id: 'bookmarks',
                type: 'link',
                label: 'Сохранённые',
                href: '/',
                Icon: BookmarkSimple
            }
        ]
    }
]