import './App.css';
import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={6} md={4}> 4</Col>
                        <Col xs={2} md={2}> 2</Col>
                        <Col xs={3} md={3}> 3</Col>
                        <Col xs={3} md={3}> 3</Col>
                    </Row>
                    <Row>
                        <Col xs={2} md={2}> 2</Col>
                        <Col xs={6} md={4}> 4</Col>
                        <Col xs={3} md={3}> 3</Col>
                        <Col xs={3} md={3}> 3</Col>
                    </Row>
                </Container>   
            </div>
        );
    }
}

export default App;
