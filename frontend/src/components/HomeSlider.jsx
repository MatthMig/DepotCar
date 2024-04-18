import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';


function HomeSlider() {
    const IMAGES = [
        "/images/slider-image-1-1920x700.jpg",
        "/images/slider-image-2-1920x700.jpg",
        "/images/slider-image-3-1920x700.jpg"
    ];
    return (
        <section id="home">
            <div className="row">
                <div className="home-slider">
                    <OwlCarousel className='owl-theme' loop margin={10} 
                            items={1} autoplay={true} dots={false}
                            animateOut={'fadeOut'}>
                        <div className="caption item item-first">
                            <div className="container">
                                <div className="col-md-6 col-sm-12">
                                    <h1>Lorem ipsum dolor sit amet.</h1>
                                    <h3>Voluptas dignissimos esse, explicabo cum fugit eaque, perspiciatis quia ab
                                        nisi sapiente delectus eiet.</h3>
                                    <a href="/cars" className="section-btn btn btn-default">Voir Notre offre</a>
                                </div>
                            </div>
                        </div>

                        <div className="caption item item-second">
                            <div className="container">
                                <div className="col-md-6 col-sm-12">
                                    <h1>Distinctio explicabo vero animi culpa facere voluptatem.</h1>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, excepturi.</h3>
                                    <a href="/cars" className="section-btn btn btn-default">Voir Notre offre</a>
                                </div>
                            </div>
                        </div>

                        <div className="caption item item-third">
                            <div className="container">
                                <div className="col-md-6 col-sm-12">
                                    <h1>Efficient Learning Methods</h1>
                                    <h3>Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque eu ex eu urna venenatis sollicitudin ut at libero.</h3>
                                    <a href="/cars" className="section-btn btn btn-default">Voir Notre offre</a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}

export default HomeSlider;
