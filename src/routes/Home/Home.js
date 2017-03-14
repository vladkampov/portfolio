import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import './Home.scss';

function Home() {
	return (
		<section className="Home">
			<div className="container">
				<h1><small>My name is</small> <br />Vlad Kampov</h1>
				<h2>
					<small>{'And I\'m a'}</small><br />
				</h2>
				<div className="Home__linkbar">
					<Row>
						<Col md={3}><h2><Link to="/dev" className="btn">Web developer 🚀</Link></h2></Col>
						<Col md={3}><h2><Link to="/design" className="btn">Designer 🖌</Link></h2></Col>
						<Col md={3}><h2><Link to="/music" className="btn">Musician 🎸</Link></h2></Col>
						<Col md={3}><h2><Link to="/social" className="btn">Public Figure 🎤</Link></h2></Col>
					</Row>
				</div>
			</div>
		</section>
	);
}

export default Home;
