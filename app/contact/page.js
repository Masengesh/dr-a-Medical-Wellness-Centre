import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <main className="container">
      <Nav />
      <section className="fade-in">
        <h1>Contact Us</h1>
        <p>Let's walk the journey to wellness—together.</p>
        <div className="contact-container">
          <div className="contact-info">
            <p><strong>Phone:</strong> 0700 162 402 | 0770 868 508</p>
            <p><strong>Email:</strong> admin@dramedicalwellness.com</p>
            <p><strong>Address:</strong> KIRA - KASANGANTI ROAD, OPPOSITE THE NEW STABEX 2, @ROMU GARDENS - KIRA</p>
            <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
          </div>
          <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.743222599802!2d32.619157813174866!3d0.4269692805925654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db139fc033ef5%3A0x59f006c217f91c24!2sKasangati%20-%20Kira%20Rd!5e1!3m2!1sen!2sug!4v1763542544397!5m2!1sen!2sug" width="600" height="450" style={{border: '0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}