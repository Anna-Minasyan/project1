import icon8 from './img/icon-8.png';
import icon7 from './img/icon-7.png';
import icon6 from './img/icon-6.png';
import icon5 from './img/icon-5.png';
import icon4 from './img/icon-4.png';
import icon3 from './img/icon-3.png';
import Feature from "./Feature";

const Features = () => {

    const features = [
        {src: icon7, title: "Easy To Start", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
        {src: icon6, title: "Safe & Secure", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
        {src: icon5, title: "Affordable Plans", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
        {src: icon4, title: "Secure Storage", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
        {src: icon3, title: "Protected By Insurance", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
        {src: icon8, title: "24/7 Support", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
    ]

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" dataWowDelay="0.1s" style={{ maxWidth: 500
                }}>
                    <h1 className="display-6">Why Us!</h1>
                    <p className="text-primary fs-5 mb-5">The Best In The crypto Industry</p>
                </div>
                <div className="row g-5">

                    {features.map((feature) => (
                        <Feature
                            src={feature.src}
                            title={feature.title}
                            text={feature.text}
                        />
                    ))}


                   {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon7} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Easy To Start</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon6} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Safe & Secure</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon5} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Affordable Plans</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon4} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Secure Storage</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon3} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Protected By Insurance</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon8} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">24/7 Support</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo</span>
                                </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}
export default Features;