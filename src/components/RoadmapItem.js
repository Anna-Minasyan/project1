const RoadmapItem = (props) => {
    return (
        <div className="roadmap-item">
            <div className="roadmap-point"><span></span></div>
            <h5>{props.data}</h5>
            <span>{props.text}</span>
        </div>
    )
}

export default RoadmapItem;