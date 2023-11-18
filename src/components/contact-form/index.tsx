'use client';

import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import {
  CircleNotch,
  Warning,
  PaperPlaneTilt,
} from '@phosphor-icons/react/dist/ssr';
import toast from 'react-hot-toast';

const validateName = (name: string) => {
  if (name.trim().length === 0) {
    return 'Name is required';
  }
  return null;
};

const validateEmail = (email: string) => {
  if (email.trim().length === 0) {
    return 'Email is required';
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return 'Email is invalid';
  }
  return null;
};

const validateMessage = (message: string) => {
  if (message.trim().length === 0) {
    return 'Message is required';
  }
  return null;
};

type Field = {
  value: string;
  error: string | null;
};

const emptyField: Field = { value: '', error: null };

const ContactForm = () => {
  const [name, setName] = useState<Field>(emptyField);
  const [email, setEmail] = useState<Field>(emptyField);
  const [message, setMessage] = useState<Field>(emptyField);

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      toast.success(
        'I have received your message, I will get back to you soon'
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          toast.error('Make sure you have entered valid data');
        } else if (error.response?.status === 404) {
          toast.error('We are not accepting responses right now');
        } else {
          toast.error(
            'Something went wrong, please contact us via email or twitter'
          );
        }
      } else {
        toast.error(
          'Something went wrong, please contact us via email or twitter'
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({
      value: e.target.value,
      error: validateName(e.target.value),
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({
      value: e.target.value,
      error: validateEmail(e.target.value),
    });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage({
      value: e.target.value,
      error: validateMessage(e.target.value),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="text-md sm:text-lg" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          className="px-3 py-2 bg-gray-200 text-md sm:text-lg mt-2 text-gray-800 placeholder:text-gray-500/75"
          value={name.value}
          onChange={handleNameChange}
          disabled={submitting}
          required={true}
        />
        {name.error && (
          <p className="text-yellow-500 mt-2 flex items-center">
            <Warning className="inline mr-2" size="20" />
            {name.error}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-md sm:text-lg" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="johndoe@example.com"
          className="px-3 py-2 bg-gray-200 text-md sm:text-lg mt-2 text-gray-800 placeholder:text-gray-500/75"
          value={email.value}
          onChange={handleEmailChange}
          disabled={submitting}
          required={true}
        />
        {email.error && (
          <p className="text-yellow-500 mt-2 flex items-center">
            <Warning className="inline mr-2" size="20" />
            {email.error}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-md sm:text-lg" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="What are your favorite TV Shows?"
          className="px-3 py-2 bg-gray-200 text-md sm:text-lg mt-2 text-gray-800 placeholder:text-gray-500/75 min-h-[2.7rem] h-48"
          value={message.value}
          onChange={handleMessageChange}
          disabled={submitting}
          required={true}
        />
        {message.error && (
          <p className="text-yellow-500 mt-2 flex items-center">
            <Warning className="inline mr-2" size="20" />
            {message.error}
          </p>
        )}
      </div>
      <div className="py-4">
        <button
          type="submit"
          className="bg-red-400 disabled:cursor-not-allowed disabled:bg-red-300 text-white text-lg py-2 px-4 flex items-center"
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
