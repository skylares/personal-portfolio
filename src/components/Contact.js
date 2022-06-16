import React, {useState} from 'react';

export default function Contact() {

  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      message: "",
    }
  );

  const handleFormInput = ({target}) => setFormData(prevFormData => (
    {
      ...prevFormData,
      [target.name]: target.value
    }
  )); 

  const handleFormSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({"form-name": "contact--form", ...formData})
    })
      .then(alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return(
    <section className="contact" id="contact">
      <h1>Contact</h1>
      <form name='contact--form' onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input name='name' type='text' value={formData.name} onChange={handleFormInput}></input>
        </label>
        <label>
          Email:
          <input name='email' type='email' value={formData.email} onChange={handleFormInput}></input>
        </label>
        <label>
          Message:
          <textarea name='message' value={formData.message} onChange={handleFormInput}></textarea>
        </label>
        <button>submit</button>
      </form>
    </section>
  );
}