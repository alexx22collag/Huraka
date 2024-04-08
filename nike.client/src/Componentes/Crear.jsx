import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { useState } from 'react';

    const modeloProducto = {
        productName: "",
        description: "",
        image: "",
        image2: "",
        category: "",
        stock:"",
        subcategory: "",
        price: ""
    }

    const Crear = ({ mostrarModal, setMostrarModal, guardarProduct }) => {

        const [product, setProduct] = useState(modeloProducto);

        const actualizaDato = (e) => {
            console.log(e.target.name + " : " + e.target.value)
            setProduct(
                {
                    ...product,
                    [e.target.name]: e.target.value
                }
            )
        }

        const enviarDatos = () => {
            if (product.productId == 0) {
                guardarProduct(product)
            }
        }

    return (

        <Modal isOpen={mostrarModal }>
            <ModalHeader>
                Nuevo Producto
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="productName" onChange={(e) => actualizaDato(e)} value={product.productName} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Descripcion</Label>
                        <Input name="description" onChange={(e) => actualizaDato(e)} value={product.description} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Imagen 1</Label>
                        <Input name="image" onChange={(e) => actualizaDato(e)} value={product.image} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Imagen 2</Label>
                        <Input name="image2" onChange={(e) => actualizaDato(e)} value={product.image2} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Precio</Label>
                        <Input name="price" onChange={(e) => actualizaDato(e)} value={product.price} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Stock</Label>
                        <Input name="stock" onChange={(e) => actualizaDato(e)} value={product.stock} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Category</Label>
                        <Input name="category" onChange={(e) => actualizaDato(e)} value={product.category} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Subcategory</Label>
                        <Input name="subcategory" onChange={(e) => actualizaDato(e)} value={product.subcategory} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos } >Guardar</Button>
                <Button color="danger " size="sm" onClick={() => setMostrarModal(!mostrarModal)}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default Crear;