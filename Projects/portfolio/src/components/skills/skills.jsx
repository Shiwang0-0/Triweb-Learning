import './skills.css'
import js from "../../assets/JS.png"
import html from "../../assets/html2.png"
import css from "../../assets/css.png"
import cpp from "../../assets/c++.png"
import c from "../../assets/C.png"
import react from "../../assets/react.png"
import node from "../../assets/node.png"
import mongo from "../../assets/mongo3.png"
export const Skills=()=>{
    return(
        <div>
            <div className='skillsText'>Skills</div>
        <div className="skillsSection">
            <div className='skillsSectionBox'>
            <img src={js} alt="Logo" className="skill"/>
            <img src={html} alt="Logo" className="skill"/>
            <img src={css} alt="Logo" className="skill"/>
            <br/>
            <img src={cpp} alt="Logo" className="skill"/>
            <img src={c} alt="Logo" className="skill"/>
            <img src={react} alt="Logo" className="skill"/>
            <img src={mongo} alt="Logo" className="skill"/>
            <img src={node} alt="Logo" className="skill"/>
            </div>    
        
        </div>
        </div>
        
    )
    
}
