import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

export default class NavBar extends Component {

  state = {
		isOpen: false
	}

	navToggle = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

  render() {
    return (
      <nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<h3>Resort</h3>
						</Link>
						<button type="button" className="nav-btn" onClick={this.navToggle}>
							<FaAlignRight className="nav-icon"/>
						</button>
					</div>
					<ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/rooms">Rooms</Link>
						</li>
					</ul>
				</div>
      </nav>
    )
  }
}
