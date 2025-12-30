import { Button } from '@/6_shared/ui/button'

import styles from './ProfileBadge.module.css'
import { SealCheck } from '@/6_shared/ui/icon'

export const ProfileBadge = () => {
    return (
        <Button className={styles.button__badge} variant='badge'>
            <SealCheck size={20} />
            <span>Участник сообщества</span>
        </Button>
    )
}