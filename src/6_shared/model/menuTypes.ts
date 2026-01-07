import React from 'react'

export type MenuItemProps = {
    id: string
    label: string
    href: string
    Icon: React.ComponentType<{ size?: number }>
}