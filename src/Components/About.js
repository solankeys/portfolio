import './About.css';

export const About = () => {
    return (
        <div className="about-compo">
            <div className="about-left">
                <h1>About Myself</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className="about-left-lower">
                    <div className="about-left-lower-icons">
                        <i className="lnr lnr-database"></i>
                        <h4>0</h4>
                        <p>TOTAL DONATION</p>
                    </div>
                    <div className="about-left-lower-icons">
                        <i className="lnr lnr-book"></i>
                        <h4>3</h4>
                        <p>Total Projects</p>
                    </div>
                    <div className="about-left-lower-icons">
                        <i className="lnr lnr-users"></i>
                        <h4>0</h4>
                        <p>Total Volunteers</p>
                    </div>
                </div>
            </div>
            <div className="about-right">
                <h4>HTML/CSS 85%</h4><br />
                <div className="meter">
                    <span className="animation" ><span className="progress"></span></span>
                </div>
                <h4>JS 70%</h4><br />
                <div className="meter">
                    <span className="animation" ><span className="progress1"></span></span>
                </div>
                <h4>ReactJS 60%</h4><br />
                <div className="meter">
                    <span className="animation"><span className="progress2"></span></span>
                </div>
                <h4>IonicReact 60% </h4><br />
                <div className="meter">
                    <span className="animation"><span className="progress3"></span></span>
                </div>
            </div>
        </div>
    )
}
