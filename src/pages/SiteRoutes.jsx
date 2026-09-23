import { Routes, Route, Link, useParams } from 'react-router-dom'
import { Navbar, Footer, Button, Cta, Icon, PageHero, SectionHeading } from '../components/ui'
import { founders, principles, projects, services } from '../data/site'
import { useState } from 'react'

function Layout({ children }) { return <><Navbar /><main>{children}</main><Footer /></> }
function ServiceCard({ service }) { return <article className="service-card"><div className="card-top"><span className="card-number">{service.number}</span><span className="icon-box"><Icon name={service.icon} /></span></div><h3>{service.title}</h3><p>{service.text}</p><div className="tag-row">{service.tags.map(t => <span key={t}>{t}</span>)}</div><Link to="/services" className="text-link">Explore capability <Icon name="arrow" size={16} /></Link></article> }
function ProjectCard({ project }) {
  return <article className="project-card">
    <Link to={`/projects/${project.id}`} className={`project-card__media${project.coverMode === 'contain' ? ' project-card__media--contain' : ''}`} aria-label={`View ${project.title}`}>
      <img src={project.coverImage} alt={project.coverAlt || `${project.title} splash screen`} />
      <span className="project-card__media-label">{project.type}</span>
    </Link>
    <div className="project-card__content">
      <div className="project-card__topline"><span>{project.type}</span><span className="project-status"><i />{project.status}</span></div>
      <h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3>
      <p>{project.summary}</p>
      <div className="tag-row">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
      <Link to={`/projects/${project.id}`} className="text-link">View project <Icon name="arrow" size={16} /></Link>
    </div>
  </article>
}

function Home() {
  const [active, setActive] = useState('software')
  const panel = { software: ['Reactive software systems', 'High-concurrency interfaces and APIs that stay clear, resilient, and easy to evolve.', '99.98%', 'UPTIME'], ai: ['Adaptive intelligence', 'Purpose-built ML and agent workflows that turn data into useful decisions.', '124', 'TOKENS / S'], iot: ['Telemetry at the edge', 'Connected sensor systems with reliable local control and secure cloud visibility.', '43K', 'PACKETS / S'] }[active]
  return <Layout><section className="home-hero tech-grid"><div className="shell hero-layout"><div><p className="eyebrow eyebrow--mint">Genlogy / Engineering Studio</p><h1>Building technology that <em>solves real problems.</em></h1><p className="hero-copy">We combine software engineering, applied intelligence, and connected systems to create technology that performs in the real world.</p><div className="button-row"><Button to="/contact">Start a project</Button><Button to="/projects" variant="secondary">Explore our work</Button></div></div><div className="hero-system" aria-label="Software, AI and IoT system diagram"><span className="system-label label-a">SOFTWARE</span><span className="system-label label-b">AI / ML</span><span className="system-label label-c">IOT / EDGE</span><div className="system-orbit" /><div className="system-core"><span>&lt;/&gt;</span></div><div className="system-dot dot-a" /><div className="system-dot dot-b" /><div className="system-dot dot-c" /></div></div></section>
    <section className="section shell"><SectionHeading eyebrow="What we do" title="Three disciplines. One engineered outcome." text="Genlogy brings complementary expertise together early, so your solution works as a connected whole." /><div className="service-grid">{services.map(s => <ServiceCard key={s.id} service={s} />)}</div></section>
    <section className="trinity-section"><div className="shell trinity"><div><SectionHeading eyebrow="Software × AI × IoT" title="A complete technology pipeline." text="We connect physical systems, reliable software, and useful intelligence into a single operational loop." /><div className="trinity-tabs">{services.map(s => <button key={s.id} className={active === s.id ? 'active' : ''} onClick={() => setActive(s.id)}><Icon name={s.icon} size={17} />{s.id === 'ai' ? 'AI & ML' : s.id === 'iot' ? 'IoT & Edge' : 'Software'}</button>)}</div></div><div className="trinity-panel"><p className="eyebrow">{panel[3]}</p><strong>{panel[2]}</strong><h3>{panel[0]}</h3><p>{panel[1]}</p><div className="signal-lines"><i /><i /><i /><i /><i /></div><span className="status-dot">SYSTEM / READY</span></div></div></section>
    <section className="section shell"><div className="section-split"><SectionHeading eyebrow="Featured work" title="Built to be used, not just presented." /><Button to="/projects" variant="secondary">All projects</Button></div><div className={projects.length === 1 ? 'project-grid project-grid--single' : 'project-grid'}>{projects.slice(0, 2).map(p => <ProjectCard key={p.id} project={p} />)}</div></section>
    <section className="product-banner shell"><div><p className="eyebrow eyebrow--mint">Our products</p><h2>Genlogy<br />TelemetryMesh<span>™</span></h2><p>An adaptable foundation for connecting field devices, streaming telemetry, and operational intelligence.</p><Button to="/products" variant="secondary">Explore product</Button></div><div className="mesh"><i /><i /><i /><i /><i /><i /><b /><b /><b /></div></section>
    <section className="section shell"><SectionHeading eyebrow="Why Genlogy" title="Engineering with the whole system in view." /><div className="principle-grid">{principles.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><Cta /></Layout>
}

function Services() { return <Layout><PageHero eyebrow="Capabilities" title="Our services & capabilities." text="From a focused software build to an integrated edge-to-cloud system, we engineer practical technology around your operating needs." /><section className="section shell divisions">{services.map((s, i) => <article className="division" key={s.id} id={s.id}><div className="division-number">0{i + 1}</div><div><p className="eyebrow">{s.title}</p><h2>{i === 0 ? 'Software that creates operational leverage.' : i === 1 ? 'Intelligence that supports better decisions.' : 'Connected systems that make physical data useful.'}</h2><p>{s.text} Our work is shaped around maintainability, observability, and the people who will rely on it.</p><ul>{s.tags.concat(['Testing & deployment']).map(item => <li key={item}><Icon name="check" size={17} />{item}</li>)}</ul></div><div className={`division-graphic graphic-${s.id}`}><Icon name={s.icon} size={56} /><span>GENLOGY / {s.id.toUpperCase()}</span></div></article>)}</section><section className="matrix-section"><div className="shell"><SectionHeading eyebrow="Engineering matrix" title="Choose a focused capability or connect the full stack." /><div className="matrix"><div>Capability</div><div>Software</div><div>AI / ML</div><div>IoT / Edge</div>{['Interface & experience', 'Data & APIs', 'Automation & inference', 'Device telemetry', 'Deployment & operations'].map((item, i) => <div className="matrix-row" key={item}><span>{item}</span><span className={i < 3 ? 'yes' : ''}>●</span><span className={i === 1 || i === 2 ? 'yes' : ''}>●</span><span className={i >= 2 ? 'yes' : ''}>●</span></div>)}</div></div></section><Cta title="Have a technical specification ready?" text="Bring the constraints, goals, and context. We’ll help turn them into a practical build plan." /></Layout> }
function Projects() {
  const [filter, setFilter] = useState('all')
  const filters = [['all', 'All work'], ['software', 'Software'], ['ai', 'AI & ML'], ['iot', 'IoT']].filter(([key]) => key === 'all' || projects.some(project => project.categories.includes(key)))
  const list = filter === 'all' ? projects : projects.filter(project => project.categories.includes(filter))
  const gridClass = `project-grid project-grid--three${list.length === 1 ? ' project-grid--single' : ''}`
  return <Layout>
    <PageHero eyebrow="Selected work" title="Projects built around real workflows." text="Explore the Genlogy engineering practice through practical software, intelligence, and connected-system work." />
    <section className="section shell">
      <div className="project-toolbar"><div className="filter-tabs" aria-label="Project filters">{filters.map(([key, label]) => <button key={key} onClick={() => setFilter(key)} className={filter === key ? 'active' : ''}>{label}</button>)}</div><span className="project-count">{list.length} {list.length === 1 ? 'project' : 'projects'}</span></div>
      <div className={gridClass}>{list.map(project => <ProjectCard project={project} key={project.id} />)}</div>
    </section>
    <Cta title="Have a project in mind?" />
  </Layout>
}

function ProjectGallery({ project }) {
  return <div className="project-gallery" role="region" aria-label={`${project.title} screenshots`} tabIndex={0}>
    {project.gallery.map(item => <figure className="project-gallery__item" key={item.label}>
      <div className="project-gallery__frame"><img src={item.image} alt={item.alt} loading="lazy" /></div>
      <figcaption>{item.label}</figcaption>
    </figure>)}
  </div>
}

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(item => item.id === id)
  if (!project) return <NotFound />

  return <Layout>
    <section className="project-detail-hero tech-grid">
      <div className="shell project-detail-hero__layout">
        <div className="project-detail-hero__copy">
          <p className="eyebrow eyebrow--mint">{project.type} · Featured case study</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="button-row">
            {project.liveUrl && <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live Website <Icon name="arrow" size={17} /></a>}
            <Button to="/projects" variant="secondary">Back to projects</Button>
          </div>
        </div>
        <div className={`project-detail-hero__visual${project.coverMode === 'contain' ? ' project-detail-hero__visual--contain' : ''}`}><img src={project.coverImage} alt={project.coverAlt || `${project.title} splash screen`} /></div>
      </div>
    </section>
    <section className="section shell project-overview">
      <div><SectionHeading eyebrow="Project overview" title={project.overviewTitle || 'A complete support workflow.'} text={project.summary} /></div>
      <div className="project-facts">
        <div><span>Project type</span><strong>{project.type}</strong></div>
        <div><span>Status</span><strong>{project.status}</strong></div>
        <div><span>Live website</span><strong>{project.liveUrl ? 'Available' : 'Not available'}</strong></div>
      </div>
    </section>
    {project.gallery?.length > 0 && <section className="project-gallery-section section">
      <div className="shell">
        <SectionHeading eyebrow="Product walkthrough" title="See the support experience in context." text="Browse the authentication and dashboard views from the live product." />
        <ProjectGallery project={project} />
        <p className="project-gallery__hint">Swipe or scroll horizontally to explore the screenshots.</p>
      </div>
    </section>}
    <section className="section shell project-stack-section">
      <SectionHeading eyebrow="Technology stack" title={project.stackTitle || 'A practical full-stack foundation.'} />
      <div className="tag-row project-stack-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
    </section>
    {project.features?.length > 0 && <section className="section shell project-features-section">
      <SectionHeading eyebrow="Key features" title="Practical capabilities built into the experiment." />
      <div className="project-feature-grid">{project.features.map(feature => <div key={feature}><span><Icon name="check" size={16} /></span><p>{feature}</p></div>)}</div>
    </section>}
    <Cta title={project.ctaTitle || 'Have a support workflow to build?'} text={project.ctaText || 'Genlogy can help turn a real operational need into a dependable digital product.'} />
  </Layout>
}
function Products() { return <Layout><PageHero eyebrow="Genlogy products" title="Technology foundations for connected operations." text="We are developing adaptable product building blocks that help teams move from a physical signal to an informed action." /><section className="section shell product-detail"><div className="product-mark"><div className="system-core"><span>⌁</span></div></div><div><p className="eyebrow">TelemetryMesh™</p><h2>See the full path of your telemetry.</h2><p>TelemetryMesh™ is a product concept for securely collecting device data, retaining useful context, and exposing it through an operator-ready system.</p><ul>{['Edge-device connectivity', 'Telemetry ingestion and time-series storage', 'Alerting and analysis-ready data', 'Operational dashboard foundations'].map(t => <li key={t}><Icon name="check" size={17} />{t}</li>)}</ul><Button to="/contact">Discuss TelemetryMesh</Button></div></section><section className="section shell"><SectionHeading eyebrow="Product approach" title="Built as modular foundations, not black boxes." /><div className="principle-grid">{[['Connect', 'Bring field devices and existing systems into a secure, observable flow.'], ['Understand', 'Create a clear historical record that teams can investigate and learn from.'], ['Act', 'Make the next useful decision visible to the people responsible for it.'], ['Evolve', 'Keep room for new devices, rules, and intelligence as operations grow.']].map(([t, p], i) => <article key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section><Cta /></Layout> }
function About() { return <Layout><PageHero eyebrow="About Genlogy" title="Technology built by complementary expertise." text="We bridge the divide between bits, brains, and breadboards to create systems that can live beyond a slide deck." /><section className="section shell"><SectionHeading eyebrow="How we work" title="The disciplines behind the outcomes." /><div className="discipline-grid">{services.map(s => <ServiceCard key={s.id} service={s} />)}</div></section><section className="founders-section"><div className="shell"><SectionHeading eyebrow="The people behind Genlogy" title="Meet the people behind Genlogy." text="Software × AI × IoT expertise, connected in one engineering practice." /><div className="founder-grid">{founders.map(f => <article className="founder-card" key={f.id}><div className="founder-photo"><img className={f.id === 'nura-alom-tafim' ? 'founder-photo__image--tafim' : undefined} src={f.image} alt={`${f.name}, ${f.role}`} loading="lazy" /></div><div className="founder-card__body"><p className="eyebrow">{f.role}</p><h3>{f.name}</h3><p className="founder-card__intro">{f.intro}</p>{f.focus?.length > 0 && <div className="team-focus"><span>Focus</span><div className="team-focus__list">{f.focus.map(item => <span key={item}>{item}</span>)}</div></div>}{(f.links?.linkedin || f.links?.github) && <div className="team-links">{f.links.linkedin && <a className="team-link" href={f.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow" size={14} /></a>}{f.links.github && <a className="team-link" href={f.links.github} target="_blank" rel="noreferrer">GitHub <Icon name="arrow" size={14} /></a>}</div>}</div></article>)}</div></div></section><section className="section shell"><SectionHeading eyebrow="Methodology" title="A deliberate route from challenge to capability." /><div className="methodology">{['Understand the problem', 'Design the solution', 'Build the system', 'Test in context', 'Deploy with care', 'Improve through use'].map((text, i) => <div key={text}><span>0{i + 1}</span><h3>{text}</h3></div>)}</div></section><section className="section shell"><SectionHeading eyebrow="Engineering principles" title="Useful technology is our measure of quality." /><div className="principle-grid">{principles.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><Cta /></Layout> }
function Contact() { const [sent, setSent] = useState(false); function submit(e) { e.preventDefault(); setSent(true) } return <Layout><PageHero eyebrow="Contact Genlogy" title="Let’s make the next useful thing." text="Share the challenge, context, and outcome you have in mind. We’ll respond with a practical next step." /><section className="section shell contact-layout"><div><p className="eyebrow">Start a conversation</p><h2>Tell us what needs solving.</h2><p>Whether the work begins with an interface, an intelligent workflow, or a physical system, context is the best starting point.</p><div className="contact-points"><div><Icon name="mail" /><div><span>Email</span><a href="mailto:mofasselhossainrana@gmail.com">mofasselhossainrana@gmail.com</a></div></div><div><Icon name="plus" /><div><span>Focus</span><p>Software · AI/ML · IoT systems</p></div></div></div></div><form className="contact-form" onSubmit={submit}>{sent ? <div className="form-success"><Icon name="check" size={32} /><h3>Message prepared.</h3><p>Thanks for reaching out. In a live deployment, this form would be connected to your preferred email or CRM service.</p><Button variant="secondary" onClick={() => setSent(false)}>Send another</Button></div> : <><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>What are you looking to build?<select defaultValue=""><option value="" disabled>Select a focus area</option><option>Web & software</option><option>AI & machine learning</option><option>IoT & connected systems</option><option>Integrated solution</option></select></label><label>Project context<textarea required rows="5" placeholder="The challenge, goals, timeline, or any useful technical context." /></label><Button type="submit">Send inquiry</Button></>}</form></section></Layout> }
function NotFound() { return <Layout><PageHero eyebrow="404" title="This route is not connected." text="The page you requested does not exist yet."><Button to="/">Return home</Button></PageHero></Layout> }
export function SiteRoutes() { return <Routes><Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/projects" element={<Projects />} /><Route path="/projects/:id" element={<ProjectDetail />} /><Route path="/products" element={<Products />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes> }
