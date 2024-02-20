import { BoatContext } from '../App.jsx';
import { Button, Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useContext } from 'react';

function BoatCard(props) {

    const { boatList, setBoatList, setEditorOpen, setEditorListId } = useContext(BoatContext);

    function deleteBoat(index) {
        const updatedBoatList = boatList.filter((_, i) => i !== index)
        setBoatList(updatedBoatList);
    }

    function openEditor() {
        setEditorListId(props.listId);
        setEditorOpen(true);
    }

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col><Card.Title>{props.name}</Card.Title></Col>
                    <Col><Card.Subtitle className="mb-2 text-muted">Type: {props.type}</Card.Subtitle></Col>
                    <Col>
                        <Card.Text>
                            Status: {props.inService ? "In service" : "Out of service"}
                        </Card.Text>
                    </Col>
                    <Col md="auto">
                        <Button variant='outline-primary' onClick={() => openEditor()}>Edit</Button>
                    </Col>
                    <Col md="auto">
                        <Button
                            variant='outline-danger'
                            placement='right'
                            onClick={() => deleteBoat(props.listId)}
                        >Delete</Button>
                    </Col>
                </Row>
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