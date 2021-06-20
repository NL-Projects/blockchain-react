import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    //   <Navbar bg="light" expand="lg">
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Home</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/hash">
            <Nav.Link>Hash</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/block">
            <Nav.Link>Block</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/blockchain">
            <Nav.Link>BlockChain</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/distributed">
            <Nav.Link>Distributed</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/tokens">
            <Nav.Link>Tokens</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/coinbase">
            <Nav.Link>CoinBase</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/keys">
            <Nav.Link>Keys</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/verifysignature">
            <Nav.Link>Verify & Signature</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/transactions">
            <Nav.Link>Transactions</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/blockchaintotal">
            <Nav.Link>BlockChain_Total</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
