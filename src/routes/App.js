import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './App.scss';


export default Wrapped => ({ ...rest }) => (
	<div className="App">
		<div className="App__wrapper">
			<div className="App___content">
				<Header path={rest.location.pathname} />
				<section className="App__container">
					<Wrapped {...rest} />
				</section>
			</div>
		</div>
		<Footer />
	</div>
);
