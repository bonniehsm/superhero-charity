import { Link } from "react-router-dom";
import HeroesContainer from './HeroesContainer';
import '../App.scss';
import '../styles/Common.scss';

function HomeContainer() {
  return (
    <div className="main-container">
      <HeroesContainer/>      
      <div className="main-content">
        <h1 id="header-appeal">Superheroes need your help</h1>
        <p id="text-appeal">
          World governments may outlaw the use of super-powers... but we can stop this! Superheroes need to use their powers to protect the world against disasters and the schemes of super villains. 
          <br/>
          Support us through our charity.
        </p>
        <span id="arrow-symbol">&#8659;</span>
        <button className="common-button">
          <Link
            className="common-link"
            to="/donation"
          >
            DONATE!
          </Link>
        </button>        
      </div> 
    </div>
  );
}

export default HomeContainer;