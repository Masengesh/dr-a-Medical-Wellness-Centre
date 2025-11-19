export default function Footer() {
  return (
    <footer className="footer">
      <div className="correction">
        <div className="logo">
          <img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757425464/logo_dr_A_pgmnch.png" alt="logo" />
        </div>
        <div className="nav">
          <ul className="nav-links" id="nav-links">
            <li><a href="/about">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/gallery">News & Insights</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <p><strong>Phone:</strong> 0700 162 402 | 0770 868 508</p>
          <p><strong>Email:</strong> admin@dramedicalwellness.com</p>
          <p><strong>Address:</strong> KIRA - KASANGANTI ROAD, <br />OPPOSITE THE NEW STABEX 2, @ROMU GARDENS - KIRA</p>
        </div>
        <div className="social-icons">
          <h4>CONNECT WITH US </h4>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/dramedicalwellnesscenter?igsh=cWl0MmE2dXRzY3Zi"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="https://www.tiktok.com/@dramedicalwellnesscenter?_t=ZM-8zaVrSqQXnc&_r=1"><i className="fab fa-tiktok"></i></a>
          <div className="new">
            <h4>NEWSLETTER</h4>
            <form action="#" method="post">
              <input type="email" name="email" placeholder="Enter your email" required />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <p>"Your Wellness First"</p>
      <div className="line"></div>
      <div className="pragraphy">
        <p>© 2025 Dr A Medical Wellness Centre. All Rights Reserved.</p>
      </div>
    </footer>
  );
}