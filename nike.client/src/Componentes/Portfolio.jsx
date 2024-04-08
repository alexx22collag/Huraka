import Portfolio2 from './Portfolio2';
import React, { useState } from 'react';

    function Portfolio() {
        const [showModal, setShowModal] = useState(false);
        const [modalId, setModalId] = useState(null);

        const openModal = (id) => {
            setShowModal(true);
            setModalId(id);
        };

        const closeModal = () => {
            setShowModal(false);
            setModalId(null);
        };

    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{ color: "black" }}>We Are Nike</h2>
                    <h3 className="section-subheading text-muted" style={{ color: "black" }}>Just Do It</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a
                                className="portfolio-link"
                                onClick={() => openModal('portfolioModal1')}
                            >
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"></div>
                                </div>
                                <video className="img-fluid d-block mx-auto" autoPlay loop>
                                    <source src="./src/assets/jacquemusvid.mp4" type="video/mp4" />
                                    Tu navegador no soporta el elemento de video.
                                </video>

                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Jacquemus x Nike</div>
                                <div className="portfolio-caption-subheading text-muted">2024.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a
                                className="portfolio-link"
                                onClick={() => openModal('portfolioModal2')}
                            >
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"></div>
                                </div>
                                <img className="img-fluid" src="./src/assets/patta1.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Patta x Nike</div>
                                <div className="portfolio-caption-subheading text-muted">2024.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a
                                className="portfolio-link"
                                onClick={() => openModal('portfolioModal3')}
                            >
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"></div>
                                </div>
                                <img className="img-fluid" src="./src/assets/bill1.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">B.I.L.L. is Nike's latest experiment</div>
                                <div className="portfolio-caption-subheading text-muted">2024.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a
                                className="portfolio-link"
                                onClick={() => openModal('portfolioModal4')}
                            >
                            <div className="portfolio-hover">
                              <div className="portfolio-hover-content"></div>
                            </div>
                            <img className="img-fluid" src="./src/assets/haaland1.jpg" alt="" />
                          </a>
                          <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Haaland Signs With Nike</div>
                            <div className="portfolio-caption-subheading text-muted">2024.</div>
                          </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                          <div className="portfolio-item">
                            <a
                                className="portfolio-link"
                                onClick={() => openModal('portfolioModal5')}
                            >
                              <div className="portfolio-hover">
                                <div className="portfolio-hover-content"></div>
                              </div>
                                <img className="img-fluid" src="./src/assets/au1.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Nike AU Collection</div>
                              <div className="portfolio-caption-subheading text-muted">2024.</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                          <div className="portfolio-item">
                            <a
                                className="portfolio-link"
                                onClick={() => openModal('portfolioModal6')}
                            >
                              <div className="portfolio-hover">
                                <div className="portfolio-hover-content"></div>
                              </div>
                              <img className="img-fluid" src="./src/assets/entrenos1.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Workouts on NTC App</div>
                              <div className="portfolio-caption-subheading text-muted">2024.</div>
                            </div>
                          </div>
                        </div>
                </div>
            </div>
            <Portfolio2
                show={showModal}
                modalId={modalId}
                onClose={closeModal}
             />
        </section>
    );
}

export default Portfolio;