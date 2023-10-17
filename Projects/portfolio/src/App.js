import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/aboutMe/aboutMe";
import { Skills } from "./components/skills/skills";
import { Wave } from "./components/wave/wave";
import { Qualifications } from "./components/qualifications/qualifications";
import { Projects } from "./components/projects/project";
import { Resume } from "./components/resume/resume";
import { Contact } from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <AboutMe/>
      <Wave/>
      <Skills/>
      <Qualifications/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
