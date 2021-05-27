import RotoCard from '../layout/RotoCard';

const Tours = () => {
    return (
        <section className="section-tours">
          <div className="u-center-text u-margin-bottom-large">
                <h2 className="heading-secondary">
                    Most popular Tours
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <RotoCard cardIdx="1" 
                    title="The Sea Explorer" 
                    price="297" 
                    details={['Three Day Tour','Up to 30 people','Two tour guides','Sleep in cozy hotel', 'Difficulty: easy']} 
                    />
                </div>
                <div className="col-1-of-3">
                <RotoCard cardIdx="2" 
                    title="The Forest Hiker" 
                    price="399" 
                    details={['Seven Day Tour','Up to 40 people','Six tour guides','Sleep in provided tents', 'Difficulty: medium']} 
                    />
                </div>
                <div className="col-1-of-3">
                <RotoCard cardIdx="3" 
                    title="The Show Adventurer" 
                    price="499" 
                    details={['Five Day Tour','Up to 15 people','Three tour guides','Sleep in provided tents', 'Difficulty: hard']} 
                    />
                </div>


            </div>
            <div className="u-center-text u-margin-bottom-xlarge">
                <a href="#signup" className="btn btn--green">Discover All Tours</a>
            </div>            
        </section>
    )
}

export default Tours;