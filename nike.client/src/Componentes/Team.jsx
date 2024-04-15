import React from 'react';


const TeamSection = () => {
  return (
    <>
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase" style={{ color: 'black' }}>
              Our Amazing Team
            </h2>
            <h3 className="section-subheading text-muted">Two amazing developers.</h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="https://media.licdn.com/dms/image/D4D03AQE2R-_DjS0D2g/profile-displayphoto-shrink_200_200/0/1706537958164?e=1717632000&v=beta&t=XzrLbfzMbgB3Dv4fLvVioyrZJTs7Xif_GNb1A_UoCfs" alt="..." />
                <h4 style={{ color: 'black' }}>Stefany Albarran</h4>
                <p className="text-muted" style={{ color: 'black' }}>
                  Developer
                </p>
                  <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/stefany-albarran/" aria-label=" LinkedIn Profile">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="./src/assets/brayan.jpg" alt="..." />
                <h4 style={{ color: 'black' }}>Brayan Alexander</h4>
                <p className="text-muted" style={{ color: 'black' }}>
                  Developer
                </p>
                              <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/brayan-alexander-collaguazo-diaz-b8a664195/" aria-label=" LinkedIn Profile">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
            </div>
          </div>
        </div>
      </section>

      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="https://www.instagram.com/nike/">
                <img className=" img-brand d-block mx-auto" src="./src/assets/Instagram.webp" alt="" aria-label="Instagram Logo" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="https://twitter.com/Nike">
                <img className=" img-brand d-block mx-auto" src="./src/assets/Twitter.webp" alt="" aria-label="Twitter Logo" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="https://www.linkedin.com/company/nike/">
                <img className="img-brand d-block mx-auto" src="./src/assets/LinkedIn.webp" alt="" aria-label="LinkedIn Logo" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="https://www.facebook.com/nike/?locale=es_ES">
                <img className=" img-brand d-block mx-auto" src="./src/assets/Facebook.webp" alt="" aria-label="Facebook Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
