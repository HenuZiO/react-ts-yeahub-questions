import { MagniferIcon } from '../../../6_shared/ui/icon/variants/MagniferIcon'
import { WireframingIcon } from '../../../6_shared/ui/icon/variants/WireframingIcon'
import { FigmaIcon } from '../../../6_shared/ui/icon/variants/FigmaIcon'

import styles from './QuestionsFilters.module.css'

export const QuestionFilters = () => {
    return (
        <form className={styles.filters} aria-label='Фильтры вопросов'>
            <div className={styles.filters__search}>
                <label className='visually-hidden' htmlFor='questions-search'>
                    Поиск вопросов
                </label>

                <MagniferIcon className={styles.search__icon} size={20} />

                <input
                    className={styles.search__input}
                    type='text'
                    id='questions-search'
                    placeholder='Введите запрос...'
                />
            </div>

            <fieldset className={styles.filters__group}>
                <legend className={styles.group__title}>
                    Категории вопросов
                </legend>

                <ul className={styles.group__list} id='categories-list'>
                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            <FigmaIcon size={20} variant='colored' />
                            <span>Figma</span>
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            <WireframingIcon size={20} />
                            <span>Wireframing</span>
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='true'>
                            <FigmaIcon size={20} variant='colored' />
                            <span>CSS</span>
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            <WireframingIcon size={20} />
                            <span>Wireframing</span>
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='true'>
                            <WireframingIcon size={20} />
                            <span>React.js</span>
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            <WireframingIcon size={20} />
                            <span>HTML</span>
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            <FigmaIcon size={20} variant='colored' />
                            <span>Figma</span>
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            <WireframingIcon size={20} />
                            <span>Wireframing</span>
                        </button>
                    </li>
                </ul>

                <button
                    type='button'
                    className={styles.group__more}
                    aria-expanded='false'
                    aria-controls='categories-list'
                >
                    Посмотреть все
                </button>
            </fieldset>

            <fieldset className={styles.filters__group}>
                <legend className={styles.group__title}>
                    Уровень сложности
                </legend>

                <ul className={styles.group__list}>
                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            1–3
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            4–6
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            7–8
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            9–10
                        </button>
                    </li>
                </ul>
            </fieldset>

            <fieldset className={styles.filters__group}>
                <legend className={styles.group__title}>
                    Рейтинг
                </legend>

                <ul className={styles.group__list}>
                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            1
                        </button>
                    </li>
                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            2
                        </button>
                    </li>
                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            3
                        </button>
                    </li>
                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            4
                        </button>
                    </li>
                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            5
                        </button>
                    </li>
                </ul>
            </fieldset>

            <fieldset className={styles.filters__group}>
                <legend className={styles.group__title}>
                    Статус
                </legend>

                <ul className={styles.group__list}>
                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            Изученные
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            Не изученные
                        </button>
                    </li>

                    <li>
                        <button className={styles.group__button} type='button' aria-pressed='false'>
                            Все
                        </button>
                    </li>
                </ul>
            </fieldset>
        </form>
    )
}