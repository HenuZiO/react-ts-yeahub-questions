import type { SVGProps } from 'react'

export type IconProps = {
    size?: number
    color?: string
    variant?: 'mono' | 'colored'
    className?: string
} & Omit<SVGProps<SVGSVGElement>, 'color'>

