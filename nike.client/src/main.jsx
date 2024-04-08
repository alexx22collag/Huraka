import React, { useState, useEffect } from 'react';
import { Button, CardBody } from 'reactstrap';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Componentes/Header.jsx';
import './index.css';
import './style.scss';
import Body from './Componentes/Body.jsx';
import Clothes from './Componentes/Clothes.jsx';
import Portfolio from './Componentes/Portfolio.jsx';
import History from './Componentes/History.jsx';
import Team from './Componentes/Team.jsx';
import Contact from './Componentes/Contact.jsx';
import Footer from './Componentes/Footer.jsx';
import Men from './Componentes/Men.jsx'; 
import Women from './Componentes/Women.jsx'; // Asegúrate de importar los componentes
import Kids from './Componentes/Kids.jsx';
import News from './Componentes/News.jsx';
import Crear from './Componentes/Crear.jsx';
import TablaCrear from './Componentes/TablaCrear.jsx';



const App = () => {
    
    //Url Todos 
    const [products, setProducts] = useState([]);
    const mostrarProducts = async () => {
        const response = await fetch("https://localhost:7218/api/Products");
        if (response.ok) {
            const data = await response.json();
            setProducts(data)
        } else {
            console.log("Error en la lista")
        }
    }
    useEffect(() => {
        mostrarProducts()
    }, [])

    //Crear

   

    //Url Men
    const [productsMen, setProductsMen] = useState([]);
    const mostrarProductsMen = async () => {
        const response = await fetch("https://localhost:7218/api/Products/category/Men");
        if (response.ok) {
            const data = await response.json();
            setProductsMen(data)
        } else {
            console.log("Error en la lista")
        }
    }
    useEffect(() => {
        mostrarProductsMen()
    }, [])
    //Url Women
    const [productsWomen, setProductsWomen] = useState([]);
    const mostrarProductsWomen = async () => {
        const response = await fetch("https://localhost:7218/api/Products/category/Women");
        if (response.ok) {
            const data = await response.json();
            setProductsWomen(data)
        } else {
            console.log("Error en la lista")
        }
    }
    useEffect(() => {
        mostrarProductsWomen()
    }, [])
    //Url Kids
    const [productsKids, setProductsKids] = useState([]);
    const mostrarProductsKids = async () => {
        const response = await fetch("https://localhost:7218/api/Products/category/Kids");
        if (response.ok) {
            const data = await response.json();
            setProductsKids(data)
        } else {
            console.log("Error en la lista")
        }
    }
    useEffect(() => {
        mostrarProductsKids()
    }, [])

    //Url
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/Men" element={<Men data={productsMen} />} />
                <Route path="/Women" element={<Women data={productsWomen} />} />
                <Route path="/Kids" element={<Kids data={productsKids} />} />
                <Route path="/TablaCrear" element={<TablaCrear data={products} />} />
                <Route path="/history" element={<History />} />
                <Route path="/News" element={<News />} />
                <Route path="/" element={
                    <>
                        
                        <Body />
                        
                        <Portfolio />
                        <History/>
                        <Team />
                        <Contact />
                        
                        
                    </>
                } />
            </Routes>

            <Footer />
        </Router>
        //<>
        //                <CardBody>
        //                    <Button onClick={() => setMostrarModal(!mostrarModal)}>Nuevo Producto</Button>
        //                    <TablaCrear data={products} />
        //                </CardBody>
        //                <Crear mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} guardarProduct={guardarProduct} />
        //            </>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
