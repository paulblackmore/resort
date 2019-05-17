import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';

export default function Error() {
  return (
      <Hero>
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">Back to home</Link>
        </Banner>
      </Hero>
  )
}
