import { Link } from 'react-router'

import { getQuestionMenuItems } from '../config/questionMenuConfig'

import styles from './QuestonMenu.module.css'

type QuestionMenuProps = {
    questionId: number
    onSelect?: () => void
}

export const QuestionMenu = ({ questionId, onSelect }: QuestionMenuProps) => {
    const questions = getQuestionMenuItems(questionId)
    
    return (
        <ul className={styles.menu} role='menu'>
            {questions.map(({ id, label, href, Icon }) => (
                <li key={id} role='none'>
                    <Link
                        className={styles.menu__item}
                        to={href}
                        role='menuitem'
                        onClick={onSelect}
                    >
                        <Icon size={20} />
                        <span>{label}</span>
                   </Link>
               </li>
            ))}
        </ul>
    )
}