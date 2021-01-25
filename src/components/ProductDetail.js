import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  <DetailWrapper
    name={props.name}
    price={props.price}
    image={props.image}
    description={props.description}
  >
    <h1>{props.name}</h1>
    <img src={props.image} alt="product name" />
    <p>{props.description}</p>
    <p>{props.price}</p>
  </DetailWrapper>;
};

export default ProductDetail;
