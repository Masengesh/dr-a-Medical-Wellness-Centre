import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <main className="container">
      <Nav />
      <section className="services-hero fade-in">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive wellness solutions tailored to your unique health journey</p>
        </div>
      </section>

      <section id="services" className="fade-in">
        <div className="grid">
          <div className="card">
            <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757426794/7S5C7537_wvpimo.jpg" alt="Diabetes" />
            <h3>Diabetes & Hypertension</h3>
            <p>Personalized lifestyle changes and wellness coaching.</p>
            <Link href="/services/diabetes-hypertension" className="btn">Learn More</Link>
          </div>
          <div className="card">
            <img
              src="https://res.cloudinary.com/dspsj31q8/image/upload/v1720281467/pexels-rethaferguson-3059748_xcrylp.jpg"
              alt="Nutrition" />
            <h3>Nutrition & Diet Support</h3>
            <p>Customized, affordable nutrition coaching.</p>
            <Link href="/services/nutrition-diet" className="btn">Learn More</Link>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757425999/7S5C7530_zc98uw.jpg" alt="Adolescent" />
            <h3>Adolescent Health</h3>
            <p>Programs addressing emotional development & peer pressure.</p>
            <Link href="/services/adolescent-health" className="btn">Learn More</Link>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1713361437/samples/cup-on-a-table.jpg"
              alt="Mental" />
            <h3>Mental Health Support</h3>
            <p>Therapy, resilience coaching, and innovative tools.</p>
            <Link href="/services/mental-health" className="btn">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="services-overview fade-in">
        <div className="overview-container">
          <h2>Why Choose Our Services?</h2>
          <div className="overview-grid">
            <div className="overview-item">
              <div className="overview-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Holistic Approach</h3>
              <p>We treat the whole person, not just symptoms, addressing mind, body, and environment.</p>
            </div>
            <div className="overview-item">
              <div className="overview-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Personalized Care</h3>
              <p>Every treatment plan is customized to your unique health needs and lifestyle.</p>
            </div>
            <div className="overview-item">
              <div className="overview-icon">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3>Compassionate Support</h3>
              <p>Our team provides empathetic, non-judgmental care in a safe environment.</p>
            </div>
            <div className="overview-item">
              <div className="overview-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Natural Solutions</h3>
              <p>We emphasize natural, sustainable approaches to long-term health improvement.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}