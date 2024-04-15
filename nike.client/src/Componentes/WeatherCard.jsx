import React, { useState, useEffect } from 'react';

function WeatherCard() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const apiKey = '818a5f6975e7ec8e948d8978a2ed5375';
        const city = 'Madrid';

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => {
                console.error('Error al obtener el clima:', error);
            });
    }, []);

    const cardStyle = {
        backgroundImage: 'url("./src/assets/weather.jpg")', 
        backgroundSize: 'cover',
        width: '600px',
        height: '350px',
        borderRadius: '20px',
        boxShadow: '0px 8px 16px 4px #9E9E9E',
        marginTop: '50px',
        marginBottom: '50px'
    };


    const timeFontStyle = {
        fontSize: '50px',
        color: 'white'
    };

    const smFontStyle = {
        fontSize: '18px',
        color: 'white'
    };

    const medFontStyle = {
        fontSize: '28px',
        color: 'white'
    };

    const largeFontStyle = {
        fontSize: '60px',
        color: 'white'
    };

    return (
        <div style={{
            color: 'white',
            overflowX: 'hidden',
            height: '100%',
            
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
                <div className="row d-flex justify-content-center px-3">
                    <div className="card" style={cardStyle}>
                        {weatherData && (
                            <>
                                <h2 className="ml-auto mr-4 mt-3 mb-0" style={{ color: 'white' }}>{weatherData.name}</h2>
                                <p className="ml-auto mr-4 mb-0 med-font" style={medFontStyle}>{weatherData.weather[0].description}</p>
                                <h1 className="ml-auto mr-4 large-font" style={largeFontStyle}>{weatherData.main.temp}&#176;C</h1>
                                <p className="time-font mb-0 ml-4 mt-auto" style={timeFontStyle}>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })} <span className="sm-font" style={smFontStyle}>AM</span></p>
                                <p className="ml-4 mb-4">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
