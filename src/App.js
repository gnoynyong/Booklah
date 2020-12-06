import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Search from './Search';
import SignUp from './SignUp';
import Home from './Home';
import SearchPage from './SearchPage';
import "bootstrap/dist/css/bootstrap.min.css"
/*import {useLoadScript} from "@react-google-maps/api";

const libraries = ["places"];*/

function App() {
  /*load scripts
  const [isLoaded,loadError] = useLoadScript({
    googleMapsApiKey:process.env.PLACE_API_KEY,
    libraries,
});*/
  return (
    <Router>
       <div className="App">
      <Switch>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/payment">
          <h1>Pay</h1>
        </Route>
        <Route path="/sign-up">
          <SignUp/>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
         {/* / is default route*/}
         <Route path="/"> 
          <Header/>
          <Search hideButtons/>
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
