import { usePopover } from '@/6_shared/lib/hooks/usePopover'
import { useClickOutside } from '@/6_shared/lib/hooks/useClickOutside'

import type { PopoverProps } from '../model/PopoverTypes'

import styles from './Popover.module.css'

export const Popover = (props: PopoverProps) => {
    const { anchorRef, isOpen, onClose, children, minWidth } = props
    
    const { popoverRef, position } = usePopover({ anchorRef, isOpen })
    
    useClickOutside({
        refs: [anchorRef, popoverRef],
        enabled: isOpen,
        onOutside: onClose,
    })
    
    if (!isOpen) return null
    
    return (
        <div
            className={styles.popover}
            ref={popoverRef}
            style={{...position, ...(minWidth && { minWidth })}}
        >
            {children}
        </div>
    )
}