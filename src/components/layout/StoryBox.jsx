


const StoryBox = (props) => {
    const {title, text, imgsrc} = props;
    return (
    <div className="storybox">
        <figure className="storybox__shape">
            <img src={`../dist/img/${imgsrc}`} alt={title} className="storybox__img" />
        </figure>
        <div className="storybox__text">
            <h3 className="heading__tertiary u-margin-bottom-small">{title}</h3>
            <p>{text}</p>
        </div>
    </div>
    )
}

export default StoryBox;

