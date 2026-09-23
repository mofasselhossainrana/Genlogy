import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/brand/genlogy-logo.png'

export function Icon({ name, size = 20 }) {
  const paths = { arrow: 'M5 12h14m-6-6 6 6-6 6', menu: 'M4 7h16M4 12h16M4 17h16', close: 'M6 6l12 12M18 6L6 18', code: 'M8 9l-3 3 3 3m8-6 3 3-3 3M14 5l-4 14', memory: 'M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M8 7h8a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1z', sensors: 'M12 12a3 3 0 100-6 3 3 0 000 6zm-6.4 3.4a9 9 0 0112.8 0M2.7 18.3a13 13 0 0118.6 0', check: 'M5 12l4 4L19 6', mail: 'M4 5h16v14H4zM4 7l8 6 8-6', plus: 'M12 5v14M5 12h14' }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.arrow} /></svg>
}

export function Button({ children, to, variant = 'primary', onClick, type = 'button' }) {
  const className = `button button--${variant}`
  const content = <>{children}{variant !== 'quiet' && <Icon name="arrow" size={17} />}</>
  return to ? <Link className={className} to={to}>{content}</Link> : <button className={className} type={type} onClick={onClick}>{content}</button>
}

const links = [['Home', '/'], ['Services', '/services'], ['Projects', '/projects'], ['Products', '/products'], ['About Us', '/about'], ['Contact', '/contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return <>
    <header className="site-header"><div className="shell nav">
      <Link className="brand" to="/" aria-label="Genlogy home"><img src={logo} alt="Genlogy" /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}</nav>
      <Link className="nav-contact" to="/contact">Start a conversation <Icon name="arrow" size={16} /></Link>
      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu"><Icon name="menu" /></button>
    </div></header>
    {open && <div className="mobile-overlay" onClick={() => setOpen(false)}><nav className="mobile-drawer" onClick={e => e.stopPropagation()} aria-label="Mobile navigation">
      <div className="drawer-top"><Link className="brand" to="/" onClick={() => setOpen(false)}><img src={logo} alt="Genlogy" /></Link><button className="menu-button" onClick={() => setOpen(false)} aria-label="Close menu"><Icon name="close" /></button></div>
      {links.map(([label, to], index) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<Icon name="arrow" /></NavLink>)}
    </nav></div>}
  </>
}

export function Footer() { return <footer className="site-footer"><div className="shell footer-grid"><div><Link className="brand footer-brand" to="/"><img src={logo} alt="Genlogy" /></Link><p>Technology built for real-world problems.</p></div><div><p className="eyebrow">Navigate</p>{links.slice(0, 5).map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</div><div><p className="eyebrow">Connect</p><a href="mailto:mofasselhossainrana@gmail.com">mofasselhossainrana@gmail.com</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Genlogy. Built with intent.</span><span>Software × AI × IoT</span></div></footer> }

export function SectionHeading({ eyebrow, title, text, align = 'left' }) { return <div className={`section-heading section-heading--${align}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div> }
export function Cta({ title = 'Have an idea? Let’s build it together.', text = 'Tell us about the problem you want technology to solve.' }) { return <section className="cta"><div className="shell cta-inner"><div><p className="eyebrow">Start a conversation</p><h2>{title}</h2><p>{text}</p></div><Button to="/contact">Contact Genlogy</Button></div></section> }
export function PageHero({ eyebrow, title, text, children }) { return <section className="page-hero tech-grid"><div className="shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-copy">{text}</p>{children}</div></section> }
