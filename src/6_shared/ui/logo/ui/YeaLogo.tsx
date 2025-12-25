import styles from './YeaLogo.module.css'

export const YeaLogo = () => {
    return (
        <a
            className={styles.logo__wrapper}
            href='/public'
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
              className={styles.logo__text}
              src='/logos/yeahub-logo-text.svg'
              alt='YeaHub'
              width='99'
              height='33'
          />
      </a>
    )
}