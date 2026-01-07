import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from '@/1_app/providers'
import App from '@/1_app/App.tsx'

import '@/1_app/styles/style.css'

createRoot(document.getElementById('root')!)
    .render(
        <StrictMode>
            <StoreProvider>
                <App />
            </StoreProvider>
        </StrictMode>
    )
