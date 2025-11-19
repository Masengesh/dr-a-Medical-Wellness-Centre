import Nav from './components/Nav';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <main className="container">
      <Nav />
      <section className="slide">
        <h1>Dr A Medical Wellness Centre</h1>
        <p className="tagline">Caring For You Beyond Medicine</p>
        <p className="phones">Call us: 0700 162 402 | 0770 868 508</p>
        <a href="/booking" className="btn">Book an Appointment</a>
      </section>
      <section>
        <div className="line"></div>
        <div className="need">
          <h1>Healing from the Root</h1>
          <p>We don't just manage symptoms. We untie the knots behind illness; emotional stress, poor nutrition, trauma,
            or lifestyle imbalance and empower individuals, families, and organizations to heal from the root. Combining
            medical science, psychology, social insight, and lifestyle coaching, our holistic, affordable, and
            people-centered
            model is transforming how Uganda heals.</p>
        </div>
        <div className="linee"></div>
        <div className="treat">
          <div className="each">
            <h1>Core Values</h1>
            <p>• Compassion: Treating each client with dignity, empathy, and respect.</p>
            <p>• Empowerment: Equipping individuals and families with tools to take charge of their health.</p>
            <p>• Sustainability: Designing care for long-term impact, not quick fixes.</p>
            <p>• Integrity: Commitment to ethical, transparent, and professional service.</p>
            <p>• Holistic Care: Treating the whole person, not just the condition.</p>
            <p>• Innovation: Applying creative, practical solutions to everyday health challenges.</p>
            <h1>Our Philosophy: "Untie the Knot – Heal from the Root"</h1>
            <p>Behind every illness is a story; a buildup of stress, poor habits, emotional strain, or trauma. True
              healing starts
              when we stop treating symptoms in isolation and begin understanding the system around the person.
              Every chronic condition is a knot, and we patiently help untie it by:</p>
            <p>1. Understanding the client's personal health journey</p>
            <p>2. Exploring mental, emotional, and lifestyle contributors.</p>
            <p>3. Reframing health through empathy, science, and coaching.</p>
          </div>
          <div className="pic">
            <img
              src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757800875/Screenshot_2025-09-14_at_00.53.57_j6oyam.png"
              alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="colabo">
          <h1>Why Collaborate with Dr A. Medical Wellness Centre?</h1>
          <div className="title">
            <div className="one">
              <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757426817/7S5C7539_i5ac4d.jpg" alt="" />
              <div className="writtern">
                <p>• We simplify science into practical, local actions tailored for African realities.</p>
                <p> • We bridge gaps between medicine, emotions, and social well-being.</p>
              </div>
            </div>
            <div className="one">
              <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757426757/7S5C7534_vywjte.jpg" alt="" />
              <div className="writtern">
                <p>• Our approach delivers visible, measurable changes in health behaviour.</p>
                <p>• We are experienced with government and institutional partnerships.</p>
              </div>
            </div>
            <div className="one">
              <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757426802/7S5C7538_svsulc.jpg" alt="" />
              <div className="writtern">
                <p>• Our services are culturally sensitive, affordable, and scalable.</p>
                <p> • We provide ongoing support and flexible delivery models (onsite & virtual).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="fade-in">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">
            <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757426794/7S5C7537_wvpimo.jpg" alt="Diabetes" />
            <h3>Diabetes & Hypertension</h3>
            <p>Personalized lifestyle changes and wellness coaching.</p>
            <a href="/services/diabetes-hypertension" className="btn">Learn More</a>
          </div>
          <div className="card">
            <img
              src="https://res.cloudinary.com/dspsj31q8/image/upload/v1720281467/pexels-rethaferguson-3059748_xcrylp.jpg"
              alt="Nutrition" />
            <h3>Nutrition & Diet Support</h3>
            <p>Customized, affordable nutrition coaching.</p>
            <a href="/services/nutrition-diet" className="btn">Learn More</a>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757425999/7S5C7530_zc98uw.jpg" alt="Adolescent" />
            <h3>Adolescent Health</h3>
            <p>Programs addressing emotional development & peer pressure.</p>
            <a href="/services/adolescent-health" className="btn">Learn More</a>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1713361437/samples/cup-on-a-table.jpg"
              alt="Mental" />
            <h3>Mental Health Support</h3>
            <p>Therapy, resilience coaching, and innovative tools.</p>
            <a href="/services/mental-health" className="btn">Learn More</a>
          </div>
        </div>
      </section>

      <section id="gallery" className="fade-in">
        <h2>Wellness Notes</h2>
        <div className="gallery-grid">
          <iframe src="/wellness-note.html" width="100%" height="600" style={{border: 'none'}} title="Wellness Note"></iframe>
        </div>
      </section>

      <Testimonials />
      <Footer />
      <script dangerouslySetInnerHTML={{
        __html: `
          const faders = document.querySelectorAll('.fade-in');
          const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('appear');
              observer.unobserve(entry.target);
            });
          }, { threshold: 0.2 });
          faders.forEach(fader => appearOnScroll.observe(fader));

          // Smooth scroll
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
              });
            });
          });

          // Modal logic
          const modals = document.querySelectorAll(".modal");
          const openBtns = document.querySelectorAll(".open-modal");
          const closeBtns = document.querySelectorAll(".modal .close");

          openBtns.forEach(btn => {
            btn.addEventListener("click", () => {
              const modalId = btn.getAttribute("data-modal");
              document.getElementById(modalId).style.display = "block";
            });
          });

          closeBtns.forEach(btn => {
            btn.addEventListener("click", () => {
              btn.closest(".modal").style.display = "none";
            });
          });

          window.addEventListener("click", e => {
            modals.forEach(modal => {
              if (e.target === modal) modal.style.display = "none";
            });
          });

          const toggleBtn = document.getElementById("menu-toggle");
          const navLinks = document.getElementById("nav-links");
        
          toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            toggleBtn.innerHTML = navLinks.classList.contains("show")
              ? '<i class="fas fa-times"></i>'   // X when open
              : '<i class="fas fa-bars"></i>';  // ☰ when closed
          });
        
          // Dropdown toggle for mobile
          const dropdowns = document.querySelectorAll('.dropdown > a');
          dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', (e) => {
              if (window.innerWidth <= 768) {
                e.preventDefault();
                const content = dropdown.nextElementSibling;
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
              }
            });
          });
        `
      }} />
    </main>
  );
}