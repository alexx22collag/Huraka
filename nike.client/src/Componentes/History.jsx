import React from 'react';

const History = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase" style={{ color: 'black' }}>
            About Us
          </h2>
          <h3 className="section-subheading text-muted">Nike</h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="./src/assets/PhilKing.webp" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>1990</h4>
                <h4 className="subheading" style={{ color: 'black' }}>
                  Our Fundateur Phill Knigth
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                    Nike, Inc. is an American multinational association that is involved in the design, development,
                    manufacturing and worldwide marketing and sales of apparel, footwear, accessories, equipment and services.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
                          <img className="rounded-circle img-fluid1" src="./src/assets/sede.jpg" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2011</h4>
                <h4 className="subheading" style={{ color: 'black' }}>
                  Nike Grow
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                   The company's world headquarters are situated near Beaverton, Oregon, in the Portland metropolitan area (USA).
                  It is a major producer of sports equipment and one of the world's largest suppliers of athletic shoes and apparel.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid1" src="./src/assets/mj1.jpg" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2015</h4>
                <h4 className="subheading" style={{ color: 'black' }}>
                  Sponsors
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                 Nike sponsors many high-profile athletes and sports teams around the world, with the highly recognized trademarks of "Just Do It"
                  and the Swoosh logo (which represents the wing of the Greek goddess Nike).
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="./src/assets/Nike.jpg" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Today</h4>
                <h4 className="subheading" style={{ color: 'black' }}>
                  Mission
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  The mission of Nike Inc. is to drive product innovation for athletes everywhere.Countless ideas are tested in pursuit of aiding performance,
                 injury risk reduction, enhancing perception and feel, and delivery of innovative products to athletes.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default History;
