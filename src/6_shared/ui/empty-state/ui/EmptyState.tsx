import styles from './EmptyState.module.css'

export const EmptyState = () => {
    
    return (
        <div className={styles.empty}>
            <img
                className={styles.image}
                src='/icons/empty-state.avif'
                alt=''
                width=''
                height=''
                loading='lazy'
            />
            
            <div className={styles.text_inner}>
                <h3 className={styles.subtitle}>К сожалению, по запросу ничего не найдено.</h3>
                <p className={styles.text}>Попробуйте изменить запрос или воспользуйтесь нашими категориями.</p>
            </div>
        </div>
    )
}