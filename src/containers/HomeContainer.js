import { Link } from "react-router-dom";
import HeroesContainer from './HeroesContainer';
import '../App.scss';

function HomeContainer() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroesContainer/>
        <Link
          className="App-link"
          to="/donation"
        >
          DONATE!
        </Link>
      </header>
    </div>
  );
}

export default HomeContainer;