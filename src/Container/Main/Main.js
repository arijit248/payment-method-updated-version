import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import mainStyle from '../Main/main.module.css';

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
        // console.log(cache)
        this.callApi()

    }

    //updated data will show
    componentDidUpdate() {
        this.callApi()
    }

    //will update
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Amount', JSON.stringify(nextState.Amount));
        localStorage.setItem('numMonths', JSON.stringify(nextState.numMonths));
    }

    //Loan Amount Event
    handleAmountChange(evt) {
        this.setState({ Amount: evt.target.value, });
    }

    //Loan Duration Event
    handleDurationChange(evt) {
        this.setState({ numMonths: evt.target.value, });
    }

    render() {
        return (
            <div>
                {/* Card section */}
                <Card bg="dark" className={mainStyle.cardDesign}>
                    <Card.Body style={{ width: '100%' }}>
                        <Card.Title style={{ fontSize: '23px', color: '#b3b8bb' }}>Payment Calculator</Card.Title>
                        <Form className={mainStyle.formContent} >

                            {/* Amount Part */}
                            <div className={mainStyle.inputContent}>
                                <label>Loan Amount</label>
                                <input type="range" name="amount" className={mainStyle.formInput} value={this.state.Amount} min="500" max="5000" onChange={(evt) => this.handleAmountChange(evt)} />
                            </div>

                            {/* Duration Part */}
                            <div className={mainStyle.inputContent}>
                                <label>Loan Duration</label>
                                <input type="range" name="duration" className={mainStyle.formInput} value={this.state.numMonths} min="6" max="24" onChange={(evt) => this.handleDurationChange(evt)} />
                            </div>

                            {/* Rsult Part */}
                            <Container>
                                <Row>
                                    {/* amount value and monthes value */}
                                    <Col lg={7} md={7} sm={12}>
                                        <div className={mainStyle.sliderText}>Amount Value: <b>{this.state.priAmount.amount} {this.state.priAmount.currency} </b></div>
                                    </Col>
                                    <Col lg={5} md={5} sm={12}>
                                        <div className={mainStyle.sliderText}>Months: <b>{this.state.Interest.numPayments}</b></div>
                                    </Col>
                                </Row>
                                <Row>
                                    {/* interest value and payment amount */}
                                    <Col lg={7} md={7} sm={12}>
                                        <div className={mainStyle.sliderText}>Payment Amount: <b>{this.state.monAmount.amount} {this.state.monAmount.currency} </b></div>
                                    </Col>
                                    <Col lg={5} md={5} sm={12}>
                                        <div className={mainStyle.sliderText}>Interest Value: <b>{this.state.Interest.interestRate}</b></div>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default Main;