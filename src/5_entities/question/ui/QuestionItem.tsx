import type { QuestionProps } from '../model/questionTypes'

import { ChevroneUpIcon } from '../../../6_shared/ui/icon/variants/ChevroneUpIcon'

import styles from './QuestionItem.module.css'

export const QuestionItem = ({ question }: QuestionProps) => {
    return (
        <article className={styles.question}>
            <header className={styles.question__header}>
                <h3 className={styles.question__title}>
                    {question.title}
                </h3>
                <button
                    className={styles.question__toggle}
                    type='button'
                    aria-label='Развернуть ответ'
                    aria-expanded='true'
                    aria-controls='question-content-1'
                >
                    <ChevroneUpIcon />
                </button>
            </header>

            <div className={styles.question__content} id='question-content-1'>
                <div className={styles.question__meta}>
                    <dl className={styles.meta__info}>
                        <div className={styles.meta__item}>
                            <dt>Рейтинг:</dt>
                            <dd className={styles.meta__value}>{question.rate}</dd>
                        </div>
                        <div className={styles.meta__item}>
                            <dt>Сложность:</dt>
                            <dd className={styles.meta__value}>{question.complexity}</dd>
                        </div>
                    </dl>

                    <button
                        className={styles.question__options}
                        type='button'
                        aria-label='Открыть опции'
                        aria-haspopup='true'
                    >
                        <span className={styles.options__dot} aria-hidden='true'></span>
                        <span className={styles.options__dot} aria-hidden='true'></span>
                        <span className={styles.options__dot} aria-hidden='true'></span>
                    </button>
                </div>

                <div className={styles.question__text} dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
            </div>
        </article>
    )
}