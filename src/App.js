import BlockForm from "./components/BlockForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello from react</h1>
        <Switch>
          <Route path="/block">
            <BlockForm btnText={"Mine"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
