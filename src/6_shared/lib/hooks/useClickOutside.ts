import React, { useEffect } from 'react'

type UseClickOutsideParams = {
    refs: Array<React.RefObject<HTMLElement | null>>
    onOutside: () => void
    enabled?: boolean
}

export const useClickOutside = (props: UseClickOutsideParams) => {
    const { refs, onOutside, enabled = true } = props
    
    useEffect(() => {
        if (!enabled) return
        
        const handleMouseDown = (event: MouseEvent) => {
            const target = event.target as Node
            
            const isInside = refs.some(ref => {
                const element = ref.current
                return element ? element.contains(target) : false
            })
            
            if (!isInside) onOutside()
        }
        
        document.addEventListener('mousedown', handleMouseDown)
        
        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
        }
    }, [refs, onOutside, enabled])
}