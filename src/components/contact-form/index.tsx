'use client';

import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import zod, { set } from 'zod';
import {
  CircleNotch,
  Warning,
  PaperPlaneTilt,
  XCircle,
} from '@phosphor-icons/react/dist/ssr';
import toast from 'react-hot-toast';
import ButtonCTA from '../button-cta';
import FadeInSection from '../fade-in-section';

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

type FormErrors = zod.typeToFlattenedError<
  {
    name: string;
    email: string;
    message: string;
  },
  string
>;

const ContactForm = () => {
  const [name, setName] = useState<Field>(emptyField);
  const [email, setEmail] = useState<Field>(emptyField);
  const [message, setMessage] = useState<Field>(emptyField);

  const [formErrors, setFormErrors] = useState<FormErrors>();

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check if there are errors
    if (name.error || email.error || message.error) {
      alert('Fix the errors show in the form and retry');
      return;
    }
    setFormErrors(undefined);
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
          setFormErrors(error.response.data);
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
      <FadeInSection className="flex flex-col" delay={0.3}>
        <label className="text-md sm:text-lg font-serif" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          className="px-3 py-2 bg-white border border-gray-300 text-md sm:text-lg mt-2 text-gray-800 placeholder:text-gray-500/75 rounded-xl"
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
        {formErrors?.fieldErrors.name ? (
          <p className="text-red-500 mt-2 flex items-center">
            <XCircle className="inline mr-2" size="20" />
            {formErrors.fieldErrors.name}
          </p>
        ) : null}
      </FadeInSection>
      <FadeInSection className="flex flex-col" delay={0.4}>
        <label className="text-md sm:text-lg font-serif" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="johndoe@example.com"
          className="px-3 py-2 bg-white border border-gray-300 text-md sm:text-lg mt-2 text-gray-800 placeholder:text-gray-500/75 rounded-xl"
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
        {formErrors?.fieldErrors.email ? (
          <p className="text-red-500 mt-2 flex items-center">
            <XCircle className="inline mr-2" size="20" />
            {formErrors.fieldErrors.email}
          </p>
        ) : null}
      </FadeInSection>
      <FadeInSection className="flex flex-col" delay={0.5}>
        <label className="text-md sm:text-lg font-serif" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="What are your favorite TV Shows?"
          className="px-3 py-2 bg-white border border-gray-300 text-md sm:text-lg mt-2 text-gray-800 placeholder:text-gray-500/75 min-h-[2.7rem] h-48 rounded-xl"
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
        {formErrors?.fieldErrors.message ? (
          <p className="text-red-500 mt-2 flex items-center">
            <XCircle className="inline mr-2" size="20" />
            {formErrors.fieldErrors.message}
          </p>
        ) : null}
      </FadeInSection>
      <FadeInSection delay={0.6}>
        <ButtonCTA type="submit" disabled={submitting} className="mt-2">
          <span>Send Message</span>
          {submitting ? (
            <CircleNotch weight="bold" className="ml-4 animate-spin" />
          ) : (
            <PaperPlaneTilt weight="bold" className="ml-4" />
          )}
        </ButtonCTA>
      </FadeInSection>
    </form>
  );
};

export default ContactForm;
