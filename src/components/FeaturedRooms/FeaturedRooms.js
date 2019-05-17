import React, { Component } from 'react';
import { RoomContext } from '../../Context';
import Loading from '../Loading/Loading';
import Room from '../Room/Room';

export default class FeaturedRooms extends Component {
	static contextType = RoomContext;
  render() {
    const { featuredRooms } = this.context;
    console.log(featuredRooms);
    return (
      <div>
        <Loading />
				<Room />
      </div>
    )
  }
}
