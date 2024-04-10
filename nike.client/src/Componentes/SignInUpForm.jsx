import React from 'react';


const SignInUpForm = () => {
    return (
        <div>
            <div className="section">    
                <div className="container">
                    <div className="row full-height justify-content-center">

                        <div className="col-12 text-center align-self-center py-5" style={{ backgroundImage: `url('./src/assets/giphy1.gif')`, backgroundRepeat: 'round' }}>
                            
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span style={{ color: 'white' }}>Member Nike </span><span style={{ color: 'white' }}>Join</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3" style={{ color: 'white' }}  > Welcome to Nike </h4>
                                                    <div className="form-group">
                                                        <input type="email" className="form-style" placeholder="Email" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" className="form-style" placeholder="Password" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#" className="btn mt-4" style={{ borderRadius: '4px', height: '44px', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', transition: 'all 200ms linear', padding: '0 30px', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', backgroundColor: 'white', color: '#000000' }}>Login</a>
                                                    <p className="mb-0 mt-4 text-center"><a href="#" className="link" style={{ color: '9f9f9f' }}>Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-3 pb-3" style={{ color: 'white' }} >Join to Nike</h4>
                                                    <div className="form-group">
                                                        <input type="text" className="form-style" placeholder="Full Name" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} />
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="tel" className="form-style" placeholder="Phone Number" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} />
                                                        <i className="input-icon uil uil-phone"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="email" className="form-style" placeholder="Email" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} />
                                                      
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" className="form-style" placeholder="Password" style={{ padding: '13px 20px', paddingLeft: '55px', height: '48px', width: '100%', fontWeight: '500', borderRadius: '4px', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', outline: 'none', color: '#c4c3ca', backgroundColor: '#1f2029', border: 'none', transition: 'all 200ms linear', boxShadow: '0 4px 8px 0 rgba(21,21,21,.2)' }} />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                      
                                                    </div>
                                                    <a href="#" className="btn mt-4" style={{ borderRadius: '4px', height: '44px', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', transition: 'all 200ms linear', padding: '0 30px', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', backgroundColor: 'white', color: '#000000' }}>Register</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInUpForm;
