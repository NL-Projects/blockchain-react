import React from "react";
// import App from "./App";
import "./index.css";
import NavBar from "./components/NavBar.js";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import Keys from "./routes/Keys_route";
import Hash from "./routes/Hash_route.js";
import Tokens from "./routes/Tokens_route";
import CoinBase from "./routes/CoinBase_route";
import BlockForm from "./routes/Block_route";
import Distributed from "./routes/Distributed_route";
import Transactions from "./routes/Transactions_route";
import BlockChainForm from "./routes/BlockChain_route";
import VerifySignature from "./routes/VerifySignature_route";
import BlockChainTotal from "./routes/BlockChainTotal_route";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Hash} />
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
