import { createBrowserRouter } from 'react-router'
import { AppLayout } from '@/1_app/layouts'
import { QuestionsPage } from '@/2_pages/questions'

export const routes = [
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <QuestionsPage />
            },
            {
                path: '/questions',
                element: <QuestionsPage />
            }
        ]
    }
]

export const router = createBrowserRouter(routes)