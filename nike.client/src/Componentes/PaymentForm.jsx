import { React, useState } from 'react';
import { Link } from 'react-router-dom'; 

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        nameOnCard: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: ''
    });


    const [formCompleted, setFormCompleted] = useState(false);


    const [formErrors, setFormErrors] = useState({});

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {};
        for (const key in formData) {
            if (!formData[key]) {
                errors[key] = 'This field is required';
            }
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            // Proceed with payment submission
            // Add your payment submission logic here
            console.log('Form submitted successfully!');
            setFormCompleted(true); // Establece formCompleted en true si no hay errores en el formulario
        } else {
            console.log('Form has errors, please fill out all fields.');
            setFormCompleted(false); // Establece formCompleted en false si hay errores en el formulario
        }
    };

    // Function to handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' });
    };


    return (
        <div className="container mt-5 px-5" style={{ paddingTop: '110px' }}>
           <form onSubmit={handleSubmit}>
                <style>
                    {`
                        .card {
                            border: none;
                        }
                        .form-control {
                            border-bottom: 2px solid #eee !important;
                            border: none;
                            font-weight: 600;
                        }
                        .form-control:focus {
                            color: #495057;
                            background-color: #fff;
                            border-color: #8bbafe;
                            outline: 0;
                            box-shadow: none;
                            border-radius: 0px;
                            border-bottom: 2px solid blue !important;
                        }
                        .inputbox {
                            position: relative;
                            margin-bottom: 20px;
                            width: 100%;
                        }
                        .inputbox span {
                            position: absolute;
                            top: 7px;
                            left: 11px;
                            transition: 0.5s;
                        }
                        .inputbox i {
                            position: absolute;
                            top: 13px;
                            right: 8px;
                            transition: 0.5s;
                            color: #3F51B5;
                        }
                        input::-webkit-outer-spin-button,
                        input::-webkit-inner-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                        }
                        .inputbox input:focus~span {
                            transform: translateX(-0px) translateY(-15px);
                            font-size: 12px;
                        }
                        .inputbox input:valid~span {
                            transform: translateX(-0px) translateY(-15px);
                            font-size: 12px;
                        }
                        .card-blue {
                            background-color: black;
                        }
                        .hightlight {
                            background-color: #5737d9;
                            padding: 10px;
                            border-radius: 10px;
                            margin-top: 15px;
                            font-size: 14px;
                        }
                        .yellow {
                            color: #fdcc49; 
                        }
                        .decoration {
                            text-decoration: none;
                            font-size: 14px;
                        }
                        .btn-success {
                            color: #fff;
                            background-color: #492bc4;
                            border-color:#492bc4;
                        }
                        .btn-success:hover {
                            color: #fff;
                            background-color:#492bc4;
                            border-color: #492bc4;
                        }
                        .decoration:hover {
                            text-decoration: none;
                            color: #fdcc49; 
                        }
                    `}
                </style>
                <div className="mb-4">
                    <h2>Confirm order and pay</h2>
                    <span>Please make the payment, after that you can enjoy all the features and benefits.</span>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="card p-3">
                            <h6 className="text-uppercase">Payment details</h6>
                            <div className="inputbox mt-3">
                                <input
                                    type="text"
                                    name="nameOnCard"
                                    value={formData.nameOnCard}
                                    onChange={handleChange}
                                    className={`form-control ${formErrors.nameOnCard && 'is-invalid'}`}
                                    required
                                />
                                <span>Name on card</span>
                                {formErrors.nameOnCard && <div className="invalid-feedback">{formErrors.nameOnCard}</div>}
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inputbox mt-3 mr-2">
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            value={formData.cardNumber}
                                            onChange={handleChange}
                                            className={`form-control ${formErrors.cardNumber && 'is-invalid'}`}
                                            required
                                        />
                                        <i className="fa fa-credit-card"></i>
                                        <span>Card Number</span>
                                        {formErrors.cardNumber && <div className="invalid-feedback">{formErrors.cardNumber}</div>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex flex-row">
                                        <div className="inputbox mt-3 mr-2">
                                            <input
                                                type="text"
                                                name="expiry"
                                                value={formData.expiry}
                                                onChange={handleChange}
                                                className={`form-control ${formErrors.expiry && 'is-invalid'}`}
                                                required
                                            />
                                            <span>Expiry</span>
                                            {formErrors.expiry && <div className="invalid-feedback">{formErrors.expiry}</div>}
                                        </div>
                                        <div className="inputbox mt-3 mr-2">
                                            <input
                                                type="text"
                                                name="cvv"
                                                value={formData.cvv}
                                                onChange={handleChange}
                                                className={`form-control ${formErrors.cvv && 'is-invalid'}`}
                                                required
                                            />
                                            <span>CVV</span>
                                            {formErrors.cvv && <div className="invalid-feedback">{formErrors.cvv}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 mb-4">
                                <h6 className="text-uppercase">Billing Address</h6>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <input
                                                type="text"
                                                name="streetAddress"
                                                value={formData.streetAddress}
                                                onChange={handleChange}
                                                className={`form-control ${formErrors.streetAddress && 'is-invalid'}`}
                                                required
                                            />
                                            <span>Street Address</span>
                                            {formErrors.streetAddress && <div className="invalid-feedback">{formErrors.streetAddress}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className={`form-control ${formErrors.city && 'is-invalid'}`}
                                                required
                                            />
                                            <span>City</span>
                                            {formErrors.city && <div className="invalid-feedback">{formErrors.city}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                className={`form-control ${formErrors.state && 'is-invalid'}`}
                                                required
                                            />
                                            <span>State/Province</span>
                                            {formErrors.state && <div className="invalid-feedback">{formErrors.state}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <input
                                                type="text"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                                className={`form-control ${formErrors.zipCode && 'is-invalid'}`}
                                                required
                                            />
                                            <span>Zip code</span>
                                            {formErrors.zipCode && <div className="invalid-feedback">{formErrors.zipCode}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <h6 className="text-uppercase">Shipping Address</h6>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <input
                                                type="text"
                                                name="streetAddress"
                                                value={formData.streetAddress}
                                                onChange={handleChange}
                                                className={`form-control ${formErrors.streetAddress && 'is-invalid'}`}
                                                required
                                            />
                                            <span>Street Address</span>
                                            {formErrors.streetAddress && <div className="invalid-feedback">{formErrors.streetAddress}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className={`form-control ${formErrors.city && 'is-invalid'}`}
                                                required
                                            />
                                            <span>City</span>
                                            {formErrors.city && <div className="invalid-feedback">{formErrors.city}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                className={`form-control ${formErrors.state && 'is-invalid'}`}
                                                required
                                            />
                                            <span>State/Province</span>
                                            {formErrors.state && <div className="invalid-feedback">{formErrors.state}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <input
                                                type="text"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                                className={`form-control ${formErrors.zipCode && 'is-invalid'}`}
                                                required
                                            />
                                            <span>Zip code</span>
                                            {formErrors.zipCode && <div className="invalid-feedback">{formErrors.zipCode}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 mb-4 d-flex justify-content-between">
                            <Link to="/Carrito" className="btn btn-dark rounded-pill py-2 btn-block">
                                Retun to cart
                            </Link>
                            <Link to="/Success" className="btn btn-success px-3">Pay $295.97</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-blue p-3 text-white mb-3">
                            <span>You have to pay</span>
                            <div className="d-flex flex-row align-items-end mb-3">
                                <h1 className="mb-0 yellow">$295</h1>
                                <span>.97</span>
                            </div>
                            <span>After completing your payment with Nike, you'll unlock access to all the features and perks. Enjoy the benefits of your purchase and feel free to explore everything Nike has to offer. </span>
                            <a href="#" className="yellow decoration">About Returns</a>
                            <div className="hightlight">
                                <span>Nike accepts returns within 30 days of purchase. Please ensure that the items are in their original condition with tags attached for a hassle-free return process. Contact our customer service for further assistance.</span>
                            </div>
                        </div>
                    </div>

                    </div>
            </form>
           
        </div>

    );
};

export default PaymentForm;
