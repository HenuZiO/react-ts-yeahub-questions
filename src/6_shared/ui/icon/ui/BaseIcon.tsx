import type { BaseIconProps } from '../model/iconTypes'

export const BaseIcon = (props: BaseIconProps) => {
    const {
        size = 24,
        color = 'currentColor',
        variant = 'mono',
        viewBox,
        className,
        children,
        ...rest
    } = props
    
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox={viewBox}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            data-icon={variant === 'colored' ? 'colored' : undefined}
            style={variant === 'mono' ? { color } : undefined}
            aria-hidden='true'
            {...rest}
        >
            {children}
        </svg>
    )
}