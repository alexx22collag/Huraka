import { Table, Button, CardBody } from 'reactstrap';
import Crear from './Crear.jsx';
import React, { useState } from 'react';
const TablaCrear = ({ data }) => {

    const [mostrarModal, setMostrarModal] = useState(false);
    const guardarProduct = async (product) => {
        delete product.id;
        const response = await fetch("https://localhost:7218/api/Products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(product)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarProducts();
        }
    }
    return (
        <div className="slider" style={{ paddingTop: '150px' }}>
            <div className="container" id="containerMen">
                <h1 id="h1Men">Men's Nike</h1>
                <p id="pMen">Just Do It.</p>
                <p id="pMen">Si nadie piensa que puedes, entonces tienes que hacerlo.</p>
            </div>
            <CardBody>
                <Button onClick={() => setMostrarModal(!mostrarModal)}>Nuevo Producto</Button>
                <Crear mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} guardarProduct={guardarProduct} />
            </CardBody>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Image1</th>
                        <th>Image2</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Subcategory</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length < 1 ? (
                        <tr>
                            <td colSpan="10">Sin Registros</td>
                        </tr>
                    ) : (
                        data.map((product) => (
                            <tr key={product.id}>
                                <td>{product.productName}</td>
                                <td>{product.description}</td>
                                <td>
                                    <img
                                        className="w-100 img-fluid position-relative z-index-10"
                                        title=""
                                        src={product.image}
                                        alt="Product Image"
                                    />
                                </td>
                                <td>
                                    <img
                                        className="w-100 img-fluid position-relative z-index-10"
                                        title=""
                                        src={product.image2}
                                        alt="Product Image"
                                    />
                                </td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.category}</td>
                                <td>{product.subcategory}</td>
                                <td>
                                    <p> <Button variant="primary">Editar</Button>
                                        <Button variant="danger">Eliminar</Button></p>
                                   
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>

        </div>
    )
}
export default TablaCrear;