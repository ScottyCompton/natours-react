

const About = () => {

    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-large">
            <h2 className="heading-secondary">
                Exciting Tours For Adventurous People
            </h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">
                    You're going to fall in love with nature.
                </h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem ab fugiat exercitationem, commodi dolores voluptatibus cupiditate officiis facere aspernatur eius eligendi!
                </p>
                <h3 className="heading-tertiary u-margin-bottom-small">
                    Live adventures like you never have before.
                </h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos accusamus nulla architecto odio inventore, sit asperiores velit.
                </p>
                <a href="#learnmore" className="btn-text">Learn more &rarr;</a>
            </div>
            <div className="col-1-of-2">
                <div className="composition">
                    <img src="../dist/img/nat-1-large.jpg" alt="Sea Tour" className="composition__photo composition__photo--p1" />
                    <img src="../dist/img/nat-2-large.jpg" alt="Air Tour" className="composition__photo composition__photo--p2"/>
                    <img src="../dist/img/nat-3-large.jpg" alt="Land Tour" className="composition__photo composition__photo--p3" />
                </div>
            </div>            
        </div>
    </section>
    )
}

export default About;