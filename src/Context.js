import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {

	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
		type: 'all',
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false
	};

	componentDidMount() {
		let rooms = this.formatData(items);
		let featuredRooms = rooms.filter(room => room.featured);
		let maxPrice = Math.max(...rooms.map(item => item.price));
		let maxSize = Math.max(...rooms.map(item => item.size));
		this.setState({
			rooms: rooms,
			featuredRooms: featuredRooms,
			sortedRooms: rooms,
			loading: false,
			price: maxPrice,
			maxPrice: maxPrice,
			maxSize: maxSize
		})
	}

	formatData(items) {
		let tempItems = items.map(item => {
			let id = item.sys.id;
			let images = item.fields.images.map(image => image.fields.file.url);
			let room = { 
				...item.fields, 
				images: images,
				id: id
			};
			return room;
		});
		return tempItems;
	}

	getRoom = (slug) => {
		let tempRooms = [...this.state.rooms];
		const room = tempRooms.find(room => room.slug === slug);
		return room;
	}

	change = (e) => {
		const target = e.target;
		const value = e.type === 'checkbox' ? target.checked : target.value;
		const name = e.target.name;
		this.setState({
			[name]: value
		}, this.filterRooms)
	}

	filterRooms = () => {
		let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;

		let tempRooms = [...rooms];

		capacity = parseInt(capacity)
		price = parseInt(price)


		// filter type
		if (type !== 'all') {
			tempRooms = tempRooms.filter(room => room.type === type);
		}

		//filter capacity
		if (capacity !== 1) {
			tempRooms = tempRooms.filter(room => room.capacity >= capacity);
		}

		//filter price
		tempRooms = tempRooms.filter(room => room.price <= price);


		this.setState({
			sortedRooms: tempRooms
		})
	}

  render() {
		// console.log(this.state);
    return (
      <RoomContext.Provider value={{ 
					...this.state,
					getRoom: this.getRoom,
					change: this.change
				
				}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}


const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };