import { useEffect, useState } from 'react'
import { Footer, Header } from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import BorrowPage from './pages/BorrowPage'
import ContactPage from './pages/ContactPage'
import InvestPage from './pages/InvestPage'
import './App.css'

const pageComponents = {
  '/about': AboutPage,
  '/invest': InvestPage,
  '/borrow': BorrowPage,
  '/contact': ContactPage,
}

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const currentPath = pageComponents[path] ? path : '/about'
  const CurrentPage = pageComponents[currentPath]

  useEffect(() => {
    const handleNavigation = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  useEffect(() => {
    const pageName = currentPath.slice(1)
    document.title = `${pageName[0].toUpperCase()}${pageName.slice(1)} | JDQ Partners`
  }, [currentPath])

  return (
    <div className="site-shell">
      <Header currentPath={currentPath} />
      <main>
        <CurrentPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
