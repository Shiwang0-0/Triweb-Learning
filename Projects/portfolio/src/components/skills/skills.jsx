import './skills.css'
import logo from "../../assets/logo.png"
export const Skills=()=>{
    return(
        <div className='skillsText'>
            Skills
        <div className="skillsSection">
            <div className='skillsSectionBox'>
            <img src={logo} alt="Logo" className="skill"/>
            <img src={logo} alt="Logo" className="skill"/>
            <img src={logo} alt="Logo" className="skill"/>
            <br/>
            <img src={logo} alt="Logo" className="skill"/>
            <img src={logo} alt="Logo" className="skill"/>
            <img src={logo} alt="Logo" className="skill"/>
            </div>    
        </div>
        </div>
    )
    
}
