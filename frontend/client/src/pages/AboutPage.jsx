import { PageCallToAction, PageHero } from '../components/SiteLayout'

function AboutPage() {
  return (
    <>
      <PageHero
        number="01"
        label="About JDQ"
        title={<>Focused capital.<br /><em>Clear thinking.</em></>}
        intro="JDQ Partners is a Sydney-based private credit lender and investment manager built around direct relationships, disciplined underwriting and shared conviction."
        image="https://images.unsplash.com/photo-1767259119583-e7b7f91b0cca?auto=format&fit=crop&q=85&w=2000"
        imageAlt="Sydney skyline and contemporary architecture"
      />

      <section className="editorial split">
        <div>
          <p className="eyebrow">Our perspective</p>
          <h2>We see the detail<br />others overlook.</h2>
        </div>
        <div className="prose">
          <p className="lead">Private credit works best when capital is close to the opportunity.</p>
          <p>We combine property expertise, commercial judgement and rigorous credit analysis to identify opportunities with compelling risk-adjusted potential. Our team stays close to every transaction—from first review through to repayment.</p>
          <p>That direct model creates better information, faster decisions and a clearer line of accountability for everyone involved.</p>
        </div>
      </section>

      <section className="image-story">
        <div className="story-image architecture" role="img" aria-label="Modern office interior" />
        <div>
          <p className="eyebrow">Our approach</p>
          <h2>Institutional discipline.<br /><em>Entrepreneurial pace.</em></h2>
          <p>Our process is structured without being rigid. We look beyond headline metrics to understand the asset, the sponsor, the business plan and the real path to repayment.</p>
          <ul className="tick-list">
            <li>Independent, locally based decision-making</li>
            <li>Detailed downside and sensitivity analysis</li>
            <li>Active management across every loan</li>
            <li>Transparent communication with stakeholders</li>
          </ul>
        </div>
      </section>

      <section className="values">
        <p className="eyebrow">What guides us</p>
        <div className="value-grid">
          <article><b>01</b><h3>Discipline</h3><p>We protect capital by being selective, thorough and prepared to walk away.</p></article>
          <article><b>02</b><h3>Alignment</h3><p>Our structures are designed to keep interests clear and outcomes shared.</p></article>
          <article><b>03</b><h3>Clarity</h3><p>We communicate directly and make complexity understandable.</p></article>
          <article><b>04</b><h3>Ownership</h3><p>We stay accountable from origination through to final repayment.</p></article>
        </div>
      </section>

      <PageCallToAction
        title={<>One fund.<br /><em>Many ways to invest.</em></>}
        body="Explore the JDQ Choice Fund or speak with our lending team about a customised solution."
        button="Start a conversation"
        to="/invest"
      />
    </>
  )
}

export default AboutPage
