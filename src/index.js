import React from "react";
import App from "./App";
import "./App.css";
import NavBar from "./components/NavBar.js";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import Keys from "./routes/Keys";
import Hash from "./routes/Hash.js";
import Tokens from "./routes/Tokens";
import CoinBase from "./routes/CoinBase";
import BlockForm from "./routes/BlockForm";
import Distributed from "./routes/Distributed";
import Transactions from "./routes/Transactions";
import BlockChainForm from "./routes/BlockChainForm";
import VerifySignature from "./routes/VerifySignature";
import BlockChainTotal from "./routes/BlockChainTotal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SideBar from "./components/SideBar";

ReactDOM.render(
  <React.StrictMode>
    {/* <SideBar /> */}
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/hash" component={Hash} />
        <Route path="/block" component={BlockForm} />
        <Route path="/blockchain" component={BlockChainForm} />
        <Route path="/distributed" component={Distributed} />
        <Route path="/tokens" component={Tokens} />
        <Route path="/coinbase" component={CoinBase} />
        <Route path="/keys" component={Keys} />
        <Route path="/verifysignature" component={VerifySignature} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/blockchaintotal" component={BlockChainTotal} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
