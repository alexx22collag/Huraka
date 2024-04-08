import React, { useState, useEffect } from 'react';
import { Button, CardBody } from 'reactstrap';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Componentes/Header.jsx';
import './index.css';
import './style.scss';
import Body from './Componentes/Body.jsx';
import Portfolio from './Componentes/Portfolio.jsx';
import History from './Componentes/History.jsx';
import Runner from './Componentes/Runner.jsx';
import Team from './Componentes/Team.jsx';
import Contact from './Componentes/Contact.jsx';
import Footer from './Componentes/Footer.jsx';
import Men from './Componentes/Men.jsx'; 
import Women from './Componentes/Women.jsx'; // Asegúrate de importar los componentes
import Kids from './Componentes/Kids.jsx';
import News from './Componentes/News.jsx';
import TablaCrear from './Componentes/TablaCrear.jsx';



const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/Men" element={<Men />} />
                <Route path="/Women" element={<Women/>} />
                <Route path="/Kids" element={<Kids/>} />
                <Route path="/TablaCrear" element={<TablaCrear />} />
                <Route path="/history" element={<History />} />
                <Route path="/News" element={<News />} />
                <Route path="/" element={
                    <>
                        
                        <Body />
                        
                        <Portfolio />
                        <div>
                            <Runner />
                        </div>
                        <History/>
                        <Team />
                        <Contact />
                        
                        
                    </>
                } />
            </Routes>

            <Footer />
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
