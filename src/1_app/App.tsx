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
                                <BookIcon />
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

            <header>
                <h1>YeaHub - тренажер для подготовки к IT-собеседованиям</h1>
                <div>
                    <button type='button'>
                        <img src='' alt='' width='20' height='20' loading='lazy' />
                    </button>
                    <img src='' alt='' width='40' height='40' loading='lazy' />
                </div>
            </header>
            {/*<main>*/}
            {/*    <nav>*/}
            {/*        <ol>*/}
            {/*            <li className={styles.list__item}>*/}
            {/*                <a href='/'>*/}
            {/*                    Обучение*/}
            {/*                </a>*/}
            {/*            </li>*/}
            
            {/*            <li className={styles.list__item}>*/}
            {/*                <a href='/'>*/}
            {/*                    Список вопросов*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*        </ol>*/}
            {/*    </nav>*/}
            
            {/*    <div>*/}
            {/*        <section>*/}
            {/*            <h2>Вопросы React, JavaScript</h2>*/}
            
            {/*            <article>*/}
            {/*                <header>*/}
            {/*                    <img*/}
            {/*                        src=''*/}
            {/*                        alt=''*/}
            {/*                        width='8'*/}
            {/*                        height='8'*/}
            {/*                        loading='lazy'*/}
            {/*                        aria-hidden='true'*/}
            {/*                    />*/}
            {/*                    <h3>Что такое Virtual DOM, и как он работает?</h3>*/}
            {/*                    <button type='button' aria-label='Развернуть ответ'>*/}
            {/*                        <img src='' alt='' width='24' height='24' loading='lazy' />*/}
            {/*                    </button>*/}
            {/*                </header>*/}
            
            {/*                <div>*/}
            {/*                    <dl>*/}
            {/*                        <div>*/}
            {/*                            <dt>Рейтинг</dt>*/}
            {/*                            <dd>4</dd>*/}
            {/*                        </div>*/}
            {/*                        <div>*/}
            {/*                            <dt>Сложность</dt>*/}
            {/*                            <dd>10</dd>*/}
            {/*                        </div>*/}
            {/*                    </dl>*/}
            
            {/*                    <button type='button' aria-label='Вопрос - действия'>*/}
            {/*                        Настройки*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            
            {/*                <div>*/}
            {/*                    <p>*/}
            {/*                        Virtual DOM — это абстракция реального DOM, которая используется React для улучшения производительности.*/}
            {/*                        Вместо того чтобы обновлять реальный DOM напрямую при каждом изменении состояния, React сначала обновляет виртуальный DOM, а затем сравнивает его с предыдущей версией, чтобы минимизировать количество операций с реальным DOM.*/}
            {/*                        Этот процесс называется дифференциацией (reconciliation).*/}
            {/*                    </p>*/}
            {/*                    <pre>*/}
            {/*                        <code>*/}
            {/*                            [тут пример кода]*/}
            {/*                        </code>*/}
            {/*                    </pre>*/}
            
            {/*                </div>*/}
            {/*            </article>*/}
            
            {/*            <nav aria-label='Пагинация'>*/}
            {/*                <button type='button' aria-label='Предыдущая страница'>*/}
            {/*                    {'<-'}*/}
            {/*                </button>*/}
            
            {/*                <ul>*/}
            {/*                    <li className={styles.list__item}>*/}
            {/*                        <button type='button'>*/}
            {/*                            1*/}
            {/*                        </button>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.list__item}>*/}
            {/*                        <button type='button'>*/}
            {/*                            2*/}
            {/*                        </button>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.list__item}>*/}
            {/*                        <button type='button'>*/}
            {/*                            3*/}
            {/*                        </button>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.list__item}>*/}
            {/*                        <button type='button'>*/}
            {/*                            4*/}
            {/*                        </button>*/}
            {/*                    </li>*/}
            
            {/*                    <li className={styles.list__item}>*/}
            {/*                        <span>...</span>*/}
            {/*                    </li>*/}
            
            {/*                    <li className={styles.list__item}>*/}
            {/*                        <button type='button'>*/}
            {/*                            17*/}
            {/*                        </button>*/}
            {/*                    </li>*/}
            
            {/*                    <li className={styles.list__item}>*/}
            {/*                        <button type='button'>*/}
            {/*                            18*/}
            {/*                        </button>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            
            {/*                <button type='button' aria-label='Следующая страница'>*/}
            {/*                    {'->'}*/}
            {/*                </button>*/}
            {/*            </nav>*/}
            {/*        </section>*/}
            
            {/*        <section>*/}
            {/*            Тут будут фильтра вопросов*/}
            {/*        </section>*/}
            {/*    </div>*/}
            {/*</main>*/}
        </div>
    )
}

export default App
