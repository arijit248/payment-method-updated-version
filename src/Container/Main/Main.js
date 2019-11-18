import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../Main/temp.css';


class Main extends Component {
    state = {
        Amount: 500,
        numMonths: 6,
        Interest: '',
        prevAmount: '',
        prevnumMonths: '',
        monAmount: {},
        priAmount: {},
    }

    //API creation
    callApi = () => {
        if ((this.state.Amount !== this.state.prevAmount) || (this.state.numMonths !== this.state.prevnumMonths)) {
            axios.get('https://ftl-frontend-test.herokuapp.com/interest?amount=' + this.state.Amount + '&numMonths=' + this.state.numMonths)
                .then((response) => {

                    this.setState({
                        Interest: response.data,
                        monAmount: response.data.monthlyPayment,
                        priAmount: response.data.principal,
                        prevAmount: this.state.Amount,
                        prevnumMonths: this.state.numMonths,
                    })
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    //will mount
    componentWillMount() {
        localStorage.getItem('Amount') && this.setState({
            Amount: JSON.parse(localStorage.getItem('Amount')),
        })

        localStorage.getItem('numMonths') && this.setState({
            numMonths: JSON.parse(localStorage.getItem('numMonths')),
        })
    }

    //onload data will load
    componentDidMount() {
        this.callApi()
    }

    //will update
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Amount', JSON.stringify(nextState.Amount));
        localStorage.setItem('numMonths', JSON.stringify(nextState.numMonths));
    }

    // //updated data will show
    // componentDidUpdate() {
    //     this.callApi()
    // }

    //Loan Amount Event
    // handleAmountChange(evt) {
    //     this.setState({ Amount: evt.target.value, });
    // }

    //Loan Duration Event
    // handleDurationChange(evt) {
    //     this.setState({ numMonths: evt.target.value, });
    // }

    render() {
        return (
            <div>
                {/* Card section */}
                <Card bg="dark" className='cardDesign'>
                    <Card.Body style={{ width: '100%' }}>
                        <Card.Title style={{ fontSize: '23px', color: '#b3b8bb' }}>Payment Calculator</Card.Title>
                        <Form className='formContent' >

                            {/* Amount Part */}
                            <div className='inputContent'>
                                <Form.Label style={{ marginBottom: '1.5rem' }}>Loan Amount</Form.Label>
                                {/* <input type="range" name="amount" className='formInput' value={this.state.Amount} min="500" max="5000" onChange={(evt) => this.handleAmountChange(evt)} /> */}
                                <InputRange
                                    maxValue={5000}
                                    minValue={500}
                                    value={this.state.Amount}
                                    // onChange={(evt) => this.handleAmountChange(evt)}
                                    onChange={Amount => this.setState({ Amount })}
                                    onChangeComplete={this.callApi} />
                            </div>

                            {/* Duration Part */}
                            <div className='inputContent'>
                                <Form.Label style={{ marginBottom: '1.5rem' }}>Loan Duration</Form.Label>
                                {/* <input type="range" name="duration" className='formInput' value={this.state.numMonths} min="6" max="24" onChange={(evt) => this.handleDurationChange(evt)} /> */}
                                <InputRange
                                    maxValue={24}
                                    minValue={6}
                                    value={this.state.numMonths}
                                    // onChange={(evt) => this.handleDurationChange(evt)}
                                    onChange={numMonths => this.setState({ numMonths })}
                                    onChangeComplete={this.callApi} />
                            </div>

                            {/* Rsult Part */}
                            <Container>
                                <Row>
                                    {/* amount value and monthes value */}
                                    <Col lg={7} md={7} sm={12}>
                                        <div className='sliderText'>Amount Value: <b>{this.state.priAmount.amount} {this.state.priAmount.currency} </b></div>
                                    </Col>
                                    <Col lg={5} md={5} sm={12}>
                                        <div className='sliderText'>Months: <b>{this.state.Interest.numPayments}</b></div>
                                    </Col>
                                </Row>
                                <Row>
                                    {/* interest value and payment amount */}
                                    <Col lg={7} md={7} sm={12}>
                                        <div className='sliderText'>Payment Amount: <b>{this.state.monAmount.amount} {this.state.monAmount.currency} </b></div>
                                    </Col>
                                    <Col lg={5} md={5} sm={12}>
                                        <div className='sliderText'>Interest Value: <b>{this.state.Interest.interestRate}</b></div>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </div >
        );
    }
}
export default Main;