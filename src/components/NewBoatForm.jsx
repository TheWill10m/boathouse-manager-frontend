import { BoatContext } from '../App.jsx';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { useContext, useState } from 'react';

function NewBoatForm() {

    const isCoxedDefault = true;
    const inServiceDefault = true;

    const { boatList, setBoatList } = useContext(BoatContext)

    const [isCoxed, setIsCoxed] = useState(isCoxedDefault)
    const [inService, setInService] = useState(inServiceDefault)
    const [newBoatName, setNewBoatName] = useState('')

    function handleIsCoxedChange(event) {
        setIsCoxed(event.target.checked)
    }

    function handleInServiceChange(event) {
        setInService(event.target.checked)
    }

    function handleSubmit() {
        const newBoat = {
            name: newBoatName,
        }
        console.log(newBoat)
        setBoatList(b => [...b, newBoat])
    }

    function getBoatTypes() {
        let boatTypes = isCoxed ? ['2+', '4+', '8x+', '8+'] : ['1x', '2x', '2-', '4x', '4-']
        return boatTypes;
    }

    return (
        <Container style={{ padding: '10px', border: '2px solid hsl(0, 0%, 20%)', borderRadius: '10px', marginTop: '1%', marginBottom: '5px', width: '50%' }}>
            <Form>
                <Form.Label><h3>Add a new boat</h3></Form.Label>
                <InputGroup>
                    <InputGroup.Text>Boat name</InputGroup.Text>
                    <Form.Control type='text' placeholder='Enter boat name' value={newBoatName} onChange={(event) => setNewBoatName(event.target.value)} />
                </InputGroup>

                <Form.Group controlId='formCoxed' style={{ marginTop: '5px' }}>
                    <Form.Check type='checkbox' id='isCoxed' label='Is the boat coxed?' checked={isCoxed} onChange={handleIsCoxedChange} />
                </Form.Group>

                <Form.Group controlId='formBoatType' style={{ marginTop: '5px' }}>
                    <Form.Label>What type of boat is it?</Form.Label>
                    <Form.Select aria-label='Default select example'>
                        <option>Select boat type</option>
                        {getBoatTypes().map((boatType, index) => (
                            <option key={index} id={boatType}>{boatType}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId='formBoatStatus' style={{ marginTop: '10px' }}>
                    <Form.Label>Is the boat in service?</Form.Label>
                    <Form.Check type='checkbox' id='inService' label='In service' checked={inService} onChange={handleInServiceChange} />
                </Form.Group>

                <Button variant='primary' onClick={handleSubmit} style={{ margin: '5px' }}>
                    Submit
                </Button>
            </Form >
        </Container>
    );



}

export default NewBoatForm;