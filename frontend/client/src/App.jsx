import { useEffect, useState } from 'react'
import { BrandLogo, Footer, Header } from './components/SiteLayout'
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
  const [isLoading, setIsLoading] = useState(true)
  const currentPath = pageComponents[path] ? path : '/about'
  const CurrentPage = pageComponents[currentPath]

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 650)
    return () => window.clearTimeout(loadingTimer)
  }, [])

  useEffect(() => {
    const handleNavigation = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  useEffect(() => {
    const pageName = currentPath.slice(1)
    document.title = `${pageName[0].toUpperCase()}${pageName.slice(1)} | JDQ Partners`
  }, [currentPath])

  useEffect(() => {
    const revealTargets = document.querySelectorAll([
      'main section:not(.page-hero)',
      'main .value-grid article',
      'main .solution-grid article',
      'main .steps article',
      'main .timeline article',
      'main .accordion-item',
      'main form label',
    ].join(','))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealTargets.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    revealTargets.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )

    revealTargets.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [currentPath])

  return (
    <div className="site-shell">
      {isLoading && (
        <div className="site-loader" role="status" aria-label="Loading JDQ Partners">
          <div className="loader-brand">
            <BrandLogo className="loader-logo" alt="" />
          </div>
          <div className="loader-line"><span /></div>
        </div>
      )}
      <Header currentPath={currentPath} />
      <main key={currentPath} className="page-transition">
        <CurrentPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
