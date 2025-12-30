import React from 'react'

export type SettingsMenuItem = {
    id: string
    label: string
    href: string
    Icon: React.ComponentType<{ size?: number }>
}