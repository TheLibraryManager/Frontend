import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {App} from './App'
import { SidebarProvider} from "@/components/ui/sidebar"
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>,
)
