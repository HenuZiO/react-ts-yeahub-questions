import React, { createContext } from 'react'

export type PopoverContextValue = {
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
    triggerRef: React.RefObject<HTMLElement>
}

export const PopoverContext = createContext<PopoverContextValue | null>(null)