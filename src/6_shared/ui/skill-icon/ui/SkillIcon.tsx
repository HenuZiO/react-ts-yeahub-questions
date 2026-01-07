import { useState } from 'react'
import { WireframingIcon } from '@/6_shared/ui/icon'

type SkillIconProps = {
    src: string
    title: string
}

export const SkillIcon = ({ src, title }: SkillIconProps) => {
    const [hasError, setHasError] = useState(false)
    
    if (hasError) {
        return <WireframingIcon size={20} aria-hidden='true' />
    }
    
    return (
        <img
            src={src}
            alt={title}
            width={20}
            height={20}
            loading='lazy'
            onError={() => setHasError(true)}
        />
    )
}