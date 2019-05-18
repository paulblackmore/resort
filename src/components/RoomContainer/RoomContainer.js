import React, { useContext } from 'react';
import { RoomContext } from '../../Context';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from '../Loading/Loading';


export default function RoomContainer() {
  const context = useContext(RoomContext);
  const { loading, sortedRooms } = context;

  if(loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <RoomFilter />
      <RoomList rooms={sortedRooms}/>
    </React.Fragment>
  )
}
