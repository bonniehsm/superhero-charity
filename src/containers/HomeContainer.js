import { Link } from "react-router-dom";
import logo from '../logo.svg';
import '../App.scss';

function HomeContainer() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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