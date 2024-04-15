import React from 'react';
import { Link } from 'react-router-dom';

const SuccessBox = () => {
    const styles = {
        white: '#FCFCFC',
        gray: '#CBCDD3',
        dark: '#777777',
        error: '#EF8D9C',
        orange: '#FFC39E',
        success: '#B0DB7D',
        secondary: '#99DBB4',
        font: "'Lato', sans-serif",
        container: {
            position: 'relative',
            margin: 'auto',
            overflow: 'hidden',
            width: '1350px', // Ajusta el ancho del contenedor
            height: '550px', // Ajusta la altura del contenedor
            marginBottom: '50px', // Ajusta el margen inferior para dejar espacio entre el SuccessBox y el footer
        },
        h1: {
            fontSize: '0.9em',
            fontWeight: '100',
            letterSpacing: '3px',
            paddingTop: '5px',
            color: '#FCFCFC',
            paddingBottom: '5px',
            textTransform: 'uppercase',
        },
        green: {
            color: 'black', // Aplicando la función darken() aquí es más complejo, por lo que he usado un color similar al green definido
        },
        alert: {
            fontWeight: '700',
            letterSpacing: '5px',
        },
        p: {
            marginTop: '-5px',
            fontSize: '20px',
            fontWeight: '100',
            color: 'white', // Similar a darken($dark, 10%)
            letterSpacing: '1px',
        },
        buttonDot: {
            cursor: 'pointer',
        },
        successBox: {
            position: 'absolute',
            width: '40%', // Ajusta el ancho del cuadro de éxito
            height: '120%', // Ajusta la altura del cuadro de éxito
            left: '30%', // Ajusta la posición izquierda del cuadro de éxito
            top: '50%', // Ajusta la posición superior del cuadro de éxito
            transform: 'translateY(-50%)', // Centra verticalmente el cuadro de éxito
            background: 'linear-gradient(to right bottom, rgb(21 221 141) 40%, rgb(9 90 21) 100%)',
            borderRadius: '20px',
            boxShadow: '5px 5px 20px rgba(203, 205, 211, 0.1)',
            perspective: '40px',
        },
    };

    return (
        <div style={{ paddingTop: '150px' }}>
        <div style={styles.container} id="container">
            <div style={styles.successBox} id="success-box">
                <div style={styles.buttonDot} className="dot"></div>
                <div style={styles.buttonDot} className="dot two"></div>
                <div className="face">
                    <div className="eye"></div>
                    <div className="eye right"></div>
                    <div className="mouth happy"></div>
                </div>
                <div className="shadow scale"></div>
                <div className="message">
                    <h1 style={{ ...styles.h1, ...styles.alert }}>Success!</h1>
                        <p style={styles.p}>We sent you a email with the order details!</p>
                        <p style={styles.p}>We are Nike </p>
                        <img style={{ width: '90px' }} src="./src/assets/logof.png" alt="" />
                        
                </div>
                <Link to="/">
                    <button style={styles.buttonDot} className="button-box">
                        <h1 style={{ ...styles.h1, ...styles.green }}>I want buy more!</h1>
                    </button>
                </Link>

            </div>
            </div>
        </div>
    );
};

export default SuccessBox;
