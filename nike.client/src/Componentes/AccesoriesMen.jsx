import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from './Button';


const AccesoriesMen = () => {
    const [start, setStart] = useState(true);
    const [end, setEnd] = useState(false);
    const sliderRef = useRef(null);

    const handleScroll = () => {
        setStart(sliderRef.current.scrollLeft === 0);
        setEnd(Math.abs((sliderRef.current.scrollWidth - sliderRef.current.offsetWidth) - sliderRef.current.scrollLeft) < 5);
    };

    useEffect(() => {
        const slider = sliderRef.current;
        slider.addEventListener('scroll', handleScroll, { passive: true });

        // Función para desplazar el slider automáticamente
        const autoScroll = () => {
            if (sliderRef.current) {
                sliderRef.current.scrollBy({
                    left: sliderRef.current.offsetWidth,
                    behavior: 'smooth',
                });
                if (end) {
                    sliderRef.current.scrollTo({
                        left: 0,
                        behavior: 'smooth',
                    });
                }
            }
        };

        // Iniciar el intervalo para desplazar el slider cada 5 segundos
        const interval = setInterval(autoScroll, 3000);

        // Limpiar el intervalo cuando se desmonte el componente
        return () => {
            slider.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, [end]);


    const baseUrl = "https://localhost:7218/api/Products/category/Men/subcategory/Accesories";
    const [data, setData] = useState([]);

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



    return (
        <div className="slider" style={{ paddingTop: '150px' }}>
            <div className="container" id="containerMen">
                <h1 id="h1Men">Men's Nike</h1>
                <p id="pMen">Just Do It.</p>
                <p id="pMen">Si nadie piensa que puedes, entonces tienes que hacerlo.</p>
            </div>

            <div className="slider__content" ref={sliderRef}>
                <div className="slider__item">
                    <img className="slider__image" src="./src/assets/footbalM.jpg" alt="Image" />
                    <div className="slider__info">
                        <h2>Football</h2>
                    </div>
                </div>
                <div className="slider__item">
                    <img className="slider__image" src="./src/assets/Snkm.jpg" alt="Image" />
                    <div className="slider__info">
                        <h2>Sneakers</h2>
                    </div>
                </div>
                <div className="slider__item">
                    <img className="slider__image" src="./src/assets/skbM.jpeg" alt="Image" />
                    <div className="slider__info">
                        <h2>SkateBoard</h2>
                    </div>
                </div>
                <div className="slider__item">
                    <img className="slider__image" src="./src/assets/golfM.jpg" alt="Image" />
                    <div className="slider__info">
                        <h2>Golf</h2>
                    </div>
                </div>
                <div className="slider__item">
                    <img className="slider__image" src="./src/assets/boxeoM.png" alt="Image" />
                    <div className="slider__info">
                        <h2>Boxeo</h2>
                    </div>
                </div>
                <div className="slider__item">
                    <img className="slider__image" src="./src/assets/trainingM.jpg" alt="Image" />
                    <div className="slider__info">
                        <h2>Training</h2>
                    </div>
                </div>
                {/* Repite el div anterior para cada item del slider */}
            </div>
            <div className="slider__nav" style={{ display: 'flex', justifyContent: 'center' }}>
                <button className={`slider__nav__button ${start ? '' : 'slider__nav__button--active'}`} onClick={() => sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth * -1, behavior: 'smooth' })}>Previous</button>
                <button className={`slider__nav__button ${end ? '' : 'slider__nav__button--active'}`} onClick={() => sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' })}>Next</button>
            </div>
            <nav >
                <div className="text-center">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/AccesoriesMen">
                                Accesories - Explore our latest collection
                            </Link>
                        </li>
                        <li>
                            <Link to="/FootwearMen">
                                Footwear - Find your perfect pair
                            </Link>
                        </li>
                        <li>
                            <Link to="/ClothesMen">
                                Clothes - Discover the collection
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className="container-fluid my-5">
                <div className="row">
                    {data.map((product) => (
                        <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                            <div className="card border-0 position-relative h-100 card-listing hover-trigger">
                                <div className="card-header">
                                    {/* Card Images */}
                                    <figure className="position-relative overflow-hidden d-block bg-light">
                                        <img
                                            className="w-100 img-fluid position-relative z-index-10"
                                            title=""
                                            src={product.image}
                                            alt={product.productName}
                                        />
                                    </figure>
                                    <figure className="position-absolute z-index-20 start-0 top-0 hover-show bg-light">
                                        <img
                                            className="w-100 img-fluid"
                                            title=""
                                            src={product.image2}
                                            alt={product.productName}
                                        />
                                    </figure>
                                </div>

                                <div className="card-body px-0 text-center">
                                    <h4>
                                        <strong>{product.productName}</strong>
                                    </h4>
                                    <p>{product.description}</p>
                                    <div className="d-flex justify-content-center align-items-center mx-auto mb-1 colspan-3 md-3">
                                        <div className="rating position-relative d-table">
                                            <div className="position-absolute stars" style={{ width: '90%' }}>
                                                <i className="ri-star-fill text-dark mr-1"></i>
                                                <i className="ri-star-fill text-dark mr-1"></i>
                                                <i className="ri-star-fill text-dark mr-1"></i>
                                                <i className="ri-star-fill text-dark mr-1"></i>
                                                <i className="ri-star-fill text-dark mr-1"></i>
                                            </div>
                                            <div className="stars">
                                                <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                                            </div>
                                        </div>
                                        <span className="ms-2 text-muted fw-medium"> 4.7 (456)</span>
                                        <div className="select-container">
                                            <button className="btn btn-outline-danger btn-sm mx-2" onClick={() => handleDeleteProduct(product.id)}>
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                    {/* /Review Stars */}
                                    <p className="fw-bolder m-0 mt-2">${product.price}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <select className="custom-select form-select-sm">
                                            <option selected disabled>
                                                SIZE
                                            </option>
                                            <option value="1">XS</option>
                                            <option value="2">S</option>
                                            <option value="3">M</option>
                                            <option value="4">L</option>
                                            <option value="5">XL</option>
                                        </select>
                                        <Button />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AccesoriesMen;