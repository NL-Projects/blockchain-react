import BlockForm from "./routes/BlockForm";
import BlockChainForm from "./routes/BlockChainForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello from react</h1>
        <Switch>
          <Route path="/block">
            <BlockForm />
          </Route>
          <Route path="/blockchain">
            <BlockChainForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
