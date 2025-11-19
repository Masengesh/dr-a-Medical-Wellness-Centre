import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  return (
    <main className="container">
      <Nav />
      <section id="who" className="fade-in">
        <h2>Who We Are</h2>
        <p>A New Era of Wellness Begins Here...</p>
        <p>At Dr A Medical Wellness Centre, we believe health is balance in mind, body, and environment.</p>
        <h3>Meet Dr. Agnes Barbara Kobusingye</h3>
        <p>Dr. Agnes Barbara Kobusingye is the Founder & Medical Director of Dr A Medical Wellness Centre. With over 22 years of experience in medicine and wellness, she specializes in holistic care, lifestyle medicine, diabetes, and hypertension. Dr. Agnes is passionate about transforming healthcare in Uganda through affordable, people-centered approaches that address the root causes of illness.</p>
        <h3>Our Philosophy: "Untie the Knot – Heal from the Root"</h3>
        <p>Behind every illness is a story; a buildup of stress, poor habits, emotional strain, or trauma. True healing starts when we stop treating symptoms in isolation and begin understanding the system around the person. Every chronic condition is a knot, and we patiently help untie it by understanding the client's personal health journey, exploring mental, emotional, and lifestyle contributors, and reframing health through empathy, science, and coaching.</p>
      </section>

      <section id="vision" className="fade-in">
        <h2>Vision & Mission</h2>
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
      </section>
      <Footer />
    </main>
  );
}