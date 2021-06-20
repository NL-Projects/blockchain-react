import BlockForm from "./components/BlockForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello from react</h1>
        <Switch>
          <Route path="/block">
            <BlockForm
              btnText={"Mine"}
              lbl1={"Block: "}
              lbl2={"Fucker: "}
              lbl3={"Hash: "}
              ph1={"Here!"}
              ph2={"shitshit"}
              ph3={"kjn13jn13!~#$@3ke#$134kjn3kejn"}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
