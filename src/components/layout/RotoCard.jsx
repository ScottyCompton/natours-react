
const RotoCard = (props) => {
    const {cardIdx, title, details, price} = props;
    
    return (
        <div className="card">
        <div className="card__side card__side--front">
            <div className={`card__picture card__picture--${cardIdx}`}>
                &nbsp;
            </div>
            <h4 className="card__heading">
                <span className={`card__heading-span card__heading-span--${cardIdx}`}>{title}</span>
            </h4>
            <div className="card__details">
                <ul>
                    {details && details.map((item) => {
                        return <li key={Math.random().toString()}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
        <div className={`card__side card__side--back card__side--back-${cardIdx}`}>
            <div className="card__cta">
                <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">${price}</p>
                </div>
                <a href="#booknow" className="btn btn--white">Book now!</a>
            </div>

        </div>
    </div>
    )
}

export default RotoCard;