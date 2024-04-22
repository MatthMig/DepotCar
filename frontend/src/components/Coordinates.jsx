import React from 'react';


function Coordinates() {
    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-6">
                        <div className="footer-info">
                            <div className="section-title">
                                <h2>Notre addresse</h2>
                            </div>
                            <address>
                                <p>212 Barrington Court <br />New York, ABC 10001</p>
                            </address>

                            <ul className="social-icon">
                                <li><a href="#" className="fa fa-facebook-square" attr="facebook icon" aria-label="Facebook"></a></li>
                                <li><a href="#" className="fa fa-twitter" aria-label="Twitter"></a></li>
                                <li><a href="#" className="fa fa-instagram" aria-label="Instagram"></a></li>
                            </ul>

                            <div className="copyright-text">
                                <p>Copyright &copy; 2024 Dépôt Car</p>
                                <p>Template by: <a href="https://www.phpjabbers.com/">PHPJabbers.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="footer-info">
                            <div className="section-title">
                                <h2>Informations Contact</h2>
                            </div>
                            <address>
                                <p>+33 1 23 45 67 89</p>
                                <p><a href="mailto:contact@company.com">contact@company.com</a></p>
                            </address>

                            <div className="footer_menu">
                                <h2>Liens rapides</h2>
                                <ul>
                                    <li><a href="/">Accueil</a></li>
                                    <li><a href="/about-us">A propos de nous</a></li>
                                    <li><a href="/terms">Terms & Conditions</a></li>
                                    <li><a href="/contact-us">Contactez-nous</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="footer-info newsletter-form">
                            <div className="section-title">
                                <h2>S'incrire à la Newsletter</h2>
                            </div>
                            <div>
                                <div className="form-group">
                                    <form action="#" method="get">
                                        <input type="email" className="form-control white-text-input" placeholder="Entrez votre email"
                                            name="email" id="email" required />
                                        <input type="submit" className="form-control" name="submit" id="form-submit"
                                            value="Envoyer" />
                                    </form>
                                    <span><sup>*</sup> Veuillez noter - Nous ne spammerons PAS votre email.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Coordinates