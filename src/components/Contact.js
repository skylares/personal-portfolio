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
  const [formFinished, setFormFinished] = useState(false);

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
        .then(() => setFormSubmitted(false))
        .then(() => setFormFinished(true))
        .then(() => setFormData({name: "", email: "", message: ""}))
        .catch(error => alert(error));
    }
  }, [formErrors, formData, formSubmitted]);

  return(
    <section className="contact" id="contact">
      <h1 className='contact--title'>GET IN TOUCH</h1>
      <p className='contact--subtitle'>Feel free to contact me by <a href='mailto: skylarkesselring@gmail.com' className='contact--subtitle-email'>email</a> or with the form below.</p>

      {formFinished 
      ?  
        <div className='contact--form'>succesfully submitted, thank you!</div>  
      
      :
        <form className='contact--form' name='contact--form' onSubmit={handleFormSubmit}>
          <div className='contact--form-top'>
            <div>
              {formErrors?.name ? <p className='error- -name'>Name required!</p> : <p className='error- -name'></p>}
              <input 
                className='contact--form-input -name'
                placeholder={'Your name'}
                name='name' 
                type='text' 
                value={formData.name} 
                onChange={handleFormInput}
              ></input>
            </div>
            <div>
              {formErrors?.email ? <p className='error- -email'>Email required!</p> : <p className='error- -email'></p>}
              <input 
                className='contact--form-input -email'
                placeholder='Your email'
                name='email' 
                type='email' 
                value={formData.email} 
                onChange={handleFormInput}
              ></input>
            </div>
          </div>
          <div>
            {formErrors?.message ? <p className='error- -message'>Message required!</p> : <p className='error- -message'></p>}
            <textarea 
              className='contact--form-input -message'
              placeholder='Your message'
              name='message' 
              value={formData.message} 
              onChange={handleFormInput}
            ></textarea>
          </div>
          <button className='contact--form-button'>SEND MESSAGE</button>
        </form>
      }
    </section>
  );
}