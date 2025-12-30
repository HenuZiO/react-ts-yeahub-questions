import React from 'react'

export type PopoverProps = {
    anchorRef: React.RefObject<HTMLElement | null>
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    minWidth?: number
}