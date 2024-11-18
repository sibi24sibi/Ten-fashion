import React, { useState } from 'react';
import axios from 'axios';
import ContactForm from '../Components/ContactForm';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    Subject: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to:`, value);
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    try {
      const response = await axios.post('http://localhost:8000/contactForm', formData);
      console.log('Response from server:', response.data);
      setResponseMessage(response.data.message);
      setTimeout(() => {

        setResponseMessage("")
      }, 2000)
      setFormData({
        fullName: '',
        email: '',
        Subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error during form submission:', error); // Debug log
      setResponseMessage(
        error.response?.data?.error || 'Failed to submit the form. Please try again.'
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
      <ContactForm />
    </div>
  );
};

export default ContactPage;
