import { BoatContext } from '../App.jsx';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { useContext } from 'react';
import * as formik from 'formik';
import * as yup from 'yup';

function NewBoatForm() {

    const { Formik } = formik;
    const schema = yup.object().shape({
        name: yup.string().required(),
        boatType: yup.string().required(),
    })

    const { boatList, setBoatList } = useContext(BoatContext)

    function getBoatTypes(isCoxed) {
        let boatTypes = isCoxed ? ['2+', '4+', '8x+', '8+'] : ['1x', '2x', '2-', '4x', '4-']
        return boatTypes;
    }

    return (
        <Container style={{ padding: '10px', border: '2px solid hsl(0, 0%, 20%)', borderRadius: '10px', marginTop: '1%', marginBottom: '5px', width: '40%' }}>
            <Formik
                validationSchema={schema}
                onSubmit={values =>
                    setBoatList(b => [...b, {
                        name: values.name,
                        type: values.boatType,
                        inService: values.inService,
                    }])
                }
                initialValues={{
                    name: '',
                    isCoxed: false,
                    boatType: '',
                    inService: true,
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
                                    <option key={index} id={boatType} value={boatType}>{boatType}</option>
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
                            Submit
                        </Button>
                    </Form >
                )}
            </Formik>
        </Container>
    );



}

export default NewBoatForm;