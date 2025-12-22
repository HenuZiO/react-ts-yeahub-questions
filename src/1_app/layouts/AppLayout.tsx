import styles from './AppLayout.module.css'
import { Sidebar } from '../../3_widgets/sidebar/ui/Sidebar'
import { Header } from '../../3_widgets/header/ui/Header'
import { Outlet } from 'react-router'

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