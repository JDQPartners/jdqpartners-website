import { useState } from 'react'
import { Arrow, PageHero } from '../components/SiteLayout'

const CONTACT_EMAIL = 'info@jdqpartners.com.au'

function ContactPage() {
  const [status, setStatus] = useState('idle')

  async function sendEnquiry(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    setStatus('submitting')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })

      if (!response.ok) throw new Error('Submission failed')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
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
            <article><b>Office</b><span>Tower A The Zenith<br /> Level 9, 821 Pacific Highway <br /> Chatswood, NSW, 2067<br />Australia</span></article>
          </div>
        </div>

        <form
          className="light-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={sendEnquiry}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="honeypot" aria-hidden="true">
            <label>Do not fill this out<input name="bot-field" tabIndex="-1" autoComplete="off" /></label>
          </p>
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
          <button className="button button-coral" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Submit enquiry'} <Arrow />
          </button>
          {status === 'success' && (
            <p className="form-status form-success" role="status">
              Thank you. Your enquiry has been sent successfully and our team will be in touch.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-error" role="alert">
              We could not send your enquiry. Please try again or email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
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
