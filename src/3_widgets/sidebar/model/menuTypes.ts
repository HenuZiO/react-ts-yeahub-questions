import React from 'react'

type SidebarBaseItem = {
    id: string
    label: string
    Icon: React.ComponentType
}

export type SidebarLinkItem = SidebarBaseItem & {
    type: 'link'
    href: string
}

export type SidebarGroupItem = SidebarBaseItem & {
    type: 'group'
    children: SidebarLinkItem[]
}

export type SidebarItem = SidebarLinkItem | SidebarGroupItem