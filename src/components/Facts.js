import icon9 from './img/icon-9.png';
import icon10 from './img/icon-10.png';
import icon2 from './img/icon-2.png';
import Fact from "./Fact";

const Facts = () => {

    const facts = [
        {src: icon9, "data-wow-delay": "0.1s", text: "Today Transactions"},
        {src: icon10, "data-wow-delay": "0.3s", text: "Monthly Transactions"},
        {src: icon2, "data-wow-delay": "0.5s", text: "Total Transactions"},
    ]

    return (
        <div className="container-xxl bg-light py-5 my-5">
            <div className="container py-5">
                <div className="row g-5">

                    {facts.map((fact) => (
                        <Fact
                            src={fact.src}
                            /*data-wow-delay={fact.(data-wow-delay)}        ????  */
                            text={fact.text}
                        />
                    ))}

                    {/*<div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
                        <img className="img-fluid mb-4" src={icon9} alt="" />
                            <h1 className="display-4" data-toggle="counter-up">123456</h1>
                            <p className="fs-5 text-primary mb-0">Today Transactions</p>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.3s">
                        <img className="img-fluid mb-4" src={icon10} alt=""/>
                            <h1 className="display-4" data-toggle="counter-up">123456</h1>
                            <p className="fs-5 text-primary mb-0">Monthly Transactions</p>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.5s">
                        <img className="img-fluid mb-4" src={icon2} alt="" />
                            <h1 className="display-4" data-toggle="counter-up">123456</h1>
                            <p className="fs-5 text-primary mb-0">Total Transactions</p>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}
export default Facts;