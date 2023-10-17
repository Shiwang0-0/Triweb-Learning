import "./project.css";
import amazon from "../../assets/amazonclone.png"
import tictactoe from "../../assets/tictactoe.webp"
import onlineMeals from "../../assets/onlinemeal.png"
import gymimg from "../../assets/gymimg.png"
export const Projects = () => {
    const redirectToticTacToe = () => {
        window.open('https://tic-tac-toe-ochre.vercel.app/', '_blank');
      };
      
      const redirectToticTacToeGit = () => {
        window.open('https://github.com/Shiwang0-0/Triweb-Learning/tree/main/Projects/tic-tac-toe', '_blank');
      };
      const redirectToAmazon = () => {
        window.open('www.google.com', '_blank');
      };
  return (
    <div>
      <div className="projectText"> Projects </div>
      <div className="projectSection">
        <div className="projects">
          <div className="projectContainer">
            <div className="project1">
                <img src={amazon} alt="amazon" className="projectImg" />
              <div className="projectText">
                Amazon Clone
                <div class="options">
                <button className="opt1" onClick={redirectToAmazon}>Live</button>
                <button className="opt1" onClick={redirectToAmazon}>Code</button>
                </div>
              
              </div>
            </div>
          </div>
          <div className="projectContainer">
            <div className="project2">
            <img src={onlineMeals} alt="amazon" className="projectImg" />
              <div className="projectText">Food Ordering Site
              <div class="options">
              <button className="opt1" onClick={redirectToAmazon}>Live</button>
              <button className="opt1" onClick={redirectToAmazon}>Code</button>
                </div>
                </div>
            </div>
          </div>
          <div className="projectContainer">
            <div className="project3">
            <img src={tictactoe} alt="amazon" className="projectImg" />
              <div className="projectText">TicTactoe
              <div class="options">
              <button className="opt1" onClick={redirectToticTacToe}>Live</button>
              <button className="opt1" onClick={redirectToticTacToeGit}>Code</button>
                </div>
                </div>
            </div>
          </div>
          <div className="projectContainer">
            <div className="project4">
            <img src={gymimg} alt="amazon" className="projectImg" />
              <div className="projectText">Gym
              <div class="options">
              <button className="opt1" onClick={redirectToAmazon}>Live</button>
              <button className="opt1" onClick={redirectToAmazon}>Code</button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
