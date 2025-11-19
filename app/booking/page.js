'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function BookingContent() {
  const searchParams = useSearchParams();
  const doctorName = searchParams.get('doctor');
  const serviceParam = searchParams.get('service');

  const [selectedDoctor, setSelectedDoctor] = useState(doctorName || '');
  const [selectedService, setSelectedService] = useState(serviceParam || '');

  const doctors = [
    "Dr. Agnes Barbara Kobusingye",
    "Lydia Murungi Tomusange"
  ];

  const services = {
    "Dr. Agnes Barbara Kobusingye": [
      "General Consultation",
      "Diabetes & Hypertension Management",
      "Nutrition & Lifestyle Coaching"
    ],
    "Lydia Murungi Tomusange": [
      "Mental Wellness Therapy",
      "Resilience Coaching",
      "Psychosocial Support"
    ]
  };

  const availableServices = selectedDoctor ? services[selectedDoctor] || [] : [];

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
    setSelectedService(''); // Reset service when doctor changes
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <main className="container">
      <Nav />
      <section className="booking-section">
        <div className="booking-container">
          <h1>Book an Appointment</h1>
          <p className="booking-subtitle">Schedule your wellness consultation with our expert team</p>

          <form className="booking-form" id="appointmentForm">
            <div className="form-group">
              <label htmlFor="doctor">Select Doctor</label>
              <select
                id="doctor"
                name="doctor"
                value={selectedDoctor}
                onChange={handleDoctorChange}
                required
              >
                <option value="">Choose a doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor} value={doctor}>{doctor}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="service">Select Service</label>
              <select
                id="service"
                name="service"
                value={selectedService}
                onChange={handleServiceChange}
                required
                disabled={!selectedDoctor}
              >
                <option value="">Select a service</option>
                {availableServices.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input type="date" id="date" name="date" required />
              </div>

              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <input type="time" id="time" name="time" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Notes (Optional)</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Any specific concerns or questions..."
              ></textarea>
            </div>

            <button type="submit" className="btn booking-submit">Book Appointment</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default function Booking() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}