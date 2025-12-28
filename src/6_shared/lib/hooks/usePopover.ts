import React, { useLayoutEffect, useState, useRef } from 'react'

type UsePopoverParams = {
    anchorRef: React.RefObject<HTMLElement | null>
    isOpen: boolean
    offset?: number
    viewportPadding?: number
}

export const usePopover = (props: UsePopoverParams) => {
    const { anchorRef, isOpen, offset = 8, viewportPadding = 12 } = props
    
    const popoverRef = useRef<HTMLDivElement>(null)
    
    const [position, setPosition] = useState<React.CSSProperties>({
        top: 0,
        left: 0
    })
    
    useLayoutEffect(() => {
        if (!isOpen) return
        if (!anchorRef.current || !popoverRef.current) return
        
        const anchorRect = anchorRef.current.getBoundingClientRect()
        const popoverRect = popoverRef.current.getBoundingClientRect()
        
        let top = anchorRect.bottom + offset
        let left = anchorRect.right - popoverRect.width
        
        left = Math.min(left, window.innerWidth - popoverRect.width - viewportPadding)
        left = Math.max(left, viewportPadding)
        
        if (top + popoverRect.height > window.innerHeight - viewportPadding) {
            top = anchorRect.top - popoverRect.height - offset
        }
        
        setPosition({ top, left })
    }, [anchorRef, isOpen, offset, viewportPadding])
    
    return { popoverRef, position }
}