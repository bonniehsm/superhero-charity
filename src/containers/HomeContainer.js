import { Link } from "react-router-dom";
import HeroesContainer from './HeroesContainer';
import '../App.scss';

function HomeContainer() {
  return (
    <div className="main-container">
      <HeroesContainer/>      
      <header className="main-header">
        <h1>Superheroes need their superhowers</h1>
        <div>
        <Link
          className="donation-link"
          to="/donation"
        >
          DONATE!
        </Link>
      </div>        
      </header> 
    </div>
  );
}

export default HomeContainer;