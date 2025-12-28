import { ClockCounterClockwise, OpenSidebarIcon, StudentIcon } from '@/6_shared/ui/icon'

import type { QuestionMenuItem } from '../model/questionMenuTypes'

export const QUESTION_MENU_ITEMS: QuestionMenuItem[] = [
    {
        id: 'read-more',
        label: 'Подробнее',
        href: '/',
        Icon: OpenSidebarIcon
    },
    {
        id: 'repeat',
        label: 'Повторить',
        href: '/',
        Icon: ClockCounterClockwise
    },
    {
        id: 'learn',
        label: 'Изучать',
        href: '/',
        Icon: StudentIcon
    }
]