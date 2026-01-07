import React from 'react'
import { usePopover } from '@/6_shared/lib/hooks/usePopover'
import { useClickOutside } from '@/6_shared/lib/hooks'

import styles from './Popover.module.css'

type PopoverProps = {
    anchorRef: React.RefObject<HTMLElement | null>
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    minWidth?: number
}

export const Popover = (props: PopoverProps) => {
    const { anchorRef, isOpen, onClose, children, minWidth } = props
    
    const { popoverRef, position } = usePopover({ anchorRef, isOpen })
    
    useClickOutside({
        refs: [anchorRef, popoverRef],
        enabled: isOpen,
        onOutside: onClose
    })
    
    if (!isOpen) return null
    
    return (
        <div
            className={styles.popover}
            ref={popoverRef}
            style={{ ...position, ...(minWidth && { minWidth }) }}
        >
            {children}
        </div>
    )
}