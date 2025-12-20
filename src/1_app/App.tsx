import { SendSquareIcon } from '../6_shared/ui/icon/variants/SendSquareIcon'
import { HomeIcon } from '../6_shared/ui/icon/variants/HomeIcon'
import { UserRoundedIcon } from '../6_shared/ui/icon/variants/UserRoundedIcon'
import { BookIcon } from '../6_shared/ui/icon/variants/BookIcon'
import { StudentIcon } from '../6_shared/ui/icon/variants/StudentIcon'
import { BroadcastIcon } from '../6_shared/ui/icon/variants/BroadcastIcon'
import { ChatCircleText } from '../6_shared/ui/icon/variants/ChatCircleText'
import { LogoutIcon } from '../6_shared/ui/icon/variants/LogoutIcon'
import { ChevroneDownIcon } from '../6_shared/ui/icon/variants/ChevroneDownIcon'
import { ChevroneUpIcon } from '../6_shared/ui/icon/variants/ChevroneUpIcon'
import { YeaLogo } from '../6_shared/ui/logo/YeaLogo'

import styles from './styles.module.css'
import { Button } from '../6_shared/ui/button/Button'
import { SettingsIcon } from '../6_shared/ui/icon/variants/SettingsIcon'
import { cn } from '../6_shared/lib/utils/classNames'
import { Container } from '../6_shared/ui/container/Container'
import { ArrowLeftIcon } from '../6_shared/ui/icon/variants/ArrowLeftIcon'
import { ArrowRightIcon } from '../6_shared/ui/icon/variants/ArrowRightIcon'
import { NotebookIcon } from '../6_shared/ui/icon/variants/NotebookIcon'
import { MagniferIcon } from '../6_shared/ui/icon/variants/MagniferIcon'
import { WireframingIcon } from '../6_shared/ui/icon/variants/WireframingIcon'

function App() {
    
    return (
        <div className={styles.page}>
            <aside className={styles.sidebar}>
                <header className={styles.sidebar__header}>
                    <YeaLogo />

                    <button
                        className={styles.header__button}
                        type='button'
                        aria-label='Свернуть меню'
                    >
                        <SendSquareIcon size={20} />
                    </button>
                </header>

                <nav className={styles.sidebar__nav} aria-label='Основная навигация'>
                    <ul className={styles.nav__list}>
                        <li>
                            <a className={styles.item__link} href='/'>
                                <HomeIcon />
                                <span>Главная</span>
                            </a>
                        </li>

                        <li>
                            <a className={styles.item__link} href='/'>
                                <UserRoundedIcon />
                                <span>Мой профиль</span>
                            </a>
                        </li>

                        <li className={styles.accordion__expanded}>
                            <button
                                className={styles.item__button}
                                type='button'
                                aria-expanded='true'
                                aria-controls='training-submenu'
                            >
                                <BookIcon />
                                <span>Обучение</span>
                                <ChevroneUpIcon className={styles.icon__accordion} />
                            </button>

                            <ul className={styles.submenu} id='training-submenu'>
                                <li>
                                    <a className={styles.item__link} href='/'>
                                        <StudentIcon />
                                        <span>Собеседование</span>
                                    </a>
                                </li>

                                <li>
                                    <a className={styles.item__link} href='/'>
                                        <BroadcastIcon />
                                        <span>Roadmap</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <button
                                className={styles.item__button}
                                type='button'
                                aria-expanded='false'
                                aria-controls='blog-submenu'
                            >
                                <NotebookIcon />
                                <span>Блог</span>
                                <ChevroneDownIcon className={styles.icon__accordion} />
                            </button>
                        </li>
                    </ul>
                </nav>

                <footer className={styles.sidebar__footer}>
                    <Button variant='primary' as='a' href='/' aria-label='Поддержка в Telegram'>
                        <ChatCircleText />
                        <span>Поддержка</span>
                    </Button>

                    <Button variant='outline' aria-label='Выйти из аккаунта'>
                        <LogoutIcon />
                        <span>Выход</span>
                    </Button>
                </footer>
            </aside>

            <div className={styles.page__content}>
                <header className={styles.header}>
                    <h1 className='visually-hidden'>YeaHub - тренажер для подготовки к IT-собеседованиям</h1>
                    <div className={styles.header__menu}>
                        <button className={styles.menu__settings} type='button'>
                            <SettingsIcon size={20} />
                        </button>
                        <button>
                            <img
                                className={styles.menu__avatar}
                                src='/images/profile_photo.png'
                                alt='Profile Avatar'
                                width='40'
                                height='40'
                                loading='lazy'
                            />
                        </button>
                    </div>
                </header>

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

                            <article className={styles.question}>
                                <header className={styles.question__header}>
                                    <span
                                        className={styles.question__icon}
                                        aria-hidden='true'
                                    ></span>
                                    <h3 className={styles.question__title}>Что такое Virtual DOM, и как он работает?</h3>
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
                                    <footer className={styles.question__meta}>
                                        <dl className={styles.question__info}>
                                            <div className={styles.info__item}>
                                                <dt>Рейтинг:</dt>
                                                <dd className={styles.info__value}>4</dd>
                                            </div>
                                            <div className={styles.info__item}>
                                                <dt>Сложность:</dt>
                                                <dd className={styles.info__value}>10</dd>
                                            </div>
                                        </dl>

                                        <button
                                            className={styles.question__options}
                                            type='button'
                                            aria-label='Открыть опции'
                                        >
                                            <span
                                                className={styles.options__dot}
                                                aria-hidden='true'
                                            ></span>
                                            <span
                                                className={styles.options__dot}
                                                aria-hidden='true'
                                            ></span>
                                            <span
                                                className={styles.options__dot}
                                                aria-hidden='true'
                                            ></span>
                                        </button>
                                    </footer>

                                    <div className={styles.question__text_content}>
                                        <p className={styles.question__text}>
                                            Virtual DOM — это абстракция реального DOM, которая используется React для улучшения производительности.
                                            Вместо того чтобы обновлять реальный DOM напрямую при каждом изменении состояния, React сначала обновляет виртуальный DOM, а затем сравнивает его с предыдущей версией, чтобы минимизировать количество операций с реальным DOM.
                                            Этот процесс называется дифференциацией (reconciliation).
                                        </p>

                                        <pre className={styles.code}>
                                            <code className={styles.code__content}>
                                                {`function diff(oldTree, newTree) {
  if (oldTree !== newTree) {
    updateDOM(newTree)
  }
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </article>

                            <article className={styles.question}>
                                <header className={styles.question__header}>
                                    <span
                                        className={styles.question__icon}
                                        aria-hidden='true'
                                    ></span>
                                    <h3 className={styles.question__title}>Что такое Virtual DOM, и как он работает?</h3>
                                    <button
                                        className={styles.question__toggle}
                                        type='button'
                                        aria-label='Развернуть ответ'
                                        aria-expanded='true'
                                        aria-controls='question-content-1'
                                    >
                                        <ChevroneDownIcon />
                                    </button>
                                </header>
                            </article>

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
