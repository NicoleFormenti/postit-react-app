import BorderDisplay from "./borderdisplay";

function ImageDisplay(props) {
    const {title, textCaption, hasBorders} = props;
    return (
        <div className="postit">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80" alt="beach" width="500px" height="336.19px"></img>
            <h3>{title}</h3>
            <p>{textCaption}</p>
            <p>{hasBorders && <BorderDisplay />}</p>
        </div>
    )
}

export default ImageDisplay;
