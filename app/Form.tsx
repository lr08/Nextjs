"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function EditableForm() {

  const router = useRouter();
  // Preloaded data simulating fetched data
  const preloadedData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  // State to hold form data
  const [formData, setFormData] = useState(preloadedData);

  // Handle form data change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    router.push(`/account`);
    // Here you would usually send the formData to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditableForm;
