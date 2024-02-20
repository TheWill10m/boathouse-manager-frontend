import BoatCard from './BoatCard.jsx';
import { Container, ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import { BoatContext } from '../App.jsx';

function BoatsExplorer() {

    const boatList = useContext(BoatContext).boatList;

    return (
        <Container style={{ width: '60%' }}>
            <ListGroup style={{ padding: '10px', marginTop: '1%', marginBottom: '5px' }}>
                <BoatCards boats={boatList} />
            </ListGroup>
        </Container>
    );
}

function BoatCards({ boats }) {
    let boatCards = boats.map((boat, index) =>
        <BoatCard key={index} listId={index} name={boat.name} type={boat.type} inService={boat.inService} />
    );

    return boatCards;
}

export default BoatsExplorer;