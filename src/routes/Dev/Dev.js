import React from 'react';


function Dev() {
	return (
		<section className="Dev">
			<div className="container">
        <h2>Software Engineer</h2>
        <p>
          I have overall <b>{Date.now() - 1357038914000} milliseconds</b> of web-development, especially Front-end.
        </p>
        {/* <p>
          The band was created in 2015 by Alexander Benko (guitarist, vocalist, songwriter). <br />
          Debut album was released on December 4th, 2017 and avalaible in all streaming services and digital music stores.<br />You can find all links at <a href="http://mylastattempt.com" target="blank">mylastattempt.com</a>.
        </p>
        <p>We are doing an active concert activity in clubs (i.e. 'Atlas) and festivals in Kyiv and Ukraine as a whole. </p> */}
        <p><a href="https://www.linkedin.com/in/vladkampov/" target="blank" className="btn btn-lg btn-default">Take a look at LinkedIn</a></p>
			</div>
		</section>
	);
}

export default Dev;
