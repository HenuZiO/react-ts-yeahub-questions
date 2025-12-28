import React from 'react'

export type UserMenuItem = {
    id: string
    label: string
    href: string
    Icon: React.ComponentType<{ size?: number }>
}