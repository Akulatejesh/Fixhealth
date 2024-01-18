
import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
    },
    {
      id: 2,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Jane Smith",
    },
  ];

  return (
    <section className="testimonials">
      <h2 style={{color:'white'}}>What Our Patients Say</h2>
      {testimonialsData.map((testimonial) => (
        <div className="testimonial" key={testimonial.id}>
          <p>{testimonial.quote}</p>
          <span>- {testimonial.author}</span>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
