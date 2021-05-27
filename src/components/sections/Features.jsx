import FeatureBox from '../layout/FeatureBox';


const Features = () => {
    return (
        <section className="section-features">
        <div className="row">
            <div className="col-1-of-4">
                <FeatureBox 
                    title="Explore the world"
                    icon="icon-basic-world"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero animi omnis, commodi incidunt dicta"
                />
            </div>

            <div className="col-1-of-4">
                <FeatureBox 
                    title="Find Your Way"
                    icon="icon-basic-compass"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero animi omnis, commodi incidunt dicta"
                />                
            </div>

            <div className="col-1-of-4">
                <FeatureBox 
                    title="Discover Yourself"
                    icon="icon-basic-map"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero animi omnis, commodi incidunt dicta"
                />   
            </div>

            <div className="col-1-of-4">
                <FeatureBox 
                    title="Touch Your Soul"
                    icon="icon-basic-heart"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero animi omnis, commodi incidunt dicta"
                /> 
            </div>

        </div>

    </section>
    )
}

export default Features;