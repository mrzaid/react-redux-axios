import { Container, Navbar, Button, Badge } from "react-bootstrap";
import { Button } from "react-bootstrap/lib/InputGroup";

export default function AppNavbar(props) {
const cartItems=useSelector((state)=>state.cart.items)

const calculateTotal=()=>{
  let total =0
  cartItems.forEach(item => {
    total+=item.price
  });
  return total.toFixed(2);
}
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        <Link to="/cart">
        <Button variant="primary">
          Your Cart
          <Badge bg="secondary">{cartItems.length}</Badge>
        </Button>
        </Link>
        <h3>Total: ${calculateTotal()}</h3>
      </Container>
    </Navbar>
  );
}
