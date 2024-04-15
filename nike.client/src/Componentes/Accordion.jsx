import React, { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className="container">
            {/* For demo purpose */}
            <div className="row py-5">
                <div className="col-lg-9 mx-auto text-white text-center">
                    <h1 className="display-4">Bootstrap 4 accordion</h1>
                    <p className="lead mb-0">
                        Using Bootstrap 4 card component, build a vertical accordion with up & down chevrons.
                    </p>
                    <p className="lead">
                        Snippet by{' '}
                        <a href="https://bootstrapious.com/snippets" className="text-white">
                            <u>Bootstrapious</u>
                        </a>
                    </p>
                </div>
            </div>
            {/* End */}

            <div className="row">
                <div className="col-lg-9 mx-auto">
                    {/* Accordion */}
                    <div id="accordionExample" className="accordion shadow">
                        {[1, 2, 3].map((itemIndex) => (
                            <div className="card" key={itemIndex}>
                                <div
                                    id={`heading${itemIndex}`}
                                    className="card-header bg-white shadow-sm border-0"
                                >
                                    <h2 className="mb-0">
                                        <button
                                            type="button"
                                            onClick={() => toggleAccordion(itemIndex)}
                                            className="btn btn-link text-dark font-weight-bold text-uppercase collapsible-link"
                                        >
                                            Collapsible Group Item #{itemIndex}
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id={`collapse${itemIndex}`}
                                    aria-labelledby={`heading${itemIndex}`}
                                    className={`collapse ${activeIndex === itemIndex ? 'show' : ''}`}
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body p-5">
                                        <p className="font-weight-light m-0">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                            brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                            assumenda shoreditch et.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* End */}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
