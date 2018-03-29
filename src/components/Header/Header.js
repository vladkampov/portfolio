import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Header.scss';

function Home({ path }) {
	return (
		<header className={`Header ${path.slice(1)}`}>
			<div className="container">
				<h1><small>My name is</small> <br /><Link to="/">Vlad Kampov</Link></h1>
				<h2>
					<small>{'And I\'m a'}</small><br />
				</h2>
				<div className="Header__linkbar">
					<Row>
						<Col md={6}><h2><Link to="/music" className={`btn ${path === '/music' && 'active'}`}>Musician</Link></h2></Col>
						<Col md={6}><h2><Link to="/dev" className={`btn ${path === '/dev' && 'active'}`}>Developer</Link></h2></Col>
						{/* <Col md={6}><h2><Link to="/design" className="btn">Designer</Link></h2></Col> */}
					</Row>
				</div>
			</div>
		</header>
	);
}

export default Home;
