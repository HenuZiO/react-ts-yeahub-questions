import { Button } from '@/6_shared/ui/button'

import { SealCheck } from '@/6_shared/ui/icon'

import styles from './ProfileBadge.module.css'

export const ProfileBadge = () => {
    return (
        <Button className={styles.button__badge} variant='badge'>
            <SealCheck size={20} />
            <span>Участник сообщества</span>
        </Button>
    )
}