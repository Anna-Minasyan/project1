import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {

    const items = [
        {data:"January 2045", text:"Diam dolor ipsum sit amet erat ipsum lorem sit"},
        {data:"March 2045", text:"Diam dolor ipsum sit amet erat ipsum lorem sit"},
        {data:"May 2045", text:"Diam dolor ipsum sit amet erat ipsum lorem sit"},
        {data:"July 2045", text:"Diam dolor ipsum sit amet erat ipsum lorem sit"},
        {data:"September 2045", text:"Diam dolor ipsum sit amet erat ipsum lorem sit"},
        {data:"November 2045", text:"Diam dolor ipsum sit amet erat ipsum lorem sit"}
    ]

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" dataWowDelay="0.1s" style={{maxWidth: 500}}>
                    <h1 className="display-6">Roadmap</h1>
                    <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>
                </div>
                <div className="owl-carousel roadmap-carousel wow fadeInUp" dataWowDelay="0.1s">

                    {items.map((item) => (
                        <RoadmapItem data={item.data} text={item.text}
                        />
                    ))}

                    {/*  <div className="roadmap-item">
                        <div className="roadmap-point"><span></span></div>
                        <h5>January 2045</h5>
                        <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                    </div>
                    <div className="roadmap-item">
                        <div className="roadmap-point"><span></span></div>
                        <h5>March 2045</h5>
                        <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                    </div>
                    <div className="roadmap-item">
                        <div className="roadmap-point"><span></span></div>
                        <h5>May 2045</h5>
                        <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                    </div>
                    <div className="roadmap-item">
                        <div className="roadmap-point"><span></span></div>
                        <h5>July 2045</h5>
                        <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                    </div>
                    <div className="roadmap-item">
                        <div className="roadmap-point"><span></span></div>
                        <h5>September 2045</h5>
                        <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                    </div>
                    <div className="roadmap-item">
                        <div className="roadmap-point"><span></span></div>
                        <h5>November 2045</h5>
                        <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}
export default Roadmap;