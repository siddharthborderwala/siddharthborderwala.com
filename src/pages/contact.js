import React from 'react';
import { Link } from 'gatsby';
import { Phone, EnvelopeSimpleOpen, HourglassMedium } from 'phosphor-react';

import StandardLayout from '../layouts/standard';
import ExternalLink from '../components/external-link';
import ContactForm from '../components/contact-form';

const ContactPage = () => {
  return (
    <StandardLayout>
      <div style={{ backgroundImage: 'url(/dot-grid.png)' }} className="pt-8">
        <div className="w-constraint flex flex-col md:flex-row">
          <header className="flex-1 md:mr-16">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <h2 className="text-xl mt-8">
              Use my contact details or fill the form. I usually respond in 1
              day <HourglassMedium size="24" className="inline align-middle" />
            </h2>
            <ul className="text-lg text-gray-700 mt-8 space-y-4">
              <li className="font-bold flex items-center space-x-4">
                <span className="bg-gray-100 p-3 rounded-full inline-block">
                  <Phone weight="bold" size="24" />
                </span>
                <ExternalLink href="tel:+919426944582">
                  +91 94269 44582
                </ExternalLink>
              </li>
              <li className="font-bold flex items-center space-x-4 overflow-auto">
                <span className="bg-gray-100 p-3 rounded-full inline-block">
                  <EnvelopeSimpleOpen weight="bold" size="24" />
                </span>
                <ExternalLink href="mailto:siddharthborderwala@gmail.com">
                  siddharthborderwala@gmail.com
                </ExternalLink>
              </li>
            </ul>
            <p className="text-xl text-gray-700 mt-8">
              Find out more about the services I offer and the work I do{' '}
              <Link to="/#work" className="underline text-red-400">
                here
              </Link>
              .
            </p>
          </header>
          <main className="flex-1 mt-8 md:mt-0">
            <ContactForm />
          </main>
        </div>
      </div>
    </StandardLayout>
  );
};

export default ContactPage;
