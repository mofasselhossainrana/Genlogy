import { BrowserRouter } from 'react-router-dom'
import { SiteRoutes } from './pages/SiteRoutes'
import './styles/global.css'

export default function App() {
  return <BrowserRouter><SiteRoutes /></BrowserRouter>
}
