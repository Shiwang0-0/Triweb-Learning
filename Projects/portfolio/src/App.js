import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/aboutMe/aboutMe";
import { Skills } from "./components/skills/skills";
import { Wave } from "./components/wave/wave";
function App() {
  return (
    <div className="App">
      <Navbar/> 
      <AboutMe/>
      <Wave/>
      <Skills/>
    </div>
  );
}

export default App;
