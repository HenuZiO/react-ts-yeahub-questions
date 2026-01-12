import type { Question } from '@/5_entities/question'
import type { BreadcrumbItem } from '@/6_shared/ui/breadcrumbs'

import { QUESTION_PAGE_BASE_BREADCRUMBS } from '../config/questionsPageBreadcrumbsConfig'

export const buildQuestionPageCrumbs = (question: Question): BreadcrumbItem[] => {
    const firstSkill = question.questionSkills?.[0]
    
    const skillCrumb = firstSkill
        ? ({
            label: firstSkill.title,
            to: `/questions?skills=${firstSkill.id}`
        } satisfies BreadcrumbItem)
        : null
    
    return [
        ...QUESTION_PAGE_BASE_BREADCRUMBS,
        ...(skillCrumb ? [skillCrumb] : []),
        { label: question.title }
    ]
}