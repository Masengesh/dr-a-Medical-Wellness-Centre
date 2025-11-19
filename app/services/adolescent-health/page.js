import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function AdolescentHealth() {
  return (
    <main className="container">
      <Nav />
      <section>
        <h1>Adolescent Health</h1>
        <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757425999/7S5C7530_zc98uw.jpg" alt="Adolescent Health" style={{width:'100%', maxWidth:'500px', margin:'2rem auto', display:'block'}} />
        <p>Our programs for adolescent health address emotional development, peer pressure, and the unique challenges faced during this critical life stage. We provide supportive guidance to help young people navigate their health journey with confidence.</p>
        <p>Our services include:</p>
        <ul style={{textAlign:'left', maxWidth:'600px', margin:'0 auto'}}>
          <li>Emotional and mental health support</li>
          <li>Puberty and body changes education</li>
          <li>Peer pressure management strategies</li>
          <li>Healthy lifestyle habits formation</li>
          <li>Family involvement and counseling</li>
        </ul>
        <a href="/booking?service=Adolescent%20Health" className="btn">Book an Appointment</a>
      </section>
      <Footer />
    </main>
  );
}