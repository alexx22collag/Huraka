import React, { useState, useEffect } from 'react';
import { Button, CardBody } from 'reactstrap';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import './index.css';
import './style.scss';
//Estructura
import Header from './Componentes/Header.jsx';
import Body from './Componentes/Body.jsx';
import History from './Componentes/History.jsx';
import Runner from './Componentes/Runner.jsx';
import Team from './Componentes/Team.jsx';
import Contact from './Componentes/Contact.jsx';
import Footer from './Componentes/Footer.jsx';
import News from './Componentes/News.jsx';
import Portfolio from './Componentes/Portfolio.jsx';
//Men
import Men from './Componentes/Men.jsx';
import FootwearMen from './Componentes/FootwearMen.jsx';
import ClothesMen from './Componentes/ClothesMen.jsx';
import AccesoriesMen from './Componentes/AccesoriesMen.jsx';


//Women
import Women from './Componentes/Women.jsx';
import AccesoriesWomen from './Componentes/AccesoriesWomen.jsx';
import ClothesWomen from './Componentes/ClothesWomen.jsx';
import FootwearWomen from './Componentes/FootwearWomen.jsx';
//Kids
import Kids from './Componentes/Kids.jsx';
import ClothesKids from './Componentes/ClothesKids.jsx';
import AccesoriesKids from './Componentes/AccesoriesKids.jsx';
import FootwearKids from './Componentes/FootwearKids.jsx';
//Ver productos
import TablaCrear from './Componentes/TablaCrear.jsx';
//Carrito
import Carrito from './Componentes/Carrito.jsx';
import rtItems from './Componentes/cartItems';
import SignInUpForm from './Componentes/SignInUpForm';

const App = () => {


    return (
        <Router>
            <Header />
            <Routes>
                {/*<Route path="/" element={<SignInUpForm />} />*/}
                <Route path="/Men" element={<Men />} />
                <Route path="/rtItems" element={<rtItems />} />
                <Route path="/Women" element={<Women/>} />
                <Route path="/Kids" element={<Kids/>} />
                <Route path="/TablaCrear" element={<TablaCrear />} />
                <Route path="/Carrito" element={<Carrito/>}/>
                <Route path="/SignInUpForm" element={<SignInUpForm />}/>
                <Route path="/history" element={<History />} />
                <Route path="/News" element={<News />} />
                
                <Route path="/ClothesMen" element={<ClothesMen />} />
                <Route path="/FootwearMen" element={<FootwearMen />} />
                <Route path="/AccesoriesMen" element={<AccesoriesMen />} />

                <Route path="/AccesoriesWomen" element={<AccesoriesWomen />} />
                <Route path="/ClothesWomen" element={<ClothesWomen />} />
                <Route path="/FootwearWomen" element={<FootwearWomen />} />

                <Route path="/ClothesKids" element={<ClothesKids />} />
                <Route path="/AccesoriesKids" element={<AccesoriesKids />} />
                <Route path="/FootwearKids" element={<FootwearKids />} />

                <Route path="/" element={
                    <>
                        
                        <Body />
                        
                        <Portfolio />
                            <Runner />

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
