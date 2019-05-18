import React, { useContext } from 'react';
import { RoomContext } from '../../Context';
import Title from '../Title/Title';

const getUnique = (items, value) => {
  return [ ...new Set(items.map(item => item[value])) ]
}

export default function RoomFilter() {
  const context = useContext(RoomContext);
  const { 
    rooms,
    change, 
    type, 
    capacity, 
    price, 
    minPrice, 
    maxPrice, 
    breakfast, 
    pets
  } = context;

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (
    <section className="filter-container">
		  <Title title="search rooms" />
      <form className="filter-form">

        <div className="form-group">
          <label htmlFor="type">room type</label>
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

        <div className="form-group">
          <label htmlFor="capacity">guests</label>
            <select 
            name="capacity" 
            id="capacity" 
            value={capacity}
            className="form-control"
            onChange={change}
          >
            {people}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input 
            type="range" 
            name="price" 
            min={minPrice} 
            max={maxPrice} 
            id="price" 
            value={price}
            onChange={change}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input 
              type="checkbox" 
              name="breakfast" 
              id="breakfast" 
              checked={breakfast}
              onChange={change}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input 
              type="checkbox" 
              name="pets" 
              id="pets" 
              checked={pets}
              onChange={change}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        

      </form>
    </section>
  )
}

