import icon7 from './img/icon-7.png';
import icon3 from './img/icon-3.png';
import icon9 from './img/icon-9.png';
import icon5 from './img/icon-5.png';
import icon2 from './img/icon-2.png';
import icon8 from './img/icon-8.png';
import Card from "./Card";


const Service = () => {

    const services = [
        {src:icon7, title: "Currency Wallet", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
        {src:icon3, title: "Currency Transaction", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
        {src:icon9, title: "Bitcoin Investment", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
        {src:icon5, title: "Currency Exchange", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
        {src:icon2, title: "Bitcoin Escrow", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"},
        {src:icon8, title: "Token Sale", text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"}
    ]

    return (
        <div className="container-xxl bg-light py-5 my-5">
            <div className="container py-5">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
                    <h1 className="display-6">Services</h1>
                    <p className="text-primary fs-5 mb-5">Buy, Sell And Exchange Cryptocurrency</p>
                </div>
                <div className="row g-4">

                    {services.map((service) => (
                        <Card src={service.src} title={service.title} text={service.text}/>
                    ))}

                   {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item bg-white p-5">
                            <img className="img-fluid mb-4" src={icon7} alt=""/>
                                <h5 className="mb-3">Currency Wallet</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                    clita duo
                                    justo</p>
                                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item bg-white p-5">
                            <img className="img-fluid mb-4" src={icon3} alt="" />
                                <h5 className="mb-3">Currency Transaction</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                    clita duo
                                    justo</p>
                                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item bg-white p-5">
                            <img className="img-fluid mb-4" src={icon9} alt="" />
                                <h5 className="mb-3">Bitcoin Investment</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                    clita duo
                                    justo</p>
                                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item bg-white p-5">
                            <img className="img-fluid mb-4" src={icon5} alt="" />
                                <h5 className="mb-3">Currency Exchange</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                    clita duo
                                    justo</p>
                                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item bg-white p-5">
                            <img className="img-fluid mb-4" src={icon2} alt="" />
                                <h5 className="mb-3">Bitcoin Escrow</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                    clita duo
                                    justo</p>
                                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item bg-white p-5">
                            <img className="img-fluid mb-4" src={icon8} alt="" />
                                <h5 className="mb-3">Token Sale</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                    clita duo
                                    justo</p>
                                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}
export default Service;