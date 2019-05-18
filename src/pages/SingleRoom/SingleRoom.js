import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultBcg from '../../images/room-1.jpeg';
import Banner from '../../components/Banner/Banner';
import { RoomContext } from '../../Context';
import StyledHero from '../../components/StyledHero/StyledHero';
import './SingleRoom.css';

export default class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg: defaultBcg
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if(!room) {
      return (
        <div className="error">
          <p>room not found...</p>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const [ mainImg, ...defaultImg ] = images; 
    return (
      <React.Fragment>
        <StyledHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
          {defaultImg.map((image, index) => <img key={index} src={image} alt={name} />)}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: ${size} Sq</h6>
              <h6>
                max capacity: {
                  capacity > 1 ? `${capacity} people` : `${capacity} person`
                }
              </h6>
              <h6>
                {pets? "pets allowed" : "mo pets allowed"}
              </h6>
              <h6>
                {breakfast && "free breakfast included"}
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>   
           <ul className="extras">
             {extras.map((item, index) => <li key={index}>- {item}</li>)}
           </ul>     
        </section>
      </React.Fragment>
    );
  }
}
