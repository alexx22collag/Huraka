import React from 'react';

const Portfolio2 = ({ show, modalId, onClose }) => {
    return (
        <>
            {show && modalId === 'portfolioModal1' && (
                <div
                    className="portfolio-modal modal fade show"
                    id="portfolioModal1"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="false"
                    style={{ display: 'block' }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal">
                                <img src="./src/assets/close.png" style={{ height: '20px' }} alt="Close modal" type="button" onClick={onClose} />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            <h2 className="text-uppercase" style={{ color: 'black' }}>
                                                Jacquemus x Nike
                                            </h2>
                                            
                                            <img className="img-fluid" src="./src/assets/jacquemus1.jpg" alt="" />
                                            <p>
                                                Nike joins forces with luxurious French label Jacquemus once again, expanding on their previous collaborations that began arriving just over a year ago.
                                                After working on the Humara last year, Jacquemus and Nike have combined the iconic Air Force 1 with the ACG Terra to bring us the J Force 1 Low LX SP.
                                            </p>
                                            <ul className="list-inline">
                                                <li style={{ color: 'black' }}>
                                                    <strong>Client:</strong>
                                                    Threads
                                                </li>
                                                <li style={{ color: 'black' }}>
                                                    <strong>Category:</strong>
                                                    Clothes
                                                </li>
                                            </ul>
                                            <button
                                                className="btn btn-primary btn-xl text-uppercase"
                                                data-bs-dismiss="modal"
                                                type="button"
                                                onClick={onClose}
                                            >
                                                <i className="fas fa-xmark me-1"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {show && modalId === 'portfolioModal2' && (
                <div
                    className="portfolio-modal modal fade show"
                    id="portfolioModal2"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="false"
                    style={{ display: 'block' }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal">
                                <img src="./src/assets/close.png" style={{ height: '20px' }} alt="Close modal" type="button" onClick={onClose} />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            <h2 className="text-uppercase" style={{ color: 'black' }}>
                                                The Nike FC Barcelona x Patta Collection
                                            </h2>
                                            
                                            <img className="img-fluid d-block mx-auto" src="./src/assets/patta2.jpg" alt="..." />
                                            <p>
                                                The beating heart of any football club is its fans. Now, the biggest sports club in the world is celebrating that lifeblood with a capsule that unites as it invites in a new generation:
                                                the Nike FC Barcelona x Patta collection, which includes select apparel pieces and a limited-edition Air Max Plus.
                                            </p>
                                            <ul className="list-inline">
                                                <li style={{ color: 'black' }}>
                                                    <strong>Date:</strong>
                                                    10/01/2024
                                                </li>
                                                <li style={{ color: 'black' }}>
                                                    <strong>Category:</strong>
                                                    Collaborations
                                                </li>
                                            </ul>
                                            <button
                                                className="btn btn-primary btn-xl text-uppercase"
                                                data-bs-dismiss="modal"
                                                type="button"
                                                onClick={onClose}
                                            >
                                                <i className="fas fa-xmark me-1"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {show && modalId === 'portfolioModal3' && (
                <div
                    className="portfolio-modal modal fade show"
                    id="portfolioModal3"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="false"
                    style={{ display: 'block' }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal">
                                <img src="./src/assets/close.png" style={{ height: '20px' }} alt="Close modal" type="button" onClick={onClose} />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            <h2 className="text-uppercase">
                                                B.I.L.L. is Nike's latest experiment
                                            </h2>
                                            
                                            <video className="img-fluid d-block mx-auto" autoPlay controls>
                                                <source src="./src/assets/video2.mp4" type="video/mp4" />
                                                Tu navegador no soporta el elemento de video.
                                            </video>
                                            <p>
                                                Nike's circular vision includes products that are made with the intention of being reused, remade, rediscovered, and loved again as something brand new.
                                                Extending the life of a product is a key component of that circular future. Giving a product a second life reduces its environmental impact on the planet.
                                                This insight is what led to Nike's latest innovation at retail: B.I.L.L., Bot Initiated Longevity Lab, debuting at Nike Town London.
                                            </p>
                                            <ul className="list-inline">
                                                <li style={{ color: 'black' }}>
                                                    <strong>Date:</strong>
                                                    15/11/2023
                                                </li>
                                                <li style={{ color: 'black' }}>
                                                    <strong>Category:</strong>
                                                    News
                                                </li>
                                            </ul>
                                            <button
                                                className="btn btn-primary btn-xl text-uppercase"
                                                data-bs-dismiss="modal"
                                                type="button"
                                                onClick={onClose}
                                            >
                                                <i className="fas fa-xmark me-1"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {show && modalId === 'portfolioModal4' && (
                <div
                    className="portfolio-modal modal fade show"
                    id="portfolioModal4"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="false"
                    style={{ display: 'block' }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal">
                                <img src="./src/assets/close.png" style={{ height: '20px' }} alt="Close modal" type="button" onClick={onClose} />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            <h2 className="text-uppercase" style={{ color: 'black' }}>
                                                Erling Haaland Signs With Nike
                                            </h2>
                                            
                                            <img className="img-fluid d-block mx-auto" src="./src/assets/haaland2.jpg" alt="..." />
                                            <p>
                                                Since debuting for his hometown club, Bryne, in Norway, Haaland has progressed through league play in Austria, Germany and England,
                                                proving himself a force of nature by becoming the youngest player (at 22 years and 236 days) to score 30 goals in Europe's premier club competition.
                                                He's now on pace to break season goal-scoring records for his current club and the Premier League.
                                            </p>
                                            <ul className="list-inline">
                                                <li style={{ color: 'black' }}>
                                                    <strong>Date:</strong>
                                                    10/01/2024
                                                </li>
                                                <li style={{ color: 'black' }}>
                                                    <strong>Category:</strong>
                                                    Football
                                                </li>
                                            </ul>
                                            <button
                                                className="btn btn-primary btn-xl text-uppercase"
                                                data-bs-dismiss="modal"
                                                type="button"
                                                onClick={onClose}
                                            >
                                                <i className="fas fa-xmark me-1"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {show && modalId === 'portfolioModal5' && (
                <div
                    className="portfolio-modal modal fade show"
                    id="portfolioModal5"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="false"
                    style={{ display: 'block' }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal">
                                <img src="./src/assets/close.png" style={{ height: '20px' }} alt="Close modal" type="button" onClick={onClose} />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            <h2 className="text-uppercase" style={{ color: 'black' }}>
                                                Nike AU Collection
                                            </h2>
                                           
                                            <img className="img-fluid d-block mx-auto" src="./src/assets/au2.jpg" alt="..." />
                                            <p>
                                                The women's collection features a range of hemp and fleece crews, jackets, tracksuit pants and T-shirts in brown and amber tones, as well limited-edition versions of the Air Max 270,
                                                Dunk Low and Air Max 90. Inspired by the rugged Australian landscape, it reimagines Nike icons with colors and textures drawn from Australia's natural beauty.
                                            </p>
                                            <ul className="list-inline">
                                                <li style={{ color: 'black' }}>
                                                    <strong>Date:</strong>
                                                    02/02/2024
                                                </li>
                                                <li style={{ color: 'black' }}>
                                                    <strong>Category:</strong>
                                                    Collection
                                                </li>
                                            </ul>
                                            <button
                                                className="btn btn-primary btn-xl text-uppercase"
                                                data-bs-dismiss="modal"
                                                type="button"
                                                onClick={onClose}
                                            >
                                                <i className="fas fa-xmark me-1"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {show && modalId === 'portfolioModal6' && (
                <div
                    className="portfolio-modal modal fade show"
                    id="portfolioModal6"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="false"
                    style={{ display: 'block' }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal">
                                <img src="./src/assets/close.png" style={{ height: '20px' }} alt="Close modal" type="button" onClick={onClose} />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            <h2 className="text-uppercase" style={{ color: 'black' }}>
                                                Workouts on NTC App
                                            </h2>
                                            <img className="img-fluid d-block mx-auto" src="./src/assets/entrenos2.jpg" alt="..." />
                                            <p>
                                                The workouts, all between 10 to 15 minutes long and available in 11 languages, will be on the Nike Training Club app (NTC) July 18 and on Netflix July 26.
                                                Each workout was designed to be both authentic to how the world's elite footballers prepare to perform and feel their best,
                                                and accessible and supportive to all athletes and ability levels.
                                            </p>
                                            <ul className="list-inline">
                                                <li style={{ color: 'black' }}>
                                                    <strong>Date:</strong>
                                                    16/03/2024
                                                </li>
                                                <li style={{ color: 'black' }}>
                                                    <strong>Category:</strong>
                                                    Workout
                                                </li>
                                            </ul>
                                            <button
                                                className="btn btn-primary btn-xl text-uppercase"
                                                data-bs-dismiss="modal"
                                                type="button"
                                                onClick={onClose}
                                            >
                                                <i className="fas fa-xmark me-1"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Portfolio2;
