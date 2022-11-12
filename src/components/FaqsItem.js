const FaqsItem = (props) => {
    return (
        <div className="accordion-item wow fadeInUp" dataWowDelay="0.1s">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" dataBsToggle="collapse"
                        dataBsTarget="#collapseOne" aria-expanded="true"
                        ariaControls="collapseOne">
                    {props.question}
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show"
                 ariaLabelledby="headingOne"
                 dataBsParent="#accordionExample">
                <div className="accordion-body">
                    {props.answer}
                </div>
            </div>
        </div>
    )
}
export default FaqsItem;