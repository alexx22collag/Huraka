import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  añadir la lógica para enviar los datos del formulario
    console.log(formData);
    // Simulamos  respuesta exitosa del servidor
    setAlert({ message: '¡Mensaje enviado con éxito!', type: 'success' });
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          
        </div>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" id="name" type="text" placeholder="Your Name *" required onChange={handleChange} />
              </div>
              <div className="form-group">
                <input className="form-control" id="email" type="email" placeholder="Your Email *" required onChange={handleChange} />
              </div>
              <div className="form-group mb-md-0">
                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required onChange={handleChange} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <textarea className="form-control" id="message" placeholder="Your Message *" required onChange={handleChange}></textarea>
              </div>
            </div>
          </div>
          <div id="liveAlertPlaceholder">
            <div className="text-center">
              <button className="btn btn-primary btn-xl text-uppercase" id="liveAlertBtn" type="submit">Send Message</button>
            </div>
          </div>
        </form>
        {alert.message && (
          <div className={`alert alert-${alert.type} alert-dismissible`} role="alert">
            <div>{alert.message}</div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlert({ message: '', type: '' })}></button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
