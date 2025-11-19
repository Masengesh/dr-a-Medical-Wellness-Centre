import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function NutritionDiet() {
  return (
    <main className="container">
      <Nav />
      <section>
        <h1>Nutrition & Diet Support</h1>
        <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1720281467/pexels-rethaferguson-3059748_xcrylp.jpg" alt="Nutrition Support" style={{width:'100%', maxWidth:'500px', margin:'2rem auto', display:'block'}} />
        <p>Our customized, affordable nutrition coaching helps you achieve your health goals through balanced eating and sustainable lifestyle changes. We focus on local, accessible foods to make healthy eating practical and enjoyable.</p>
        <p>Our services include:</p>
        <ul style={{textAlign:'left', maxWidth:'600px', margin:'0 auto'}}>
          <li>Personalized meal planning</li>
          <li>Nutritional assessments</li>
          <li>Weight management guidance</li>
          <li>Educational workshops on healthy eating</li>
          <li>Ongoing coaching and support</li>
        </ul>
        <a href="/booking?service=Nutrition%20%26%20Diet%20Support" className="btn">Book an Appointment</a>
      </section>
      <Footer />
    </main>
  );
}