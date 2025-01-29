import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Reset the error message for the specific field when the user changes the value
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Response:', response.data);
      setLoading(false);

      // Show success toast notification
      console.log("Sending success toast...");
      toast.success('Your message has been sent successfully!', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#4CAF50',
          color: 'white',
          padding: '12px',
          borderRadius: '5px',
        },
      });

      // Reset form data
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);

      // Show error toast notification
      console.log("Sending error toast...");
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;

        // Set the errors from the backend validation
        if (errorMessage.includes('All fields are required')) {
          setErrors({
            name: 'Name is required.',
            email: 'Email is required.',
            message: 'Message is required.'
          });
        } else if (errorMessage.includes('Name can only contain letters and spaces')) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: 'Name can only contain letters and spaces.'
          }));
        } else if (errorMessage.includes('Invalid email format')) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: 'Invalid email format.'
          }));
        } else if (errorMessage.includes('Message must be at least 10 characters long')) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            message: 'Message must be at least 10 characters long.'
          }));
        } else {
          toast.error('There was an error sending your message. Please try again later.', {
            duration: 3000,
            position: 'top-center',
            style: {
              background: '#FF4F4F',
              color: 'white',
              padding: '12px',
              borderRadius: '5px',
            },
          });
        }
      } else {
        toast.error('There was an error sending your message. Please try again later.', {
          duration: 3000,
          position: 'top-center',
          style: {
            background: '#FF4F4F',
            color: 'white',
            padding: '12px',
            borderRadius: '5px',
          },
        });
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <input
          type="email"
          placeholder="Your Email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <textarea
          placeholder="Your Message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="input-field"
        />
        {errors.message && <p className="error-message">{errors.message}</p>}

        <button type="submit" className="cta-btn" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* React Hot Toast container */}
      <Toaster />
    </section>
  );
};

export default Contact;
