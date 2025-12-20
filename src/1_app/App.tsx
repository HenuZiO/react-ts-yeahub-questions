import { cn } from '../6_shared/lib/utils/classNames'
import { Container } from '../6_shared/ui/container/Container'
import { ArrowLeftIcon } from '../6_shared/ui/icon/variants/ArrowLeftIcon'
import { ArrowRightIcon } from '../6_shared/ui/icon/variants/ArrowRightIcon'
import { MagniferIcon } from '../6_shared/ui/icon/variants/MagniferIcon'
import { WireframingIcon } from '../6_shared/ui/icon/variants/WireframingIcon'
import { Header } from '../3_widgets/header/ui/Header'
import { Sidebar } from '../3_widgets/sidebar/ui/Sidebar'
import { QuestionItem } from '../5_entities/question-item/ui/QuestionItem'

import styles from './styles.module.css'

function App() {
    
    return (
        <div className={styles.page}>
           <Sidebar />

            <div className={styles.page__content}>
                <Header />

                <main>
                    <Container>
                        <nav className={styles.breadcrumbs}>
                            <ol className={styles.breadcrumbs__list}>
                                <li className={styles.breadcrumbs__list_item}>
                                    <a className={styles.breadcrumbs__item_link} href='/'>
                                        Обучение
                                    </a>
                                </li>

                                <li className={styles.breadcrumbs__list_item}>
                                    <a className={styles.breadcrumbs__item_link} href='/'>
                                        Список вопросов
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </Container>

                    <Container className={styles.sections}>
                        <section className={styles.section}>
                            <h2 className={styles.section__title}>
                                Вопросы React, JavaScript
                            </h2>

                            <QuestionItem />
                            <QuestionItem />
                            <QuestionItem />

                            

                            <nav className={styles.pagination} aria-label='Пагинация'>
                                <button
                                    className={styles.pagination__arrow}
                                    type='button'
                                    aria-label='Предыдущая страница'
                                >
                                    <ArrowLeftIcon size={20} />
                                </button>

                                <ul className={styles.pagination__list}>
                                    <li>
                                        <button className={styles.pagination__button}>1</button>
                                    </li>

                                    <li>
                                        <button
                                            className={cn(styles.pagination__button, styles.pagination__button_active)}
                                            disabled={true}
                                        >
                                            2
                                        </button>
                                    </li>

                                    <li>
                                        <button className={styles.pagination__button}>3</button>
                                    </li>

                                    <li>
                                        <button className={styles.pagination__button}>4</button>
                                    </li>

                                    <li className={styles.pagination__ellipsis}>
                                        <span>…</span>
                                    </li>

                                    <li>
                                        <button className={styles.pagination__button}>17</button>
                                    </li>

                                    <li>
                                        <button className={styles.pagination__button}>18</button>
                                    </li>
                                </ul>

                                <button
                                    className={styles.pagination__arrow}
                                    type='button'
                                    aria-label='Следующая страница'
                                >
                                    <ArrowRightIcon size={20} />
                                </button>
                            </nav>
                        </section>

                        <section className={cn(styles.section, styles.section__filters)}>
                            <form className={styles.filters} aria-label='Фильтры вопросов'>
                                <div className={styles.filters__search}>
                                    <label className='visually-hidden' htmlFor='search'></label>
                                    <MagniferIcon className={styles.search__icon} size={20} />

                                    <input
                                        className={styles.search__input}
                                        type='text'
                                        id='search'
                                        placeholder='Введите запрос...'
                                    />
                                </div>

                                <fieldset className={styles.filters__group}>
                                    <legend className={styles.group__title}>
                                        Категории вопросов
                                    </legend>

                                    <ul className={styles.group__list}>
                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                <img
                                                    className={styles.filter__icon}
                                                    src='/icons/figma.svg'
                                                    width={20}
                                                    height={20}
                                                    alt=''
                                                    aria-hidden='true'
                                                />
                                                <span className={styles.filter__label}>Figma</span>
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                <WireframingIcon size={20} />
                                                <span className={styles.filter__label}>Wireframing</span>
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                <img
                                                    className={styles.filter__icon}
                                                    src='/icons/figma.svg'
                                                    width={20}
                                                    height={20}
                                                    alt=''
                                                    aria-hidden='true'
                                                />
                                                <span className={styles.filter__label}>CSS</span>
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                <WireframingIcon size={20} />
                                                <span className={styles.filter__label}>Wireframing</span>
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                <WireframingIcon size={20} />
                                                <span className={styles.filter__label}>React.js</span>
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                <WireframingIcon size={20} />
                                                <span className={styles.filter__label}>HTML</span>
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                <img
                                                    className={styles.filter__icon}
                                                    src='/icons/figma.svg'
                                                    width={20}
                                                    height={20}
                                                    alt=''
                                                    aria-hidden='true'
                                                />
                                                <span className={styles.filter__label}>Figma</span>
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                <WireframingIcon size={20} />
                                                <span className={styles.filter__label}>Wireframing</span>
                                            </button>
                                        </li>
                                    </ul>

                                    <button type='button' className={styles.filters__more}>
                                        Посмотреть все
                                    </button>
                                </fieldset>

                                <fieldset className={styles.filters__group}>
                                    <legend className={styles.group__title}>
                                        Уровень сложности
                                    </legend>

                                    <ul className={styles.group__list}>
                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                1–3
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                4–6
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                7–8
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
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
                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >1</button>
                                        </li>
                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >2</button>
                                        </li>
                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >3</button>
                                        </li>
                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >4</button>
                                        </li>
                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >5</button>
                                        </li>
                                    </ul>
                                </fieldset>

                                <fieldset className={styles.filters__group}>
                                    <legend className={styles.group__title}>
                                        Статус
                                    </legend>

                                    <ul className={styles.group__list}>
                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                Изученные
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                Не изученные
                                            </button>
                                        </li>

                                        <li className={styles.filters__item}>
                                            <button
                                                type='button'
                                                className={styles.filter__button}
                                            >
                                                Все
                                            </button>
                                        </li>
                                    </ul>
                                </fieldset>
                            </form>
                        </section>
                    </Container>
                </main>
            </div>
        </div>
    )
}

export default App
