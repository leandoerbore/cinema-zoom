const About = () => {

    return (
        <>
            <div className="indent"></div>
            <div className="about-wrapper">
                <div className="about__content">
                    <div className="about__content-title">
                        <p>О нас</p>
                    </div>
                    <div className="about__content-description">
                        <p>Мы крутые. Мы классные. Идите к нам. Это мы. Вот есть такие вот кинтеатры вот да блин. Круто блин.</p>
                    </div>
                </div>
                <img className="about__content-description" src="/images/evangelion.png" alt="Картинка из кинотеатра"/>
            </div>
        </>
    )
}

export default About;