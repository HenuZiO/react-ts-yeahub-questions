import React from 'react'

export type QuestionMenuItem = {
    id: string
    label: string
    href: string
    Icon: React.ComponentType<{ size?: number }>
}