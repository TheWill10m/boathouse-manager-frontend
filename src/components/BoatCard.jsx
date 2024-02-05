import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

function BoatCard(props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Type: {props.type}</Card.Subtitle>
                <Card.Text>
                    Status: {props.inService ? "In service" : "Out of service"}
                </Card.Text>
                <Container>
                    <Row>
                        <Col>
                            <Button variant='outline-primary'>Edit</Button>
                        </Col>
                        <Col>
                            <Button variant='outline-danger' placement='right'>Delete</Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}


BoatCard.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    inService: PropTypes.bool,
}

BoatCard.defaultProps = {
    name: "Nameless Boat",
    type: "1x",
    inService: true,
}

export default BoatCard;