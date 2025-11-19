import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function NewsInsights() {
  const newsItems = [
    {
      id: 1,
      title: "Holistic Approach to Diabetes Management",
      excerpt: "Discover how our integrated approach combines medical expertise with lifestyle coaching to achieve sustainable health outcomes.",
      image: "https://res.cloudinary.com/dspsj31q8/image/upload/v1757426757/7S5C7534_vywjte.jpg",
      date: "November 2024",
      category: "Health Tips"
    },
    {
      id: 2,
      title: "Mental Wellness in the Workplace",
      excerpt: "Learn about our corporate wellness programs designed to support employee mental health and productivity.",
      image: "https://res.cloudinary.com/dspsj31q8/image/upload/v1720281466/pexels-rdne-8052222_mpf3zl.jpg",
      date: "October 2024",
      category: "Corporate Wellness"
    },
    {
      id: 3,
      title: "Nutrition Coaching Success Stories",
      excerpt: "Real stories from clients who transformed their health through personalized nutrition and diet support.",
      image: "https://res.cloudinary.com/dspsj31q8/image/upload/v1757438254/0e57afbd81a15f58a7c383f68f790cd3_xf7lwf.webp",
      date: "September 2024",
      category: "Success Stories"
    },
    {
      id: 4,
      title: "Adolescent Health Awareness",
      excerpt: "Important insights on supporting teenagers through their developmental journey with compassion and expertise.",
      image: "https://res.cloudinary.com/dspsj31q8/image/upload/v1757800875/Screenshot_2025-09-14_at_00.53.57_j6oyam.png",
      date: "August 2024",
      category: "Community Health"
    },
    {
      id: 5,
      title: "The Power of Preventive Care",
      excerpt: "Understanding how early intervention and lifestyle changes can prevent chronic conditions.",
      image: "https://res.cloudinary.com/dspsj31q8/image/upload/v1757426817/7S5C7539_i5ac4d.jpg",
      date: "July 2024",
      category: "Preventive Care"
    },
    {
      id: 6,
      title: "Building Resilience in Communities",
      excerpt: "Our community programs focus on building mental and emotional resilience across different age groups.",
      image: "https://res.cloudinary.com/dspsj31q8/image/upload/v1757426802/7S5C7538_svsulc.jpg",
      date: "June 2024",
      category: "Community Programs"
    }
  ];

  return (
    <main className="container">
      <Nav />
      <section className="news-hero fade-in">
        <div className="hero-content">
          <h1>News & Insights</h1>
          <p>Stay informed with the latest developments in holistic healthcare, wellness tips, and community health initiatives.</p>
        </div>
      </section>

      <section className="news-grid fade-in">
        <div className="news-container">
          {newsItems.map(item => (
            <article key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="news-category">{item.category}</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">{item.date}</span>
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="news-read-more">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter-signup fade-in">
        <div className="newsletter-container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest health insights and wellness tips.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}