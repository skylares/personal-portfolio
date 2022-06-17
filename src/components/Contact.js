import React, {useEffect, useState} from 'react';

export default function Contact() {

  const [formData, setFormData] = useState(
    {
      name: "", 
      email: "", 
      message: "",
    }
  );
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleFormInput = ({target}) => setFormData(prevFormData => (
    {
      ...prevFormData,
      [target.name]: target.value
    }
  )); 

  const handleFormSubmit = e => {
    setFormErrors(validate(formData));
    setFormSubmitted(true);
    e.preventDefault();
  };

  const validate = formData => {
    let errors = {};
    if(!formData.name) errors.name = "Name required";
    if(!formData.email) errors.email = "Email required";
    if(!formData.message) errors.message = "Message required";

    return errors;
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && formSubmitted) {

      fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: encode({"form-name": "contact--form", ...formData})
      })
        .then(() => alert("Submitted succesfully, thank you!"))
        .then(() => setFormSubmitted(false))
        .then(() => setFormData({name: "", email: "", message: ""}))
        .catch(error => alert(error));
    }
  }, [formErrors, formData, formSubmitted]);

  return(
    <section className="contact" id="contact">
      <h1 className='contact--title'>GET IN TOUCH</h1>
      <p className='contact--subtitle'>Feel free to contact me by <a>email</a> or with the form below.</p>
      <form className='contact--form' name='contact--form' onSubmit={handleFormSubmit}>
        <div>
        <input 
          className='contact--form-input -name'
          placeholder='Your name'
          name='name' 
          type='text' 
          value={formData.name} 
          onChange={handleFormInput}
        ></input>
        <input 
          className='contact--form-input -email'
          placeholder='Your email'
          name='email' 
          type='email' 
          value={formData.email} 
          onChange={handleFormInput}
        ></input>
        </div>
        <textarea 
          className='contact--form-input -message'
          placeholder='Your message'
          name='message' 
          value={formData.message} 
          onChange={handleFormInput}
        ></textarea>

        <button className='contact--form-button'>SEND MESSAGE</button>
      </form>
    </section>
  );
}