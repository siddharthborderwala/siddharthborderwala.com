import React from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';

const StandardLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default StandardLayout;
