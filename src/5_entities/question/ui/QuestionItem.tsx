import React, { useId, useRef, useState } from 'react'

import type { QuestionProps } from '../model/questionTypes'

import { ChevroneDownIcon, ChevroneUpIcon } from '@/6_shared/ui/icon'

import styles from './QuestionItem.module.css'

type Props = QuestionProps & {
    onMenuOpen: (questionId: number, anchorEl: HTMLButtonElement) => void
    isMenuOpen: boolean
}

export const QuestionItem = ({ question, onMenuOpen, isMenuOpen }: Props) => {
    const [isItemOpen, setIsItemOpen] = useState(false)
    
    const optionsRef = useRef<HTMLButtonElement>(null)
    const contentId = useId()
    
    const handleExpandToggle = () => {
        setIsItemOpen(prev => !prev)
    }
    
    const handleOptionsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        
        const anchorEl = optionsRef.current
        if (!anchorEl) return
        
        onMenuOpen(question.id, anchorEl)
    }
    
    return (
        
        <article className={styles.question} data-open={isItemOpen}>
            <header
                className={styles.question__header}
                onClick={handleExpandToggle}
                role='button'
                aria-expanded={isItemOpen}
                aria-controls={contentId}
            >
                <h3 className={styles.question__title}>
                    {question.title}
                </h3>
                    
                <span
                    className={styles.question__toggle}
                    aria-hidden='true'
                >
                    {isItemOpen ? <ChevroneUpIcon /> : <ChevroneDownIcon />}
                </span>
            </header>
                
            <div className={styles.question__content} id={contentId}>
                <div className={styles.question__inner}>
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
                            ref={optionsRef}
                            onClick={handleOptionsClick}
                            aria-label={isMenuOpen ? 'Закрыть опции' : 'Открыть опции'}
                            aria-haspopup='true'
                            aria-expanded={isMenuOpen}
                        >
                            <span className={styles.options__dot} aria-hidden='true'></span>
                            <span className={styles.options__dot} aria-hidden='true'></span>
                            <span className={styles.options__dot} aria-hidden='true'></span>
                        </button>
                    </div>
                    
                    <div
                        className={styles.question__text}
                        dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
                    />
                </div>
            </div>
        </article>
    )
}