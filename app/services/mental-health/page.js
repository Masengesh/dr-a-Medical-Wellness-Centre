import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function MentalHealth() {
  return (
    <main className="container">
      <Nav />
      <section>
        <h1>Mental Health Support</h1>
        <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1713361437/samples/cup-on-a-table.jpg" alt="Mental Health Support" style={{width:'100%', maxWidth:'500px', margin:'2rem auto', display:'block'}} />
        <p>We offer therapy, resilience coaching, and innovative tools to support your mental well-being. Our approach integrates psychological support with holistic wellness practices to foster lasting mental health.</p>
        <p>Our services include:</p>
        <ul style={{textAlign:'left', maxWidth:'600px', margin:'0 auto'}}>
          <li>Individual and group therapy sessions</li>
          <li>Resilience building workshops</li>
          <li>Stress management techniques</li>
          <li>Mindfulness and meditation guidance</li>
          <li>Crisis intervention and support</li>
        </ul>
        <a href="/booking?service=Mental%20Health%20Support" className="btn">Book an Appointment</a>
      </section>
      <Footer />
    </main>
  );
}