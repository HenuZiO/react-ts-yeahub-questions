import { Outlet } from 'react-router'
import { Header } from '@/3_widgets/header'
import { Sidebar } from '@/3_widgets/sidebar'

import styles from './AppLayout.module.css'

export const AppLayout = () => {
    return (
        <div className={styles.page}>
           <Sidebar />

            <div className={styles.page__content}>
                <Header />
                
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}