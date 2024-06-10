"use client"

import { Heading } from "@chakra-ui/react"
import { useState } from "react"



const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const [errors, setErrors] = useState({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        // Reset error state when user types
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: false,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check for empty fields
        const newErrors = {};
        Object.entries(formData).forEach(([key, value]) => {
          if (!value.trim()) {
            newErrors[key] = true;
          }
        });
    
        // If there are errors, set state and return
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
    
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Email sent successfully!');
          } else {
            alert('Failed to send email. Please try again later.');
          }
        } catch (error) {
          console.error('Error sending email:', error);
          alert('An error occurred while sending email. Please try again later.');
        }
      };
    
    return (
        <div className="bg-white/30 p-6">
            <Heading className="bold-32 flexCenter">Contact Us</Heading>  

                   
            <form onSubmit={handleSubmit}>
              <div className="m-3" >
                  <label htmlFor="name" className="mr-1 w-10">Name</label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`p-1 ml-1 outline-none rounded-sm bg-white/90 w-60 ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500">Required*</p>}
              </div>

              <div className="m-3"> 
                  <label htmlFor="email" className="mr-1 w-10">Email</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`p-1 ml-1 outline-none rounded-sm bg-white/90 w-60 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500">Required*</p>}
              </div>

              <div className="m-3"> 
                  <label htmlFor="subject" className="mr-1 w-10">Subject</label>
                  <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`p-1 ml-1 outline-none rounded-sm bg-white/90 w-60 ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && <p className="text-red-500">Required*</p>}
              </div>

              <div className="m-3"> 
                  <label htmlFor="message" className="mr-1 w-10">Message</label>
                  <textarea                      
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`p-1 ml-1 outline-none rounded-sm bg-white/90 w-60 ${errors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500">Required*</p>}
              </div> 

              <button
                type="submit"              
                className="bg-blue-70 p-1 mt-4 mx-8 text-white rounde-sm hover:bg-black/80 justify-center text-center flexCenter mb-4"
              >Submit
              </button>  
          
            </form>

                         

        
        </div>
    )
}

export default ContactForm