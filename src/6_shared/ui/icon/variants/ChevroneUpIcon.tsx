import { BaseIcon } from '../BaseIcon'
import type { IconProps } from '../BaseIcon'

export const ChevroneUpIcon = (props: IconProps) => {
    return (
        <BaseIcon viewBox='0 0 24 24' {...props}>
            <path
                d='M6 15L12 9L18 15'
                stroke='currentColor'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </BaseIcon>
    )
}