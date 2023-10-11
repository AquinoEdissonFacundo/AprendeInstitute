import React from 'react';
import NavBar from '../NavBar/navBar';
import Form from '../Form/form';
import Body from '../body/body';
import Footer from '../Footer/footer';
import Cards from '../cards/cards';

const Home = () => {
  return (
    <div className='Home_container'>
      <NavBar />
      <Form />
      <Body />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
