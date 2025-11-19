import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Team() {
  return (
    <main className="container">
      <Nav />
      <section id="team" className="fade-in">
        <h2>Meet the Founders</h2>
        <div className="grid">
          {/* Dr Agnes */}
          <div className="card">
            <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757800875/Screenshot_2025-09-14_at_00.53.57_j6oyam.png"
              alt="Dr Agnes" />
            <h3>Dr. Agnes Barbara Kobusingye</h3>
            <p>Founder & Medical Director with 22+ years experience.</p>
            <button className="btn open-modal" data-modal="modalAgnes">Visit Profile</button>
          </div>

          {/* Modal for Dr Agnes */}
          <div id="modalAgnes" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Dr. Agnes Barbara Kobusingye</h2>
              <p>Founder & Medical Director with over 22 years of medical and wellness experience.
                Specializes in holistic care, lifestyle medicine, diabetes, and hypertension.</p>
              <p><strong>Expertise:</strong> Internal Medicine, Diabetes Management, Hypertension, Lifestyle
                Coaching
              </p>
              <a href="/booking?doctor=Dr.%20Agnes%20Barbara%20Kobusingye" className="btn">Book Appointment</a>
            </div>
          </div>

          {/* Lydia */}
          <div className="card">
            <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757426858/7S5C7545_vaw1hk.jpg"
              alt="Lydia" />
            <h3>Lydia Murungi Tomusange</h3>
            <p>Co-Founder & Director of Mental Wellness with 20+ years experience.</p>
            <button className="btn open-modal" data-modal="modalLydia">Visit Profile</button>
          </div>

          {/* Modal for Lydia */}
          <div id="modalLydia" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Lydia Murungi Tomusange</h2>
              <p>Co-Founder & Director of Mental Wellness with over 20 years of experience.
                Focused on resilience, therapy, and mental health programs for individuals and families.</p>
              <p><strong>Expertise:</strong> Mental Health, Psychosocial Support, Resilience Coaching</p>
              <a href="/booking?doctor=Lydia%20Murungi%20Tomusange" className="btn">Book Appointment</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}