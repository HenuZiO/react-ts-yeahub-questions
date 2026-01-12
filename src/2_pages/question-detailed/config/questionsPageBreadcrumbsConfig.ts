import { routes } from '@/6_shared/config'
import type { BreadcrumbItem } from '@/6_shared/ui/breadcrumbs'

export const QUESTION_PAGE_BASE_BREADCRUMBS: BreadcrumbItem[] = [
    { label: 'Обучение', to: routes.home },
    { label: 'Список вопросов' },
]