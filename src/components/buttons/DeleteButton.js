import React from "react";
import { DeleteButtonB } from "../../styles";

const DeleteButton = (props) => {
  const handelDelete = () => {
    props.deleteProduct(props.product.id);
  };
  return <DeleteButtonB onClick={handelDelete}>Delete</DeleteButtonB>;
};

export default DeleteButton;
