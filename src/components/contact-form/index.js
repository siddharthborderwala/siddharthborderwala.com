import React, { useState } from 'react';
import axios from 'axios';
import { CircleNotch, Warning, PaperPlaneTilt } from 'phosphor-react';

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
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
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

const ContactForm = () => {
  const [name, setName] = useState(emptyField);
  const [email, setEmail] = useState(emptyField);
  const [message, setMessage] = useState(emptyField);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    // check if there are errors
    if (name.error || email.error || message.error) {
      alert('Fix the errors show in the form and retry');
      return;
    }
    setSubmitting(true);
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
      } else {
        alert('Something went wrong, please try again');
      }
    } finally {
      setSubmitting(false);
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="text-lg" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          className="px-2 py-1 border text-lg mt-2"
          value={name.value}
          onChange={handleNameChange}
          disabled={submitting}
        />
        {name.error && (
          <p className="text-yellow-500 mt-2">
            <Warning className="align-middle inline mr-2" size="20" />
            {name.error}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-lg" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          email="email"
          placeholder="johndoe@example.com"
          className="px-2 py-1 border text-lg mt-2"
          value={email.value}
          onChange={handleEmailChange}
          disabled={submitting}
        />
        {email.error && (
          <p className="text-yellow-500 mt-2">
            <Warning className="align-middle inline mr-2" size="20" />
            {email.error}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-xl" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="I would like to hire/collaborate..."
          className="px-2 py-1 border text-lg mt-2 h-48"
          value={message.value}
          onChange={handleMessageChange}
          disabled={submitting}
        />
        {message.error && (
          <p className="text-yellow-500 mt-2">
            <Warning className="align-middle inline mr-2" size="20" />
            {message.error}
          </p>
        )}
      </div>
      <div className="py-4">
        <button
          type="submit"
          className="bg-red-400 text-white text-lg py-2 px-4 flex items-center"
          disabled={submitting}
        >
          Send Message
          {submitting ? (
            <CircleNotch weight="bold" className="ml-4 animate-spin" />
          ) : (
            <PaperPlaneTilt weight="bold" className="ml-4" />
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
