import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function DiabetesHypertension() {
  return (
    <main className="container">
      <Nav />
      <section>
        <h1>Diabetes & Hypertension Management</h1>
        <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757426794/7S5C7537_wvpimo.jpg" alt="Diabetes Management" style={{width:'100%', maxWidth:'500px', margin:'2rem auto', display:'block'}} />
        <p>At Dr A Medical Wellness Centre, we provide comprehensive management for diabetes and hypertension through personalized lifestyle changes and wellness coaching. Our holistic approach combines medical expertise with nutrition, exercise, and stress management to help you achieve optimal health.</p>
        <p>Our services include:</p>
        <ul style={{textAlign:'left', maxWidth:'600px', margin:'0 auto'}}>
          <li>Blood sugar and blood pressure monitoring</li>
          <li>Customized diet plans</li>
          <li>Exercise regimens tailored to your needs</li>
          <li>Stress reduction techniques</li>
          <li>Ongoing support and education</li>
        </ul>
        <a href="/booking?service=Diabetes%20%26%20Hypertension%20Management" className="btn">Book an Appointment</a>
      </section>
      <Footer />
    </main>
  );
}