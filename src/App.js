import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from './containers/HomeContainer'; 
import DonationContainer from './containers/DonationContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeContainer}/>
          <Route path="/donation" exact component={DonationContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
