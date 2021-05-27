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
                    title="The Sea Explorer" 
                    price="297" 
                    details={['Three Day Tour','Up to 30 people','Two tour guides','Sleep in cozy hotel', 'Difficulty: easy']} 
                    />
                </div>
                <div className="col-1-of-3">
                <RotoCard cardIdx="3" 
                    title="The Sea Explorer" 
                    price="297" 
                    details={['Three Day Tour','Up to 30 people','Two tour guides','Sleep in cozy hotel', 'Difficulty: easy']} 
                    />
                </div>


            </div>

        </section>
    )
}

export default Tours;