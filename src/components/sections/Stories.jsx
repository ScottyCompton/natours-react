import StoryBox from '../layout/StoryBox';

const Stories = () => {
    return (
        <section className="section-stories">
           <div className="u-center-text u-margin-bottom-large">
                <h2 className="heading-secondary">
                    We make people genuinely happy
                </h2>
            </div>      
            <div className="row">
                <StoryBox 
                title="I had the best week ever with my family"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dicta maiores accusantium molestias, nisi error inventore adipisci omnis repellat Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dicta maiores accusantium molestias, nisi error inventore adipisci omnis repellat "
                imgsrc="nat-8.jpg" />
            </div>     

            <div className="row">
                <StoryBox 
                title="I had the best week ever with my family"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dicta maiores accusantium molestias, nisi error inventore adipisci omnis repellat Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dicta maiores accusantium molestias, nisi error inventore adipisci omnis repellat "
                imgsrc="nat-8.jpg" />
            </div>  
        </section>
    )
}

export default Stories;