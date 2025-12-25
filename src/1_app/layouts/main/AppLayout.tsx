import { Outlet } from 'react-router'

import styles from './AppLayout.module.css'
import { Header } from '@/3_widgets/header'
import { Sidebar } from '@/3_widgets/sidebar'

export const AppLayout = () => {
    return (
        <div className={styles.page}>
           <Sidebar />

            <div className={styles.page__content}>
                <Header />
                
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}