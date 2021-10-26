import './Intro.css';
import solanki from '.././images/solanki.jpg'

export const Intro = () => {
    return (
        <div className="intro-card">
                    <div className="card-left">
                        <img src={solanki} alt="mypic"/>
                </div>
                <div className="card-right">
                    <p className="myintro">
                        Hello Everybody, i am<br /><h1> Solankey Shrestha</h1><br />
                        <h2>Junior React Front-End Developer</h2><br/>
                    </p>
                    <p className="about-me">
                    I am learning to deisgn and develop services for customers of all sizes, specializing in creating stylish modern websites, web services and online stores.
                    </p>
                    <ul className="card-right-ul">
                        <li>
                        <i className="fas fa-calendar-alt"></i>
                            31st July, 1999
                        </li>
                        <li>
                        <i className="fas fa-phone-alt"></i>
                            9825187954
                        </li>
                        <li>
                        <i className="far fa-envelope"></i>
                            shresthasolankey@gmail.com
                        </li>
                        <li>
                        <i className="fas fa-house-user"></i>
                            Satdobato, Lalitpur
                    </li>
                        
                </ul>
                <ul className="socialicons">
                    <li><i className="fab fa-facebook-square"></i></li>
                    <li><i className="fab fa-twitter-square"></i></li>
                    <li><i className="fab fa-linkedin"></i></li>  
                </ul>
                </div>
        </div>
    )
}
