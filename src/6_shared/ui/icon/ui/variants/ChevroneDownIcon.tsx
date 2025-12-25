import { BaseIcon } from '../BaseIcon'
import type { IconProps } from '../../model/iconTypes'

export const ChevroneDownIcon = (props: IconProps) => {
    return (
        <BaseIcon viewBox='0 0 24 24' {...props}>
            <path
                d='M6 9L12 15L18 9'
                stroke='currentColor'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </BaseIcon>
    )
}