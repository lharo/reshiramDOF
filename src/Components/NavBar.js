
import React from "react";
import { Navbar,Nav ,Button, Form,FormControl} from "react-bootstrap";

function NavBar(){
    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Reshiram</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Menu</Nav.Link>
      <Nav.Link href="#pricing">About us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
</>
    )
}
export default NavBar