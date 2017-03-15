import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import './Header.scss';

function Home() {
	return (
		<header className="Header">
			<div className="container">
				<h1><small>My name is</small> <br />Vlad Kampov</h1>
				<h2>
					<small>{'And I\'m a'}</small><br />
				</h2>
				<div className="Header__linkbar">
					<Row>
						<Col md={4}><h2><Link to="/dev" className="btn">Web developer</Link></h2></Col>
						<Col md={4}><h2><Link to="/design" className="btn">Designer</Link></h2></Col>
						<Col md={4}><h2><Link to="/music" className="btn">Musician</Link></h2></Col>
					</Row>
				</div>
			</div>
		</header>
	);
}

export default Home;
