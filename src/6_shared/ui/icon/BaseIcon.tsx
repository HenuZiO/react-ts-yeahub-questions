import type { PropsWithChildren, SVGProps } from 'react'

export type IconProps = {
    size?: number
    color?: string
    variant?: 'mono' | 'colored'
    className?: string
} & Omit<SVGProps<SVGSVGElement>, 'color'>

type BaseIconProps = PropsWithChildren<IconProps & {
    viewBox: string
}>

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