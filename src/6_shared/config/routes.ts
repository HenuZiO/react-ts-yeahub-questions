export const routes = {
    home: '/',
    questions: '/questions',
    questionDetails: (id: number | string) => `/questions/${id}`,
} as const