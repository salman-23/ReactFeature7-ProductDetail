import { DetailWrapper, BackButton } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const ProductDetail = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;
  const deleteProduct = props.deleteProduct;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        onClick={() => setProduct(product)}
      />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <BackButton onClick={() => props.setProduct(null)}>go back</BackButton>
      <DeleteButton deleteProduct={deleteProduct} product={product} />
    </DetailWrapper>
  );
};

export default ProductDetail;
