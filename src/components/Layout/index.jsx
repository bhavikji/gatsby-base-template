import React from 'react';
import useSiteMetadata from '../../hooks/useSiteMetaData';
import '../../sass/app.scss';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children, navbarColor, footerHeader, footerbtn, footerlink }) => {
  const {
    siteMetadata: { title, menu },
  } = useSiteMetadata();
  return (
    <React.Fragment>
      <Header />
      <React.Fragment>{children}</React.Fragment>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
