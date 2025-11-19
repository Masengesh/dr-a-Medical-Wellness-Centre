import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  return (
    <main className="container">
      <Nav />
      <section id="vision" className="fade-in">
         <h2>At Dr A Medical Wellness Centre, we believe health is balance in mind, body, and environment.</h2>
        <div className="vision-mission">
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>To lead in affordable, holistic wellness, serving as a beacon of hope.</p>
          </div>
          <div className="vision-card">
            <h3>Our Mission</h3>
            <p>To provide compassionate, evidence-based care through nutrition, mental wellness and lifestyle medicine.</p>
          </div>
        </div>
         <div className="gallery-grid">
          <iframe src="./wellness-note.html" width="100%" height="600" style={{border: 'none'}} title="Wellness Note"></iframe>
        </div>
      </section>
      <Footer />
    </main>
  );
}