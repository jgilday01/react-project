import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
        //this.props.resetFeedbackForm();
    }

    render() {

        return (

            <div className="container-fluid">
                <div className="row my-3">
                    <div className="col-12 offset-sm-1 col-sm-10">
                        <div className="highlight">
                            <h2 className="text-center">Get In Touch</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 offset-sm-1 col-sm-10">
                        <div className="home-text-lrg my-3">
                            <h4 className="text-center">
                                Please feel free to send us a message if you have questions or comments for us.
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12 offset-sm-1 col-sm-10 my-3">
                        <Form model="feedbackForm" onSubmit={values => this.handleSubmit(values)}>
                            <Row>
                                <Col className="col-12 col-md-6">
                                    <Control.text model=".firstName" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>

                                <Col className="col-12 col-md-6">
                                    <Control.text model=".lastName" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-12 col-md-6">
                                    <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                        placeholder="Phone Number"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>

                                <Col className="col-12 col-md-6">
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-12">
                                    <Control.textarea model=".feedback" id="feedback" name="feedback" rows="12" />
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-12">
                                    <Button type="submit" className="btn-orange">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;