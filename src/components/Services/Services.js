import React, { Component } from 'react';
import Title from '../Title/Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import './Services.css';

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: "free cocktails",
				info: "Lorem ipsum dolor amet etsy vaporware PBR&B, yr waistcoat celiac brunch asymmetrical coloring book blue bottle freegan. Microdosing drinking vinegar keytar."
			},
			{
				icon: <FaHiking />,
				title: "Hiking",
				info: "Lorem ipsum dolor amet etsy vaporware PBR&B, yr waistcoat celiac brunch asymmetrical coloring book blue bottle freegan. Microdosing drinking vinegar keytar."
			},
			{
				icon: <FaShuttleVan />,
				title: "free shuttle",
				info: "Lorem ipsum dolor amet etsy vaporware PBR&B, yr waistcoat celiac brunch asymmetrical coloring book blue bottle freegan. Microdosing drinking vinegar keytar."
			},
			{
				icon: <FaBeer />,
				title: "free beer",
				info: "Lorem ipsum dolor amet etsy vaporware PBR&B, yr waistcoat celiac brunch asymmetrical coloring book blue bottle freegan. Microdosing drinking vinegar keytar."
			}
		]
	}

  render() {
    return (
      <section className="services">
        <Title title="services"/>
				<div className="services-center">
		{this.state.services.map((item, index) => { 
			return(
				<article key={index} className="service">
					<span>{item.icon}</span>
					<h6>{item.title}</h6>
					<p>{item.info}</p>
				</article> 
			)
		})}
				</div>
      </section>
    )
  }
}
