const FaqsItem = (props) => {

    return (
        <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                    {props.question}
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show"
                 aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {props.answer}
                </div>
            </div>

        </div>
    )
}
export default FaqsItem;
