import { PageCallToAction, PageHero } from '../components/SiteLayout'

const solutions = [
  ['01', 'Acquisition finance', 'Funding for well-located residential, commercial and mixed-use property acquisitions.'],
  ['02', 'Construction finance', 'Structured funding for experienced developers with a clear delivery plan.'],
  ['03', 'Bridging finance', 'Responsive short-term capital where timing, flexibility and certainty matter.'],
  ['04', 'Special situations', 'Bespoke structures for transactions that do not fit conventional lending criteria.'],
]

const process = [
  ['01', 'Initial conversation', 'Share the asset, business plan, funding requirement and timing with our team.'],
  ['02', 'Indicative terms', 'We assess the opportunity and set out clear, commercially grounded terms.'],
  ['03', 'Due diligence', 'Focused review of the borrower, valuation, project, structure and exit strategy.'],
  ['04', 'Credit approval', 'Our local decision-makers review and approve the final transaction structure.'],
  ['05', 'Documentation', 'Legal documentation, conditions precedent and settlement are coordinated directly.'],
  ['06', 'Ongoing partnership', 'Responsive relationship management continues throughout the life of the loan.'],
]

function BorrowPage() {
  return (
    <>
      <PageHero
        number="03"
        label="Borrow with us"
        title={<>Business Finance that<br /><em>moves with you.</em></>}
        intro="Tailored, property-backed finance for experienced Australian borrowers who value certainty, access and commercial judgement."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=85&w=2000"
        imageAlt="Australian construction project"
      />

      <section className="editorial split">
        <div><p className="eyebrow">A direct lending partner</p><h2>Clarity from first<br />call to settlement.</h2></div>
        <div className="prose">
          <p className="lead">You speak to the people making the decision.</p>
          <p>Our direct model keeps communication clear and the process moving. We take the time to understand the transaction, identify the critical issues early and structure finance around the real requirements of the project.</p>
          <p>We support acquisition, construction, residual stock, bridging and special-situation opportunities where a thoughtful funding partner can add value.</p>
        </div>
      </section>

      <section className="solutions">
        <p className="eyebrow light">Where we can help</p>
        <div className="solution-grid">
          {solutions.map(([number, title, description]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="borrow-process">
        <div><p className="eyebrow">The borrowing process</p><h2>A straightforward<br /><em>path to funding.</em></h2></div>
        <div className="timeline">
          {process.map(([number, title, description]) => (
            <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{description}</p></div></article>
          ))}
        </div>
      </section>

      <PageCallToAction
        title={<>Have a transaction<br /><em>to discuss?</em></>}
        body="Send us a short overview. We’ll quickly let you know whether it fits our mandate and what we need next."
        button="Speak with our lending team"
        to="/contact"
      />
    </>
  )
}

export default BorrowPage
