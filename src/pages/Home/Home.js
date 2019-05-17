import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';

export default function Home() {
  return (
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe rooms from $200">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  )
}
