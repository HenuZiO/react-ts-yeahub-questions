import { routes } from '@/6_shared/config/routes'

import type { QuestionMenuItemProps } from '../model/questionMenuTypes'

import { ClockCounterClockwise, OpenSidebarIcon, StudentIcon } from '@/6_shared/ui/icon'

export const getQuestionMenuItems = (questionId: number): QuestionMenuItemProps[] => [
    {
        id: 'read-more',
        label: 'Подробнее',
        href: routes.questionDetails(questionId),
        Icon: OpenSidebarIcon,
    },
    {
        id: 'repeat',
        label: 'Повторить',
        href: routes.home,
        Icon: ClockCounterClockwise,
    },
    {
        id: 'learn',
        label: 'Изучать',
        href: routes.home,
        Icon: StudentIcon,
    },
]