import React, { useState } from 'react';
import axios from 'axios';

import StandardLayout from '../layouts/standard';

const validateName = name => {
  if (name.trim().length === 0) {
    return 'Name cannot be empty';
  }
  return null;
};

const validateEmail = email => {
  if (email.trim().length === 0) {
    return 'Email cannot be empty';
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return 'Email is invalid';
  }
  return null;
};

const validateMessage = message => {
  if (message.trim().length === 0) {
    return 'Message cannot be empty';
  }
  return null;
};

const emptyField = { value: '', error: null };

const Form = () => {
  const [name, setName] = useState(emptyField);
  const [email, setEmail] = useState(emptyField);
  const [message, setMessage] = useState(emptyField);

  const handleSubmit = async e => {
    e.preventDefault();
    // check if there are errors
    if (name.error || email.error || message.error) {
      alert('Fix the errors show in the form and retry');
      return;
    }
    try {
      // make the request
      await axios.post('/api/contact', {
        name: name.value,
        email: email.value,
        message: message.value,
      });
      setName(emptyField);
      setEmail(emptyField);
      setMessage(emptyField);
      alert('Submission Successful - I will reach out to you in a day or so');
    } catch (error) {
      console.log(error.response);
      // handle errors
      if (error.response?.status === 400) {
        alert('Submission Failed - Make sure you have entered valid data');
      } else if (error.response?.status === 500) {
        alert('Submission Failed - Sorry we messed up');
      }
    }
  };

  const handleNameChange = e => {
    setName({
      value: e.target.value,
      error: validateName(e.target.value),
    });
  };

  const handleEmailChange = e => {
    setEmail({
      value: e.target.value,
      error: validateEmail(e.target.value),
    });
  };

  const handleMessageChange = e => {
    setMessage({
      value: e.target.value,
      error: validateMessage(e.target.value),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={name.value}
          onChange={handleNameChange}
        />
        {name.error && <p>{name.error}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          email="email"
          placeholder="johndoe@example.com"
          value={email.value}
          onChange={handleEmailChange}
        />
        {email.error && <p>{email.error}</p>}
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="I would like to hire/collaborate..."
          value={message.value}
          onChange={handleMessageChange}
        />
        {message.error && <p>{message.error}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const ContactPage = () => {
  return (
    <StandardLayout>
      <header className="w-constraint">
        <h1 className="text-4xl font-bold mt-8">Contact Me</h1>
        <h2 className="text-lg mt-4">I usually respond in 1 day ⏳</h2>
      </header>
      <main className="w-constraint">
        <Form />
      </main>
    </StandardLayout>
  );
};

export default ContactPage;
