import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import RoomContainer from '../../components/RoomContainer/RoomContainer';

export default function Rooms() {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">back to home</Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </React.Fragment>   
  )
}
