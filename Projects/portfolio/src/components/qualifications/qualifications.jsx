import './qualifications.css'
import geu from "../../assets/geu.jpg"
import dgs from "../../assets/dgs.png"
export const Qualifications=()=>{
    return(
        <div>
        <div className='qualificationText'>
            Qualifications
        </div>
        <div className="qualificationSection">
            <div className='Qualifications'>
            <div className='Quali'>
                <div className='courseHeading'>BTech CSE</div>
                <div className='college'>
                <img src={geu} alt="collegeLogo" className="collegeLogo"/>
                <div className='collegeData'>Graphic Era Deemed to be University (2022-present)<br/>Iam pursuing my BTech in Computer Science and Enginnering Branch.</div>
                </div>
             </div>
             <div className='Quali'>
             <div className='courseHeading'>Intermediate</div>
                <div className='college'>
                <img src={dgs} alt="collegeLogo" className="collegeLogo"/>
                <div className='collegeData'>Doon Global School (2021-22)<br/>I completed my +2 studies in 2022 with PCM as core subjects  and got 84%.</div>
                </div>
             </div>
             <div className='Quali'>
             <div className='courseHeading'>High School</div>
                <div className='college'>
                <img src={dgs} alt="collegeLogo" className="collegeLogo"/>
                <div className='collegeData'>Doon Global School (2019-20)<br/>I completed my High School studies in year 2020 and got 92%.</div>
                </div>
             </div>
            </div>
       
        </div>
        </div>
        
    )
    
}