import "../index.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="NavMenu">
      <LinkContainer to="/">
        <Navbar.Brand>Hash</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavDropdown title="Beginners" id="collasible-nav-dropdown">
            {/* <NavDropdown.Item href="/hash">Hash</NavDropdown.Item> */}

            <NavDropdown.Item href="/block">Block</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/blockchain">BlockChain</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/distributed">Distributed</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/tokens">Tokens</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/coinbase">CoinBase</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="Advanced" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/keys">Keys</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/transactions">
              Transactions
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/verifysignature">
              Verify&Signature
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/blockchaintotal">
              BlockChain_Total
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          {/* 
          <LinkContainer to="/coinbase">
            <Nav.Link>CoinBase</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/keys">
            <Nav.Link>Keys</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/verifysignature">
            <Nav.Link>Verify&Signature</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/transactions">
            <Nav.Link>Transactions</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/blockchaintotal">
            <Nav.Link>BlockChain_Total</Nav.Link>
          </LinkContainer> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
