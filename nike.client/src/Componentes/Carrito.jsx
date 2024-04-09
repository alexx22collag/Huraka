import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
    const products = [
        {
            id: 1,
            name: 'Timex Unisex Originals',
            category: 'Watches',
            price: 79.00,
            quantity: 3,
            image: 'https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg',
        },
        {
            id: 2,
            name: 'Lumix camera lense',
            category: 'Electronics',
            price: 79.00,
            quantity: 3,
            image: 'https://bootstrapious.com/i/snippets/sn-cart/product-2.jpg',
        },
        {
            id: 3,
            name: 'Gray Nike running shoe',
            category: 'Fashion',
            price: 79.00,
            quantity: 3,
            image: 'https://bootstrapious.com/i/snippets/sn-cart/product-3.jpg',
        },
    ];

    const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const shipping = 10.00;
    const tax = 0.00;
    const total = subtotal + shipping + tax;

    return (

        <div className="pb-5 ">
            <div className="container" id="containerMen">
                <h1 id="h1Men">Shopping Cart</h1>
                
            </div>
            <div className="container">
                <div className="row">
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
                                                <a href="#" className="text-dark">
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
                                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>${tax.toFixed(2)}</strong></li>
                                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                    <h5 className="font-weight-bold">${total.toFixed(2)}</h5>
                                </li>
                            </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;