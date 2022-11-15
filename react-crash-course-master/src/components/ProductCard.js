import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addItem } from "../reducers/cart";

export default function ProductCard({ product}) {

const dispatch = useDispatch()
const cartItems =useSelector(state=>state.cart.items)
const isProductExist=cartItems.find(item=>item.id==product.id)





  const addItemToCart=()=>{
    dispatch(addItem({...product,quantity:1}))
  }
  return (
    <Card style={{ width: "18rem" }} className="card-shadow m-4 p-4">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Link to={`/${product.id}`}>
          {
            isProductExist ?  (
              <p>Added to Cart</p>
            ):
            (
              <Button onClick={addItemToCart} variant="secondary">Add to cart</Button>
            )
          }
          <Button variant="primary">See more</Button>
          
        </Link>
      </Card.Body>
    </Card>
  );
}
