import React, { useState, useEffect } from "react";

const BookingForm = ({ doctors }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
    // Reset form data after submission
    setFormData({
      name: "",
      phoneNumber: "",
      age: "",
      city: "",
      company: "",
      chiefComplaints: "",
      previousExperience: "",
    });
  };

  const filteredDoctors = formData.city
    ? doctors.filter((doctor) => doctor.city === formData.city)
    : doctors;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramCity = urlParams.get("city");
    if (paramCity) {
      setFormData({ ...formData, city: paramCity });
    }
  }, [formData]);

  const handleClosePopup = () => {
    setSubmittedData(null);
  };

  return (
    <section className="booking-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="chiefComplaints">Chief Complaints:</label>
          <textarea
            id="chiefComplaints"
            name="chiefComplaints"
            value={formData.chiefComplaints}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        {formData.age >= 40 && (
          <div className="form-group">
            <label htmlFor="previousExperience">
              Previous Experience with Physiotherapy:
            </label>
            <input
              type="text"
              id="previousExperience"
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleInputChange}
            />
          </div>
        )}

        <button type="submit">Book Consultation</button>
      </form>

      {/* Display submitted data in a popup */}
      {submittedData && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              Close
            </span>
            <h2>Submitted Details</h2>
            {/* Render submitted details here */}
            <p>Name: {submittedData.name}</p>
            <p>Phone Number: {submittedData.phoneNumber}</p>
            <p>Age: {submittedData.age}</p>
            <p>City: {submittedData.city}</p>
            <p>Chief Complaints: {submittedData.chiefComplaints}</p>
            <p>Previous Experience: {submittedData.previousExperience}</p>
          </div>
        </div>
      )}

      {/* Display best available doctors */}
      <div>
        <p>Best Available Doctors:</p>
        <ul>
          {filteredDoctors.map((doctor) => (
            <li key={doctor.id}>
              {doctor.name} - {doctor.expertise}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BookingForm;
