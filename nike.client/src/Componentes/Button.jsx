import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Button = ({ addToCart, product }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const box = button.querySelector('.box');
        const truck = button.querySelector('.truck');

        button.addEventListener('click', (e) => {
            e.preventDefault();

            if (!button.classList.contains('done')) {
                if (!button.classList.contains('animation')) {
                    button.classList.add('animation');

                    gsap.to(button, {
                        '--box-s': 1,
                        '--box-o': 1,
                        duration: 0.3,
                        delay: 0.5,
                    });

                    gsap.to(box, {
                        x: 0,
                        duration: 0.4,
                        delay: 0.7,
                    });

                    gsap.to(button, {
                        '--hx': -5,
                        '--bx': 50,
                        duration: 0.18,
                        delay: 0.92,
                    });

                    gsap.to(box, {
                        y: 0,
                        duration: 0.1,
                        delay: 1.15,
                    });

                    gsap.set(button, {
                        '--truck-y': 0,
                        '--truck-y-n': -26,
                    });

                    gsap.to(button, {
                        '--truck-y': 1,
                        '--truck-y-n': -25,
                        duration: 0.2,
                        delay: 1.25,
                        onComplete() {
                            gsap
                                .timeline({
                                    onComplete() {
                                        button.classList.add('done');
                                    },
                                })
                                .to(truck, {
                                    x: 0,
                                    duration: 0.4,
                                })
                                .to(truck, {
                                    x: 40,
                                    duration: 1,
                                })
                                .to(truck, {
                                    x: 20,
                                    duration: 0.6,
                                })
                                .to(truck, {
                                    x: 96,
                                    duration: 0.4,
                                });
                            gsap.to(button, {
                                '--progress': 1,
                                duration: 2.4,
                                ease: 'power2.in',
                            });
                        },
                    });
                }
            } else {
                button.classList.remove('animation', 'done');
                gsap.set(truck, {
                    x: 4,
                });
                gsap.set(button, {
                    '--progress': 0,
                    '--hx': 0,
                    '--bx': 0,
                    '--box-s': 0.5,
                    '--box-o': 0,
                    '--truck-y': 0,
                    '--truck-y-n': -26,
                });
                gsap.set(box, {
                    x: -24,
                    y: -6,
                });
            }

            addToCart(product);
        });
    }, [addToCart, product]);

    return (
        <button className="truck-button" ref={buttonRef}>
            <span className="default">Add to Cart</span>
            <span className="success">
                Added
                <svg viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
            </span>
            <div className="truck">
                <div className="wheel"></div>
                <div className="back"></div>
                <div className="front"></div>
                <div className="box"></div>
            </div>
        </button>
    );
};

export default Button;