import React from 'react';
import { Row, Col } from 'react-bootstrap';
import facebook from '../Icons/facebook.svg';
import github from '../Icons/github.svg';
import instagram from '../Icons/instagram.svg';
import twitter from '../Icons/twitter.svg';
import linkedin from '../Icons/linkedin.svg';
import vk from '../Icons/vk.svg';
import './Footer.scss';

function Footer() {
	return (
		<footer className="Footer">
			<div className="container">
				<Row>
					<Col md={8}>
						<h4>{'Let\'s talk!'}</h4>
						<p>
							<span className="location">Ukraine, Kyiv</span><br />
							<a className="mail" href="mailto:vladyslav.kampov@gmail.com">vladyslav.kampov@gmail.com</a>
						</p>
					</Col>
					<Col md={4} className="text-right">
						<h4>Wanna more? Check my socials</h4>
						<Row>
							<Col xs={2}><a href="https://www.facebook.com/vladkampov"><img src={facebook} alt="" /></a></Col>
							<Col xs={2}><a href="https://vk.com/vladkampov"><img src={vk} alt="" /></a></Col>
							<Col xs={2}><a href="https://www.instagram.com/vladkampov/"><img src={instagram} alt="" /></a></Col>
							<Col xs={2}><a href="https://twitter.com/VladKampov"><img src={twitter} alt="" /></a></Col>
							<Col xs={2}><a href="https://github.com/vladkampov"><img src={github} alt="" /></a></Col>
							<Col xs={2}><a href="https://www.linkedin.com/in/vladkampov/"><img src={linkedin} alt="" /></a></Col>
						</Row>
					</Col>
				</Row>
			</div>
		</footer>
	);
}

export default Footer;


