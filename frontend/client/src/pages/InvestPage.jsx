import { Arrow, InformationAccordion, PageCallToAction, PageHero, SiteLink } from '../components/SiteLayout'

const investorInformation = [
  {
    title: 'Who is eligible to invest?',
    content: (
      <>
        <p>JDQ investment opportunities are intended for wholesale clients under the Corporations Act 2001 (Cth). Eligibility is assessed as part of the application process and may be established through several pathways.</p>
        <ul>
          <li>A qualified accountant’s certificate confirming net assets of at least $2.5 million or gross income of at least $250,000 in each of the previous two financial years.</li>
          <li>An investment of at least $500,000, where the relevant statutory test applies.</li>
          <li>Qualification as a professional investor or assessment as a sophisticated investor in accordance with the applicable legislation.</li>
        </ul>
        <p>These are general examples only. JDQ will confirm the evidence required for each applicant before accepting an investment.</p>
      </>
    ),
  },
  {
    title: 'What is a contributory fund?',
    content: (
      <>
        <p>A contributory fund gives eligible investors the opportunity to select and participate in specific loans. More than one investor may contribute capital to the same loan, with each investor holding an interest proportionate to their participation.</p>
        <p>Unlike a pooled fund, the performance, term, security position and liquidity of each contribution are linked to the selected loan. Investors have the freedom to review the information provided for an opportunity before deciding whether and how much to invest.</p>
      </>
    ),
  },
  {
    title: 'How is each opportunity assessed?',
    content: (
      <>
        <p>JDQ considers the borrower, property, valuation, loan structure, project feasibility and proposed repayment strategy. Through sceneario testing and our experienced team JDQ ensures approved loans are high quality and up to our strenuous standards. Approved opportunities are presented with transaction-specific information so investors can make their own informed decision.</p>
        <p>All investments involve risk, including possible delays in repayment and loss of income or capital. Prospective investors should review the relevant offer documents and obtain independent advice.</p>
      </>
    ),
  },
]

function InvestPage() {
  return (
    <>
      <PageHero
        number="02"
        label="Invest with us"
        title={<>Income with<br /><em>intention.</em></>}
        intro="Access a carefully selected portfolio of Australian property-backed private credit through the JDQ Choice Fund."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=85&w=2000"
        imageAlt="Contemporary glass office tower"
      />

      <section className="fund-intro editorial">
        <div>
          <p className="eyebrow">Our flagship strategy</p>
          <h2>The JDQ<br /><em>Choice Fund</em></h2>
          <div className="fund-tile">
            <span>JDQ / CF</span><b>C</b>
            <p>Choice in opportunity.<br />Discipline in execution.</p>
          </div>
        </div>
        <div className="prose">
          <p className="lead">Designed for wholesale investors seeking regular income and capital preservation.</p>
          <p>The JDQ Choice Fund provides a wide-range of loans secured by Australian real estate. Each opportunity is originated or selected by our team and passes a disciplined, multi-stage investment process.</p>
          <p>Investors can choose which project and the amount they would like to invest giving you full control over your portfolio </p>
          <p>We favour clear business plans, conservative structures and credible repayment strategies. The result is a portfolio built loan by loan—not a broad market proxy.</p>
          <SiteLink to="/contact" className="button button-coral">Request fund information <Arrow /></SiteLink>
          <small>Available to eligible wholesale investors. Investment involves risk; returns are not guaranteed.</small>
        </div>
      </section>

      <section className="numbers">
        <div><strong>01</strong><span>Australian<br />real estate focus</span></div>
        <div><strong>02</strong><span>Property-backed<br />loan security</span></div>
        <div><strong>03</strong><span>Active portfolio<br />management</span></div>
        <div><strong>04</strong><span>Regular investor<br />reporting</span></div>
      </section>

      <InformationAccordion
        eyebrow="Investor information"
        title={<>Understanding<br />the structure.</>}
        intro="Key information for prospective investors considering a loan-specific private credit opportunity."
        items={investorInformation}
      />

      <section className="process-section">
        <div><p className="eyebrow">How we invest</p><h2>Selection is our<br /><em>first line of defence.</em></h2></div>
        <div className="steps">
          <article><b>01</b><h3>Originate</h3><p>Source opportunities through direct borrower, adviser and industry relationships.</p></article>
          <article><b>02</b><h3>Underwrite</h3><p>Test the asset, sponsor, structure, cash flow and exit under multiple scenarios.</p></article>
          <article><b>03</b><h3>Structure</h3><p>Build appropriate covenants, controls and security around the identified risks.</p></article>
          <article><b>04</b><h3>Manage</h3><p>Monitor performance, milestones and risk indicators throughout the loan term.</p></article>
        </div>
      </section>

      <section className="image-band invest-band">
        <blockquote>“A portfolio should be built with the downside in mind—not explained after the fact.”</blockquote>
      </section>

      <PageCallToAction
        title={<>Put credit<br /><em>to work.</em></>}
        body="Contact our investor relations team to request the fund information pack and discuss suitability. JDQ products only available to whlesale investors as defined under the Corporations Act 2001"
        button="Enquire about investing"
        to="/contact"
      />
    </>
  )
}

export default InvestPage
