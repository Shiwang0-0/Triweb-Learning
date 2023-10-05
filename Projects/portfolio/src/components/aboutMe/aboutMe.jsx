import { useTypewriter,Cursor } from "react-simple-typewriter";
import  './aboutMe.css'
export const AboutMe=()=>{
    const [text] = useTypewriter({
      words: ['Iam Shiwang Bisht'],
      loop: 1,
      typeSpeed:100
    })
return(
    <div className="aboutMe">Hi there! <br/>
    <span className="myName">
        {text}
    </span>
    <Cursor/>
    </div>
)
}

export default AboutMe;