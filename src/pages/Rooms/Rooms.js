import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';

export default function Rooms() {
  return (
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">back to home</Link>
        </Banner>
      </Hero>
  )
}
