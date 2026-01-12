import { routes } from '@/6_shared/config'
import type { BreadcrumbItem } from '@/6_shared/ui/breadcrumbs'

export const QUESTIONS_PAGE_BREADCRUMBS: BreadcrumbItem[] = [
    { label: 'Обучение', to: routes.home },
    { label: 'Список вопросов' },
]