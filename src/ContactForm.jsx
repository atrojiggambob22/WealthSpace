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
          '10px', border:"2px solid gray"
        }}

        placeholder="Full Name"
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
          '10px', border:"2px solid gray"
        }}
        placeholder="Email"
      />

      <div style={{padding:'15px', width:'283px',margin:"14px 0",borderRadius:'19px', position:"relative", left:'-12px'}}>
        <select
         style={{border:'2px solid gray',width:"245%", height:'55px', }}
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
        <textarea name="Message" id="" style={{borderRadius:'10px',border:'2px solid gray', width:'48.5%', height:'20vh', padding:"10px"}} placeholder="Your Message"></textarea>
      </div>
      <div className="buttons" style={{ textAlign: "center" }}>
        <button className="formsub33" type="submit" style={{ padding: "20px 140px" }}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
