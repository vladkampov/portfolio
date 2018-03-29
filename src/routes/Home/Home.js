import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
	return (
		<section className="Home">
			<div className="container">
				<h2>What is it?</h2>
				<p>
					Okay, basically this page should describe what I'm doing.<br />
					I guess it should be useful for everyone who's looking for <Link to="/music">mind-blowing music</Link> or for those who wanna hire me as <Link to="/dev">Experienced Software Engineer</Link>.<br />
					At least I can show this page to my grandma to explain why I'm so busy and don't wanna eat soup.<br /><br />
					Click buttons in the header to learn more.</p>
			</div>
		</section>
	);
}

export default Home;
