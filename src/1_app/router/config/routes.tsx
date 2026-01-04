import { createBrowserRouter } from 'react-router'
import { AppLayout } from '@/1_app/layouts'
import { QuestionsPage } from '@/2_pages/questions'
import { QuestionPage } from '@/2_pages/question-detailed/ui/QuestionPage'

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
            },
            {
                path: '/questions/:questionId',
                element: <QuestionPage />
            }
        ]
    }
]

export const router = createBrowserRouter(routes)