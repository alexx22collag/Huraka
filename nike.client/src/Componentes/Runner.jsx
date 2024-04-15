import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader, Form, Input, Label, FormGroup, Button } from 'reactstrap';

const Runner = () => {
    const [data, setData] = useState([]);

    const baseUrl = "https://localhost:7218/api/Runners";

    const [alert, setAlert] = useState({ message: '', type: '' });
    const peticionGet = async () => {
        try {
            const response = await axios.get(baseUrl);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        peticionGet();
    }, []);

    const [runnerSelected, setRunnerSelected] = useState({
        runnerId: '',
        runnerName: '',
        email: ''

    })
    const handleChange = e => {
        const { name, value } = e.target;
        setRunnerSelected({
            ...runnerSelected, [name]: value
        });
        console.log(runnerSelected);
    }
    const abrirCerrarModalInsertar = () => setModalInsertar(!modalInsertar);
    const [modalInsertar, setModalInsertar] = useState(false);
    const peticionPost = async () => {
        if (!runnerSelected.runnerName) {
            setAlert({ message: 'Por favor, ingresa tu nombre', type: 'danger' });
            return;
        }
        if (!runnerSelected.email) {
            setAlert({ message: 'Por favor, ingresa tu email', type: 'danger' });
            return;
        }
        if (data.some(runner => runner.email === runnerSelected.email)) {
            setAlert({ message: 'Ya estas inscrito en la carrera', type: 'warning' });
            return;
        }
        delete runnerSelected.runnerId;
        await axios.post(baseUrl, runnerSelected)
            .then(response => {
                setData(data.concat(response.data));
                abrirCerrarModalInsertar();
            }).catch(error => {
                console.log(error);
            });
    }
    return (
        <>
            <div className="row align-items-center justify-content-center mb-5">
                <div className="col-md-6">
                    <Form className="mx-auto mt-5 p-4 border rounded bg-light" style={{ width: '250%', maxWidth: '1000px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ width: '45%', marginRight: '20px' }}>
                                <h1 className="text-center mb-4">Run with us</h1>
                                
                                <h4 className="text-center">Save the date: 09/05/2024</h4>
                                <FormGroup>
                                    <Input
                                        id="runnerName"
                                        name="runnerName"
                                        placeholder="Your Name"
                                        type="text"
                                        required
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Your email"
                                        type="email"
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </FormGroup>
                                <FormGroup className="text-center">
                                    <Button className="item button-pressure" id="liveAlertBtn" onClick={() => peticionPost()} > I want run! <i className="fas fa-running"></i> </Button>
                                </FormGroup>
                            </div>
                            <img src="https://media0.giphy.com/media/3o6Ztqh4JSlVqi2Z20/giphy.gif?cid=790b7611n5t4gbur4ll07olofw1q15tabmc06w17dc1tro5d&ep=v1_gifs_search&rid=giphy.gif&ct=g" style={{ width: '45%', height: 'auto', objectFit: 'cover' }} />
                        </div>
                    </Form>




                    {alert.message && (
                        <div className={`alert alert-${alert.type} alert-dismissible`} role="alert">
                            <div>{alert.message}</div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                                onClick={() => setAlert({ message: '', type: '' })}
                            ></button>
                        </div>
                    )}
                    <Modal isOpen={modalInsertar}>
                        <ModalBody>Gracias por inscribirte a la carrera {runnerSelected.runnerName} </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-danger" onClick={() => abrirCerrarModalInsertar()}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

        </>
    )
}

export default Runner;