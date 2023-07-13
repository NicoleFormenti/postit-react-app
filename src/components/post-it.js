function PostIt(props) {
    const {title, message, colour} = props;
    const dynamicStyles = {
        backgroundColor: colour,
    }
    return (
        <div styles={dynamicStyles} className="postit">
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    )
}

export default PostIt;