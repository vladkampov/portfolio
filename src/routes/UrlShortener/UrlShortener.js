import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Col, Row, Alert } from "react-bootstrap";
import uuidv4 from 'uuid/v4';
import Spinner from '../../components/Spinner';
import FormUrlShortener from './FormUrlShortener';


class UrlShortener extends Component {
    state = { userId: '' };

    onSubmit = body => {
        const { shortIt } = this.props.urlStore;
        const { userId } = this.state;

        shortIt({ ...body, userId });
    };

    componentDidMount() {
        let userId = localStorage.getItem('userId');

        if (!userId) {
            userId = uuidv4();
            localStorage.setItem('userId', userId);
        }

        this.setState({ userId })
    }

    render() {
        const { shortenUrl, loadingError, isLoading } = this.props.urlStore;

        return (
            <section className="UrlShortener">
                <div className="container">
                    <h2>URL Shortener</h2>
                    <FormUrlShortener onSubmit={this.onSubmit} />
                    {shortenUrl && (
                        <Alert bsStyle="success">Enjoy your shortened link: <a href={shortenUrl}>{shortenUrl.replace('http://', '')}</a></Alert>
                    )}
                    {loadingError && (
                        <Alert bsStyle="danger">Uh oh! Something went wrong so try again with proper url</Alert>
                    )}
                    {isLoading && (
                        <div className="text-center">
                            <Spinner />
                        </div>
                    )}
                    <h3>Why should you use it?</h3>
                    <Row className="text-center">
                        <Col md={3}>
                            <h2><span role="img" aria-label="Free" aria-labelledby="money">🤑</span></h2>
                            <h4>It's Free!</h4>
                        </Col>
                        <Col md={3}>
                            <h2><span role="img" aria-label="Simple" aria-labelledby="good">👍</span></h2>
                            <h4>It's Simple!</h4>
                        </Col>
                        <Col md={3}>
                            <h2><span role="img" aria-label="OpenSource" aria-labelledby="fight">🤼‍</span></h2>
                            <h4>It's OpenSource!</h4>
                        </Col>
                        <Col md={3}>
                            <h2><span role="img" aria-label="Contribute" aria-labelledby="love">😻</span></h2>
                            <h4>And you can <a href="https://github.com/vladkampov">contribute to it</a>!</h4>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default inject('urlStore')(observer(UrlShortener));
