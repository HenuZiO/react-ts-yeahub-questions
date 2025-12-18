function App() {
    
    return (
        <>
            <aside>
                <header>
                    <div>
                        <img src='' alt='' width='33' height='33' loading='lazy' />
                        <span>YeaHub</span>
                    </div>
                    <button type='button' aria-label='Свернуть меню'>
                        {'<'}
                    </button>
                </header>

                <nav aria-label='Основная навигация'>
                    <ul>
                        <li>
                            <a href='/'>
                                <span aria-hidden='true'>[]</span>
                                <span>Главная</span>
                            </a>
                        </li>

                        <li>
                            <a href='/'>
                                <span aria-hidden='true'>[]</span>
                                <span>Мой профиль</span>
                            </a>
                        </li>

                        <li>
                            <button
                                type='button'
                                aria-expanded='true'
                                aria-controls='training-submenu'
                            >
                                <span aria-hidden='true'>[]</span>
                                <span>Обучение</span>
                            </button>

                            <ul id='training-submenu'>
                                <li>
                                    <a href='/'>
                                        <span aria-hidden='true'>[]</span>
                                        <span>Собеседование</span>
                                    </a>
                                </li>

                                <li>
                                    <a href='/'>
                                        <span aria-hidden='true'>[]</span>
                                        <span>Roadmap</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <button
                                type='button'
                                aria-expanded='true'
                                aria-controls='blog-submenu'
                            >
                                <span aria-hidden='true'>[]</span>
                                <span>Блог</span>
                            </button>

                            <ul id='blog-submenu'>
                                <li>
                                    <a href='/'>
                                        <span aria-hidden='true'>[]</span>
                                        <span>Все статьи</span>
                                    </a>
                                </li>

                                <li>
                                    <a href='/'>
                                        <span aria-hidden='true'>[]</span>
                                        <span>Личный блог</span>
                                    </a>
                                </li>

                                <li>
                                    <a href='/blog/new'>
                                        <span aria-hidden='true'>[]</span>
                                        <span>Написать статью</span>
                                    </a>
                                </li>

                                <li>
                                    <a href='/blog/saved'>
                                        <span aria-hidden='true'>[]</span>
                                        <span>Сохранённые</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <footer>
                    <a href='/'>
                        <span aria-hidden='true'>[]</span>
                        <span>Поддержка</span>
                    </a>

                    <button type='button'>
                        <span aria-hidden='true'>[]</span>
                        <span>Выход</span>
                    </button>
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

            <main>
                <nav>
                    <ol>
                        <li>
                            <a href='/'>
                                Обучение
                            </a>
                        </li>

                        <li>
                            <a href='/'>
                                Список вопросов
                            </a>
                        </li>
                    </ol>
                </nav>

                <div>
                    <section>
                        <h2>Вопросы React, JavaScript</h2>

                        <article>
                            <header>
                                <img
                                    src=''
                                    alt=''
                                    width='8'
                                    height='8'
                                    loading='lazy'
                                    aria-hidden='true'
                                />
                                <h3>Что такое Virtual DOM, и как он работает?</h3>
                                <button type='button' aria-label='Развернуть ответ'>
                                    <img src='' alt='' width='24' height='24' loading='lazy' />
                                </button>
                            </header>

                            <div>
                                <dl>
                                    <div>
                                        <dt>Рейтинг</dt>
                                        <dd>4</dd>
                                    </div>
                                    <div>
                                        <dt>Сложность</dt>
                                        <dd>10</dd>
                                    </div>
                                </dl>
                                
                                <button  type='button' aria-label='Вопрос - действия'>
                                    Настройки
                                </button>
                            </div>

                            <div>
                                <p>
                                    Virtual DOM — это абстракция реального DOM, которая используется React для улучшения производительности.
                                    Вместо того чтобы обновлять реальный DOM напрямую при каждом изменении состояния, React сначала обновляет виртуальный DOM, а затем сравнивает его с предыдущей версией, чтобы минимизировать количество операций с реальным DOM.
                                    Этот процесс называется дифференциацией (reconciliation).
                                </p>
                                <pre>
                                    <code>
                                        [тут пример кода]
                                    </code>
                                </pre>
                                
                            </div>
                        </article>

                        <nav aria-label='Пагинация'>
                            <button type='button' aria-label='Предыдущая страница'>
                                {'<-'}
                            </button>

                            <ul>
                                <li>
                                    <button type='button'>
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type='button'>
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button type='button'>
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button type='button'>
                                        4
                                    </button>
                                </li>

                                <li>
                                    <span>...</span>
                                </li>

                                <li>
                                    <button type='button'>
                                        17
                                    </button>
                                </li>

                                <li>
                                    <button type='button'>
                                        18
                                    </button>
                                </li>
                            </ul>

                            <button type='button' aria-label='Следующая страница'>
                                {'->'}
                            </button>
                        </nav>
                    </section>
                    
                    <section>
                        Тут будут фильтра вопросов
                    </section>
                </div>
            </main>
        </>
    )
}

export default App
