import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Message from {name}</h1>
    <h3>
      <a href={`mailto:${email}`}>{email}</a>
    </h3>
    <p>{message}</p>
  </div>
);
