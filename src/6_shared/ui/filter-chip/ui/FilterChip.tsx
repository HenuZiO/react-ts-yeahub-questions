import { SkillIcon } from '@/6_shared/ui/skill-icon'

import styles from './FilterChip.module.css'
import { cn } from '@/6_shared/lib/utils/classnames'

type FilterChipProps = {
    label: string | number
    iconSrc?: string | null
    selected?: boolean
    onClick?: () => void
    className?: string
    disabled?: boolean
    ariaLabel?: string
}

export const FilterChip = (props: FilterChipProps) => {
    const { label, iconSrc, selected = false, onClick, className, ariaLabel } = props
    
    const labelText = String(label)
    
    return (
        <button
            className={cn(styles.chip, className)}
            type='button'
            onClick={onClick}
            aria-pressed={selected}
            aria-label={ariaLabel}
        >
            {iconSrc && <SkillIcon src={iconSrc} title={labelText} />}
            <span>{label}</span>
        </button>
    )
}