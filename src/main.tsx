import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './1_app/styles/style.css'
import App from './1_app/App.tsx'
import { StoreProvider } from './1_app/providers/StoreProvider'

createRoot(document.getElementById('root')!)
    .render(
        <StrictMode>
            <StoreProvider>
                <App />
            </StoreProvider>
        </StrictMode>
    )
