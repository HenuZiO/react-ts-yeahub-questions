import type { PropsWithChildren, SVGProps } from 'react'

export type IconProps = {
    size?: number
    color?: string
    variant?: 'mono' | 'colored'
    className?: string
} & Omit<SVGProps<SVGSVGElement>, 'color'>

export type BaseIconProps = PropsWithChildren<IconProps & {
    viewBox: string
}>