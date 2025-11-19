import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="menu-toggle" id="menu-toggle">
          <i className="fas fa-bars"></i>
        </button>
        <ul className="nav-links" id="nav-links">
          <li><Link href="/" className="logo"><img src="https://res.cloudinary.com/dspsj31q8/image/upload/v1757425464/logo_dr_A_pgmnch.png" alt="logo" /></Link></li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li className="dropdown">
            <Link href="/services">Services</Link>
            <ul className="dropdown-content">
              <li><Link href="/services/diabetes-hypertension">Diabetes & Hypertension</Link></li>
              <li><Link href="/services/nutrition-diet">Nutrition & Diet Support</Link></li>
              <li><Link href="/services/adolescent-health">Adolescent Health</Link></li>
              <li><Link href="/services/mental-health">Mental Health Support</Link></li>
            </ul>
          </li>
          <li><Link href="/team">Our Team</Link></li>
          <li><Link href="/gallery">News & Insights</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/booking" className="btn small">Book Now</Link></li>
        </ul>
      </div>
    </nav>
  );
}