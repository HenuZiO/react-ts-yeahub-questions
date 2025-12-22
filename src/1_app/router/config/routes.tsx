import { createBrowserRouter } from 'react-router'
import { QuestionsPage } from '../../../2_pages/questions/ui/QuestionsPage'
import { AppLayout } from '../../layouts/AppLayout'

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