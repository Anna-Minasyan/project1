const FooterItem = (props) => {
    return (
        <a className="btn btn-link" href={props.href}>{props.text}</a>
    )
}
export default FooterItem;