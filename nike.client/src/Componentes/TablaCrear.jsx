import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, CardBody, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


const TablaCrear = () => {
    const [data, setData] = useState([]);

    const baseUrl = "https://localhost:7218/api/Products";

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

    //insertar 
    const abrirCerrarModalInsertar = () => setModalInsertar(!modalInsertar);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [productSelected, setProductSelected] = useState({
        productId: '',
        productName: '',
        description: '',
        image: '',
        stock: '',
        image2: '',
        category: '',
        subcategory: '',
        price: ''
    })


    const handleChange = e => {
        const { name, value } = e.target;
        setProductSelected({
            ...productSelected, [name]: value
        });
        console.log(productSelected);
    }

    const peticionPost = async () => {
        delete productSelected.id;
        await axios.post(baseUrl, productSelected)
            .then(response => {
                setData(data.concat(response.data));
                abrirCerrarModalInsertar();
            }).catch(error => {
                console.log(error);
            })
    }

    //borrar
    const [modalEliminar, setModalEliminar] = useState(false);
    const abrirCerrarModalEliminar = () => setModalEliminar(!modalEliminar);
    const seleccionarProduct = (product, caso) => {
        setProductSelected(product);
        (caso == "Editar") ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
    }
    const peticionDelete = async () => {
        await axios.delete(baseUrl + "/" + productSelected.productId)
            .then(response => {
                setData(data.filter(p => p.productId !== response.data));
                abrirCerrarModalEliminar();
            }).catch(error => {
                console.log(error);
            })
    }

    //editar
    const [modalEditar, setModalEditar] = useState(false);
    const abrirCerrarModalEditar = () => setModalEditar(!modalEditar);
    const peticionPut = async () => {
        await axios.put(baseUrl + "/" + productSelected.productId, productSelected)
            .then(response => {
                var respuesta = response.data;
                var dataAuxiliar = data;
                dataAuxiliar.map(p => {
                    if (p.productId === productSelected.price) {
                        p.name = respuesta.productName;
                        p.category = respuesta.category;
                        p.subcategory = respuesta.subcategory;
                        p.description = respuesta.description;
                        p.stock = respuesta.stock;
                        p.image = respuesta.image;
                        p.image2 = respuesta.image2;
                        p.price = respuesta.price
                    }
                });
                abrirCerrarModalEditar();
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="slider" style={{ paddingTop: '150px' }}>
            <div className="container" id="containerMen">
                <h1 id="h1Men">Men's Nike</h1>
                <p id="pMen">Just Do It.</p>
                <p id="pMen">Si nadie piensa que puedes, entonces tienes que hacerlo.</p>
            </div>
            <CardBody>
                <Button onClick={() => abrirCerrarModalInsertar()}>Nuevo Producto</Button>
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
                                <td className="text-right">${Number(product.price).toFixed(2)}</td>
                                <td>{product.stock}</td>
                                <td>{product.category}</td>
                                <td>{product.subcategory}</td>
                                <td>
                                    <button className="btn btn-info " onClick={() => seleccionarProduct(product, "Editar")}>Edit</button>
                                    <button className="btn btn-danger " onClick={() => seleccionarProduct(product, "Eliminar")} >Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
            <div>
                <Modal isOpen={modalInsertar}>
                    <ModalHeader>Insert Product</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>Name</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="name" onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Description</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="description" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Image 1</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="image" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Image 2</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="image2" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Stock</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="stock" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>category</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="category" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Subcategory</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="subcategory" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Price</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="price" onChange={handleChange} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={() => peticionPost()} >Insert</button>
                        <button className="btn btn-danger" onClick={() => abrirCerrarModalInsertar()}>Cancel</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={modalEditar}>
                    <ModalHeader>Edit Product</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>Id</label>
                            <input type="text" readOnly className="form-control" value={productSelected && productSelected.productId} />
                            <label>Name</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="name" onChange={handleChange} value={productSelected && productSelected.productName} />

                            <label>Description</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="description" onChange={handleChange} value={productSelected && productSelected.description} />

                            <label>Image 1</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="image" onChange={handleChange} value={productSelected && productSelected.image} />

                            <label>Image 2</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="image2" onChange={handleChange} value={productSelected && productSelected.image2} />

                            <label>Stock</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="stock" onChange={handleChange} value={productSelected && productSelected.stock} />
                            <label>Category</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="category" onChange={handleChange} value={productSelected && productSelected.category} />
                            <label>Subcategory</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="subcategory" onChange={handleChange} value={productSelected && productSelected.subcategory} />
                            <label>Price</label><br></br>
                            <input type="text"
                                className="form-control"
                                name="price" onChange={handleChange} value={productSelected && productSelected.price} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={() => peticionPut()}>Submit</button>
                        <button className="btn btn-danger" onClick={() => abrirCerrarModalEditar()}>Cancel</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={modalEliminar}>
                    <ModalHeader>Delete Product</ModalHeader>
                    <ModalBody>Are you sure to delete product?</ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={() => peticionDelete()}>Yes</button>
                        <button className="btn btn-danger" onClick={() => abrirCerrarModalEliminar()} >No</button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default TablaCrear;
