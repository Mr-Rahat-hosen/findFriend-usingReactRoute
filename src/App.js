
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './component/Home/Home';
import NotMatch from './component/NotMatch/NotMatch';
import FriendDetail from './component/FriendDetail/FriendDetail';

function App() {
 
  return (
    
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path='/friend/:friendId'>
            <FriendDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
