import React from 'react'

export type QuestionMenuItemProps = {
    id: string
    label: string
    href: string
    Icon: React.ComponentType<{ size?: number }>
}

export type QuestionMenuProps = {
    questionId: number
    onSelect?: () => void
}