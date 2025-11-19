export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah K.",
      image: "https://via.placeholder.com/100x100?text=SK",
      quote: "Dr. A's wellness center transformed my approach to health. Their holistic care helped me manage my hypertension through lifestyle changes, and I feel empowered and healthier than ever."
    },
    {
      id: 2,
      name: "John M.",
      image: "https://via.placeholder.com/100x100?text=JM",
      quote: "The nutrition coaching was life-changing. I lost weight sustainably and learned to eat for my body's needs. The team's support made all the difference."
    },
    {
      id: 3,
      name: "Grace T.",
      image: "https://via.placeholder.com/100x100?text=GT",
      quote: "As a teenager dealing with stress, the adolescent health programs provided me with tools to build resilience. I'm grateful for the compassionate guidance."
    },
    {
      id: 4,
      name: "Michael R.",
      image: "https://via.placeholder.com/100x100?text=MR",
      quote: "Mental health support here is exceptional. They addressed the root causes of my anxiety, combining therapy with practical lifestyle advice. Highly recommend."
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}