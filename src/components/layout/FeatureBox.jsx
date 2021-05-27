

const FeatureBox = (props) => {
    const {icon, title, text} = props;
    return (
        <div className="feature-box">
            <i className={`feature-box__icon ${icon}`}></i>
            <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
            <p className="feature-box__text">{text}</p>
        </div>
    )
}

export default FeatureBox;