import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader, Form, Input, Label, FormGroup, Button } from 'reactstrap';

const Runner = () => {
    const [data, setData] = useState([]);

    const baseUrl = "https://localhost:7218/api/Runners";

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
            alert("Por favor, ingresa tu nombre");
            return; // Detener la ejecuci�n de la funci�n si el nombre est� vac�o
        }
        if (!runnerSelected.email) {
            alert("Por favor, ingresa tu direccion de correo electronico");
            return; // Detener la ejecuci�n de la funci�n si el correo electr�nico est� vac�o
        }
        if (data.some(runner => runner.email === runnerSelected.email)) {
            alert("Ya est�s inscrito en la carrera");
            return; // Detener la ejecuci�n de la funci�n si el correo electr�nico ya est� registrado
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
                    <Form className="mx-auto mt-5 p-4 border rounded bg-light">
                        <h2 className="text-center mb-4">Inscripcion a la Carrera</h2>
                        <FormGroup>
                            <Label for="runnerName">Nombre</Label>
                            <Input
                                id="runnerName"
                                name="runnerName"
                                placeholder="Ingrese su nombre"
                                type="text"
                                onChange={handleChange}
                                className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Ingrese su email"
                                type="email"
                                onChange={handleChange}
                                className="form-control"
                            />
                        </FormGroup>
                        <FormGroup className="text-center">
                            <Button className="btn btn-primary px-4" onClick={() =>  peticionPost()} >Inscribirse</Button>
                        </FormGroup>
                        
                    </Form>
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