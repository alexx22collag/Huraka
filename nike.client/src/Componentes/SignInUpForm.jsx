import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalFooter} from 'reactstrap';

import { jwtDecode } from 'jwt-decode';

import axios from 'axios';

const login = async (email, password) => {
    var response = await axios.post('https://localhost:7218/api/Runners/login', { email, password });
    if (response.status === 200) {
        const authToken = response.data.token;
        localStorage.setItem('authToken', authToken);
       const decodedToken = jwtDecode(authToken);
         return decodedToken;
        /*return true;*/
    }
    return null;



};

const SignInUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        login(email, password).then((handleLogin) => {
            if (handleLogin) {
                navigate("/TablaCrear");
            } else {
                alert("Error al iniciar sesi�n");
                navigate("/Men");
            }
        });
    };

    //Registro 
    const [data, setData] = useState([]);

    const baseUrl = "https://localhost:7218/api/Users";

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

    const [userSelected, setuserSelected] = useState({
        userId: '',
        name: '',
        lastName: '',
        phoneNumber: '',
        password: '',
        email: ''

    })
    const handleChange = e => {
        const { name, value } = e.target;
        setuserSelected({
            ...userSelected, [name]: value
        });
        console.log(userSelected);
    }
    const abrirCerrarModalInsertar = () => setModalInsertar(!modalInsertar);
    const [modalInsertar, setModalInsertar] = useState(false);
    const peticionPost = async () => {
        if (!userSelected.email) {
            setAlert({ message: 'Por favor, ingresa tu email', type: 'danger' });
            return;
        }
        if (data.some(user => user.email === userSelected.email)) {
            setAlert({ message: 'Ya estas inscrito en la carrera', type: 'warning' });
            return;
        }
        delete userSelected.userId;
        await axios.post(baseUrl, userSelected)
            .then(response => {
                setData(data.concat(response.data));
                abrirCerrarModalInsertar();
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <div className="b-login">
                <div className="container mt-5 mb-5 rounded shadow">
                    <div className="row align-items-stretch">
                        {/*imagen del login*/}
                        <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-start"></div>

                        {/*formulario de login*/}
                        <div className="col bg-white p-5 rounded-end">
                        
                            <h2 className="text-center fw-bold mt-5 py-5">Bienvenido</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="Email"
                                        aria-describedby="emailHelp"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <div id="emailHelp" className="form-text">
                                        Nunca compartiremos tu correo electrónico con nadie más.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Iniciar Sesión
                                    </button>
                                </div>
                                <div className="my-3">
                                    <span>
                                        ¿No tienes cuenta? <a href="#">Registrate</a>
                                    </span>
                                    <br />
                                    <span>
                                        ¿Olvidaste tu contraseña?{" "}
                                        <a href="#">Recuperar contraseña</a>
                                    </span>
                                </div>
                            </form>

                            <h2 className="text-center fw-bold mt-5 py-5">Registrarse</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        type="text"
                                        required
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    <div id="emailHelp" className="form-text">
                                        Nunca compartiremos tu correo electrónico con nadie más.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label">
                                        Contraseña
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        placeholder="Your Password"
                                        type="password"
                                        required
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        type="text"
                                        required
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Your Last Name"
                                        type="text"
                                        required
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Your Phone Number"
                                        type="text"
                                        required
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div>
                                    <button onClick={() => peticionPost()} >Registrarse</button>
                                </div>
                            </form>
                            <Modal isOpen={modalInsertar}>
                                <ModalBody>Usuario:{userSelected.name + " " + userSelected.lastName} con email:{userSelected.email} registrado </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-danger" onClick={() => abrirCerrarModalInsertar()}>Cerrar</button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignInUpForm;
