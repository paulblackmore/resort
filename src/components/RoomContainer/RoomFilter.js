import React, { useContext } from 'react';
import { RoomContext } from '../../Context';
import Title from '../Title/Title';

const getUnique = (items, value) => {
  return [... new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const { 
    change, 
    type, 
    capacity, 
    price, 
    minPrice, 
    maxPrice, 
    minSize, 
    maxSize, 
    breakfast, 
    pets
  } = context;

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })
  return (
    <section className="filter-container">
		  <Title title="search rooms" />
      <form className="filter-form">

        <div className="form-group">
          <label htmlFor="type"> room type</label>
            <select 
            name="type" 
            id="type" 
            value={type}
            className="form-control"
            onChange={change}
          >
            {types}
          </select>
        </div>

      </form>
    </section>
  )
}

