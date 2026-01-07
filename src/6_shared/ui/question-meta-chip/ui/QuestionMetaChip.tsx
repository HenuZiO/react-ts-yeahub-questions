import styles from './QuestionMetaChip.module.css'

type QuestionMetaChipProps = {
    label: string
    value: number
}

export const QuestionMetaChip = ({ label, value}: QuestionMetaChipProps) => {
    return (
        <div className={styles.chip__item}>
            <dt>{label}:</dt>
            <dd className={styles.chip__value}>{value}</dd>
        </div>
    )
}