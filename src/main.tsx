import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cabecalho from './components/Cabecalho/Cabecalho'
// import './'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Cabecalho />
  </StrictMode>,
)
