import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './App.scss';

export default function App({ children }) {
	return (
		<div className="App">
			<div className="App__wrapper">
				<div className="App___content">
					<Header />
					<section className="App__container">
						{children}
					</section>
				</div>
			</div>
			<Footer />
		</div>
	);
}
