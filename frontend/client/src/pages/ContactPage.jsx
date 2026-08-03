import { useState } from 'react'
import { Arrow, PageHero } from '../components/SiteLayout'

const CONTACT_EMAIL = 'info@jdqpartners.com.au'

function ContactPage() {
  const [emailReady, setEmailReady] = useState(false)

  function sendEnquiry(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `JDQ Partners enquiry — ${data.get('interest')}`
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Interest: ${data.get('interest')}`,
      '',
      data.get('message'),
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setEmailReady(true)
  }

  return (
    <>
      <PageHero
        number="04"
        label="Contact us"
        title={<>Let’s talk about<br /><em>what’s next.</em></>}
        intro="Whether you are looking to invest or seeking a lending partner, the right conversation starts here."
        image="https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&q=85&w=2000"
        imageAlt="Contemporary Sydney office building"
      />

      <section className="contact-page">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Start a<br /><em>conversation.</em></h2>
          <p>Tell us a little about what you are looking for and the right member of our team will be in touch.</p>
          <div className="contact-cards">
            <article><b>General enquiries</b><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></article>
            <article><b>Office</b><span>Sydney, NSW<br />Australia</span></article>
          </div>
        </div>

        <form className="light-form" onSubmit={sendEnquiry}>
          <label>Full name<input name="name" placeholder="Your name" required /></label>
          <label>Email address<input type="email" name="email" placeholder="you@company.com" required /></label>
          <label>Phone number <i>Optional</i><input type="tel" name="phone" placeholder="+61" /></label>
          <label>
            I’m interested in
            <select name="interest" defaultValue="" required>
              <option value="" disabled>Select an option</option>
              <option>Investing with JDQ</option>
              <option>Borrowing from JDQ</option>
              <option>General enquiry</option>
            </select>
          </label>
          <label>Message<textarea name="message" rows="5" placeholder="Tell us a little about your enquiry" required /></label>
          <button className="button button-coral">Prepare email <Arrow /></button>
          {emailReady && (
            <p className="form-status" role="status">
              Your email application has opened with the enquiry addressed to {CONTACT_EMAIL}. Review it and press Send.
            </p>
          )}
        </form>
      </section>

      <section className="contact-note">
        <p>JDQ Partners works with wholesale investors and experienced property borrowers across Australia.</p>
      </section>
    </>
  )
}

export default ContactPage
