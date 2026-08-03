import { useState } from 'react'

export function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export function SiteLink({ to, children, className = '', onClick }) {
  function navigate(event) {
    event.preventDefault()
    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo(0, 0)
    onClick?.()
  }

  return (
    <a href={to} className={className} onClick={navigate}>
      {children}
    </a>
  )
}

export function Header({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="topbar">
      <SiteLink to="/about" className="brand" onClick={closeMenu}>
        <span className="brand-mark">JDQ</span>
        <span className="brand-name">PARTNERS</span>
      </SiteLink>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
      </button>

      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        <SiteLink to="/about" className={currentPath === '/about' ? 'active' : ''} onClick={closeMenu}>
          About
        </SiteLink>
        <SiteLink to="/invest" className={currentPath === '/invest' ? 'active' : ''} onClick={closeMenu}>
          Invest with us
        </SiteLink>
        <SiteLink to="/borrow" className={currentPath === '/borrow' ? 'active' : ''} onClick={closeMenu}>
          Borrow with us
        </SiteLink>
        <SiteLink
          to="/contact"
          className={`nav-contact ${currentPath === '/contact' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Contact us <Arrow />
        </SiteLink>
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      <SiteLink to="/about" className="brand footer-brand">
        <span className="brand-mark">JDQ</span>
        <span className="brand-name">PARTNERS</span>
      </SiteLink>
      <p>Private credit. Considered differently.</p>
      <div>
        <span>© 2026 JDQ Partners · Sydney, Australia</span>
        <span>
          <SiteLink to="/invest">Invest</SiteLink> &nbsp;·&nbsp;
          <SiteLink to="/borrow">Borrow</SiteLink> &nbsp;·&nbsp;
          <SiteLink to="/contact">Contact</SiteLink>
        </span>
      </div>
    </footer>
  )
}

export function PageHero({ number, label, title, intro, image, imageAlt }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <p className="eyebrow light">{number} · {label}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div
        className="page-hero-image"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent 55%, rgba(7, 30, 27, .5)), url(${image})`,
        }}
        role="img"
        aria-label={imageAlt}
      />
    </section>
  )
}

export function PageCallToAction({ title, body, button, to }) {
  return (
    <section className="page-cta">
      <div>
        <p className="eyebrow light">Start a conversation</p>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{body}</p>
        <SiteLink to={to} className="button button-coral">
          {button} <Arrow />
        </SiteLink>
      </div>
    </section>
  )
}
