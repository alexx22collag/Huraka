import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const login = async (email, password) => {
    var response = await axios.post('https://localhost:7218/api/Runners/login', { email, password });
    if (response.status === 200) {
        const authToken = response.data.token;
        localStorage.setItem('authToken', authToken);
        const decodedToken = jwtDecode(authToken);
        return decodedToken;
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
                alert("Error al iniciar sesión");
                navigate("/Men");
            }
        });
    };

    // Registro
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
    });

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
            setAlert({ message: 'Ya estás inscrito en la carrera', type: 'warning' });
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
        <div>
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5" style={{ backgroundImage: `url('./src/assets/giphy1.gif')`, backgroundRepeat: 'round' }}>
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span style={{ color: 'white' }}>Member Nike </span><span style={{ color: 'white' }}>Join</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3" style={{ color: 'white' }}> Welcome to Nike </h4>
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                            <input type="email" className="form-style" placeholder="Email" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} value={email} onChange={handleEmailChange} />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="password" className="form-style" placeholder="Password" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} value={password} onChange={handlePasswordChange} />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <button type="submit" className="btn mt-4" style={{ borderRadius: '4px', height: '44px', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', transition: 'all 200ms linear', padding: '0 30px', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', backgroundColor: 'white', color: '#000000' }}>Login</button>
                                                    </form>
                                                    <p className="mb-0 mt-4 text-center"><a href="#" className="link" style={{ color: '9f9f9f' }}>Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-3 pb-3" style={{ color: 'white' }}>Join to Nike</h4>
                                                    <form>
                                                        <div className="form-group">
                                                            <input type="text" className="form-style" placeholder="Full Name" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} id="name" name="name" placeholder="Your Name" type="text" required onChange={handleChange} />
                                                            <i className="input-icon uil uil-user"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="tel" className="form-style" placeholder="Phone Number" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} id="phoneNumber" name="phoneNumber" placeholder="Your Phone Number" type="text" required onChange={handleChange} />
                                                            <i className="input-icon uil uil-phone"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="email" className="form-style" placeholder="Email" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} id="email" name="email" placeholder="Your Email" type="text" required onChange={handleChange} />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="password" className="form-style" placeholder="Password" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} id="password" name="password" placeholder="Your Password" type="password" required onChange={handleChange} />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <button onClick={() => peticionPost()} className="btn mt-4" style={{ borderRadius: '4px', height: '44px', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', transition: 'all 200ms linear', padding: '0 30px', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', backgroundColor: 'white', color: '#000000' }}>Register</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalInsertar}>
                <ModalBody>Usuario:{userSelected.name + " " + userSelected.lastName} con email:{userSelected.email} registrado </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={() => abrirCerrarModalInsertar()}>Cerrar</button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default SignInUpForm;