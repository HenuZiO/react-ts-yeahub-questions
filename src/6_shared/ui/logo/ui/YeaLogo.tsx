import { cn } from '@/6_shared/lib/utils/classnames'

import styles from './YeaLogo.module.css'

type YeaLogoProps = {
    isSidebarHidden: boolean
}

export const YeaLogo = ({ isSidebarHidden }: YeaLogoProps) => {
    const textLogoClassName = cn(styles.logo__text, isSidebarHidden && styles.logo__hidden)
    
    return (
        <a
            className={styles.logo__wrapper}
            href='/'
            aria-label='YeaHub - перейти на главную страницу'
        >
            <img
                className={styles.logo__img}
                src='/logos/yeahub-logo-image.svg'
                alt=''
                width='33'
                height='33'
                aria-hidden='true'
            />
            
            <img
                className={textLogoClassName}
                src='/logos/yeahub-logo-text.svg'
                alt='YeaHub'
                width='99'
                height='33'
            />
      </a>
    )
}