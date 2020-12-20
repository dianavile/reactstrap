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
               {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                    <Col xs={6} md={4}>
                    xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                    xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                    xs=6 md=4
                    </Col>
                </Row>
                </Container>   
            </div>
        );
    }
}

export default App;
