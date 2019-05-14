import React, { Component } from 'react';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { reactiveMobxForm, Control } from 'reactive-mobx-form';
import ReactiveFormControl from '../../components/ReactiveFormControl';

class FormUrlShortener extends Component {
    render() {
        const { submit, valid, submitting, submitError } = this.props;

        return (
            <form onSubmit={submit}>
                <Row>
                    <Col md={9}>
                        <Control
                            name="url"
                            component={ReactiveFormControl}
                            type="text"
                            placeholder="Put the url here"
                        />
                    </Col>
                    <Col md={3} className="text-right">
                        <Button bsStyle="success" type="submit" disabled={!valid || submitting} style={{ marginTop: 22, width: '100%' }}>
                            SHORT IT
                        </Button>
                    </Col>
                </Row>
                {submitError && (
                    <Alert bsStyle="danger">
                        {submitError}
                    </Alert>
                )}
            </form>
        );
    }
}

export default reactiveMobxForm('formUrlShortener', {
    schema: {
        url: ['', 'required|max:255|min:3|url'],
    },
})(FormUrlShortener);
