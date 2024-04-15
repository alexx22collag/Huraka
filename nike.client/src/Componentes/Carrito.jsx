import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import PaymentForm from './PaymentForm';

const ShoppingCart = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Nike Zenvy Strappy',
            category: 'Women',
            price: 54.99,
            quantity: 1,
            size: 'S',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cebf3216-f268-4530-93f4-f2ec753bc85c/zenvy-strappy-sujetador-deportivo-de-sujecion-ligera-con-almohadilla-pHLQKt.png',
        },
        {
            id: 2,
            name: 'Segunda equipacion Match Brasil 2024',
            category: 'Men',
            price: 149.99,
            quantity: 1,
            size: 'M',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/89fcda45-96c7-4b1a-b273-d88e90cfa38b/segunda-equipacion-match-brasil-2024-camiseta-de-futbol-authentic-dri-fit-adv-LV9QkS.png',
        },
        {
            id: 3,
            name: 'Nike Sportswear Lightweight Synthetic Fill',
            category: 'Kids',
            price: 59.99,
            quantity: 1,
            size: 'L',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e2f7294-d408-4029-8c00-a2434e374bb9/sportswear-lightweight-synthetic-fill-chaqueta-holgada-con-capucha-nino-a-JRpT6H.png',
        },
    ]);

    const removeProduct = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    };

    const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const shipping = 10.00;
    const tax = 21.00;
    const total = subtotal + shipping + tax;

    return (
        <div className="pb-5">
            <div className="container">
                <div className="row">
                    <div className="container" id="containerMen">
                        <h1 id="h1Men">Shopping Cart</h1>
                    </div>
                    <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                        {/* Shopping cart table */}
                        <div className="table-responsive">
                            <table className="table">
                                {/* Table Header */}
                                <thead>
                                    <tr>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="p-2 px-3 text-uppercase">Product</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="py-2 text-uppercase">Price</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="py-2 text-uppercase">Quantity</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="py-2 text-uppercase">Remove</div>
                                        </th>
                                    </tr>
                                </thead>
                                {/* Table Body */}
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <th scope="row" className="border-0">
                                                <div className="p-2">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        width="70"
                                                        className="img-fluid rounded shadow-sm"
                                                    />
                                                    <div className="ml-3 d-inline-block align-middle">
                                                        <h5 className="mb-0">
                                                            <a href="#" className="text-dark d-inline-block align-middle">
                                                                {product.name}
                                                            </a>
                                                        </h5>
                                                        <span className="text-muted font-weight-normal font-italic d-block">
                                                            Category: {product.category}
                                                        </span>
                                                        <span className="text-muted font-weight-normal font-italic d-block">
                                                            Size: {product.size}
                                                        </span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="border-0 align-middle">
                                                <strong>${product.price.toFixed(2)}</strong>
                                            </td>
                                            <td className="border-0 align-middle">
                                                <strong>{product.quantity}</strong>
                                            </td>
                                            <td className="border-0 align-middle">
                                                <a
                                                    href="#"
                                                    className="text-dark"
                                                    onClick={() => removeProduct(product.id)}
                                                >
                                                    <i className="fa fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* End */}
                    </div>
                </div>

                <div className="row py-5 p-4 bg-white rounded shadow-sm">
                    <div className="col-lg-6">
                        {/* Coupon Code Section */}
                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                            Coupon code
                        </div>
                        <div className="p-4">
                            <p className="font-italic mb-4">
                                If you have a coupon code, please enter it in the box below
                            </p>
                            <div className="input-group mb-4 border rounded-pill p-2">
                                <input
                                    type="text"
                                    placeholder="Apply coupon"
                                    aria-describedby="button-addon3"
                                    className="form-control border-0"
                                />
                                <div className="input-group-append border-0">
                                    <button
                                        id="button-addon3"
                                        type="button"
                                        className="btn btn-dark px-4 rounded-pill"
                                    >
                                        <i className="fa fa-gift mr-2"></i>Apply coupon
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Instructions for Seller Section */}
                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                            Instructions for seller
                        </div>
                        <div className="p-4">
                            <p className="font-italic mb-4">
                                If you have some information for the seller you can leave them in the
                                box below
                            </p>
                            <textarea name="" cols="30" rows="2" className="form-control"></textarea>
                        </div>
                    </div>
                    {/* Order Summary Section */}
                    <div className="col-lg-6">
                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                        <div className="p-4">
                            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                            <ul className="list-unstyled mb-4">
                                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>${subtotal.toFixed(2)}</strong></li>
                                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>${shipping.toFixed(2)}</strong></li>
                                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">IVA</strong><strong>${tax.toFixed(2)}</strong></li>
                                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                    <h5 className="font-weight-bold">${total.toFixed(2)}</h5>
                                </li>
                            </ul><Link to="/Payment" className="btn btn-dark rounded-pill py-2 btn-block">
                                Proceed to checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;