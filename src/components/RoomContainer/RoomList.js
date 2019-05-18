import React from 'react';
import Room from '../Room/Room';
import './RoomContainer.css';

export default function RoomList({ rooms }) {
  if(rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>There are no matches your search</h3>
      </div>
    )
  }
  return (
    <section className="roomslist">
			<div className="roomslist-center">
        {rooms && rooms.map(item => <Room key={item.id} room={item} />)}
      </div>
    </section>
  )
}
