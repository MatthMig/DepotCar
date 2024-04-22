import React from 'react';
import img from '/images/contact-1-600x400.webp';

function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-12">
                        <form id="contact-form" role="form" action="" method="post">
                            <div className="section-title">
                                <h2>Contactez-nous <small>Nous adorons discuter, parlons !</small></h2>
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <input type="text" className="form-control" placeholder="Entre votre nom et prénom" name="name"
                                    required />

                                <input type="email" className="form-control" placeholder="Entrez votre addresse email"
                                    name="email" required />

                                <textarea className="form-control" rows="6" placeholder="Votre message ici..."
                                    name="message" required></textarea>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <input type="submit" className="form-control" name="send message" value="Envoyer" />
                            </div>

                        </form>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="contact-image">
                            <img    src={img} 
                                    className="img-responsive" 
                                    alt="Smiling Two Girls" 
                                    width="600"
                                    height="400"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact