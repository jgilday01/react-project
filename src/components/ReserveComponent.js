import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;

class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guests: '',
            time: '',
            touched: {
                guests: false,
                time: false
            },
            isModalOpen: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} className="modal-title header-orange">Reserve a Table</ModalHeader>
                    <ModalBody>

                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i class="fa fa-users" aria-hidden="true" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Control.select model=".guests" id="guests" name="guests"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    >
                                        <option value="">= Select Guest Count =</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Control.select>
                                </InputGroup>
                                <Errors
                                    className="text-danger"
                                    model=".guests"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Number of Guests is Required'
                                    }}
                                />

                            </div>
                            <div className="form-group">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i class="fa fa-clock-o" aria-hidden="true" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Control.select model=".time" id="time" name="time"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    >
                                        <option value="">= Select Time of Day =</option>
                                        <option value="8">8 am</option>
                                        <option value="9">9 am</option>
                                        <option value="10">10 am</option>
                                        <option value="11">11 am</option>
                                        <option value="12">12 pm</option>
                                        <option value="13">1 pm</option>
                                        <option value="14">2 pm</option>
                                        <option value="15">3 pm</option>
                                        <option value="16">4 pm</option>
                                        <option value="17">5 pm</option>
                                        <option value="18">6 pm</option>
                                        <option value="19">7 pm</option>
                                    </Control.select>
                                </InputGroup>
                                <Errors
                                    className="text-danger"
                                    model=".time"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Time is Required'
                                    }}
                                />
                            </div>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>

                    </ModalBody>
                </Modal>
                <button onClick={this.toggleModal} className="btn btn-orange btn-large mt-4">Reserve a Table</button>
            </>
        )
    }
}

export default Reservation;