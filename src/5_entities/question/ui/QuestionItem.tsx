import { ChevroneUpIcon } from '../../../6_shared/ui/icon/variants/ChevroneUpIcon'

import styles from './QuestionItem.module.css'

export const QuestionItem = () => {
    return (
        <article className={styles.question}>
            <header className={styles.question__header}>
                <h3 className={styles.question__title}>
                    Что такое Virtual DOM, и как он работает?
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
                            <dd className={styles.meta__value}>4</dd>
                        </div>
                        <div className={styles.meta__item}>
                            <dt>Сложность:</dt>
                            <dd className={styles.meta__value}>10</dd>
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

                <div className={styles.question__text}>
                    <p className={styles.question__paragraph}>
                        Virtual DOM — это абстракция реального DOM, которая используется React для улучшения производительности.
                        Вместо того чтобы обновлять реальный DOM напрямую при каждом изменении состояния, React сначала обновляет виртуальный DOM, а затем сравнивает его с предыдущей версией, чтобы минимизировать количество операций с реальным DOM.
                        Этот процесс называется дифференциацией (reconciliation).
                    </p>

                    <pre className={styles.question__code}>
                        <code className={styles.code__content}>
                            [Тут был пример кода, но пришлось его пока убрать, чтобы код выглядел чище]
                        </code>
                    </pre>
                </div>
            </div>
        </article>
    )
}