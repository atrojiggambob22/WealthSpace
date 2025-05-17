import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    estate: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (you can send to backend or email API here)
    console.log("Form submitted:", formData);

    // Optional: reset form
    setFormData({
      fullName: "",
      email: "",
      estate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="fullName">Full Name:</label> */}
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
        style={{width:'20%',marginRight:'50px',padding:' 20px',borderRadius:
          '20px'
        }}

        placeholder="Full Namw"
      />

      {/* <label htmlFor="email">Email Address:</label> */}
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{width:'20%',padding:' 20px',borderRadius:
          '10px'
        }}
        placeholder="Email"
      />

      <div>
        <select
         style={{padding:'30px'}}
          id="estate"
          name="estate"
          value={formData.estate}
          onChange={handleChange}
          required
         
        >
          <option value="">Real Estate-</option>
          <option value="Property">Property</option>
          <option value="Duplex">Duplex</option>
        </select>
      </div>


      <div>
        <textarea name="Message" id=""></textarea>
      </div>
      <div className="buttons" style={{ textAlign: "center" }}>
        <button type="submit" style={{ padding: "10px 140px" }}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
