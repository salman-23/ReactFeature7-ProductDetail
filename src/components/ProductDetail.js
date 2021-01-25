import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const product = props.product;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} onClick />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => props.setProduct(null)}>go back</button>
    </DetailWrapper>
  );
};

export default ProductDetail;
