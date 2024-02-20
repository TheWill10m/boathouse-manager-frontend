import { BoatContext } from '../App.jsx';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { useContext } from 'react';
import * as formik from 'formik';
import * as yup from 'yup';

function BoatEditor() {
    const { Formik } = formik;
    const schema = yup.object().shape({
        name: yup.string().required(),
        boatType: yup.string().required(),
    })

    const { boatList, setBoatList, editorOpen, setEditorOpen, editorListId } = useContext(BoatContext);
    const boat = boatList[editorListId];
    const handleClose = () => setEditorOpen(false);

    function getBoatTypes(isCoxed) {
        let boatTypes = isCoxed ? ['2+', '4+', '8x+', '8+'] : ['1x', '2x', '2-', '4x', '4-']
        return boatTypes;
    }

    function saveBoatChanges(values) {
        const updatedBoatList = [...boatList];
        updatedBoatList[editorListId] = {
            name: values.name,
            isCoxed: values.isCoxed,
            boatType: values.boatType,
            inService: values.inService
        }

        setBoatList(updatedBoatList)
    }

    return (
        <Modal show={editorOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Boat</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    validationSchema={schema}
                    onSubmit={values => {
                        saveBoatChanges(values);
                        setEditorOpen(false)
                    }}
                    initialValues={{
                        name: boat.name,
                        isCoxed: boat.isCoxed,
                        boatType: boat.type,
                        inService: boat.inService,
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group controlId='validationFormikName'>
                                <Form.Label><h3>Add a new boat</h3></Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>Boat name</InputGroup.Text>
                                    <Form.Control
                                        type='text'
                                        name='name'
                                        placeholder='Enter boat name'
                                        value={values.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId='validationFormikIsCoxed' style={{ marginTop: '5px' }}>
                                <Form.Check
                                    name='isCoxed'
                                    value={values.isCoxed}
                                    defaultChecked={values.isCoxed}
                                    label='Is the boat coxed?'
                                    onChange={handleChange}
                                    id='validationFormikIsCoxed' />
                            </Form.Group>

                            <Form.Group controlId='boatType' style={{ marginTop: '5px' }}>
                                <Form.Label>What type of boat is it?</Form.Label>
                                <Form.Select
                                    aria-label='Default select example'
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                >
                                    <option value=''>Select boat type</option>
                                    {getBoatTypes(values.isCoxed).map((boatType, index) => (
                                        <option key={index} id={boatType} value={values.boatType}>{boatType}</option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.type}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId='formBoatStatus' style={{ marginTop: '10px' }}>
                                <Form.Label>Is the boat in service?</Form.Label>
                                <Form.Check
                                    name='inService'
                                    label='In service'
                                    value={values.inService}
                                    defaultChecked={values.inService}
                                    onChange={handleChange}
                                    id='validationFormikInService'
                                />
                            </Form.Group>

                            <Button variant='primary' type='submit' style={{ margin: '5px' }}>
                                Save changes
                            </Button>
                        </Form >
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default BoatEditor;