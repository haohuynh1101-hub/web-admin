import React from "react";
import PropTypes from "prop-types";
import "./productlist.scss";
import { Link } from "react-router-dom";
ProductList.propTypes = {
  onDeleteProduct: PropTypes.func,
};

function ProductList(props) {
  const { product, onDeleteProduct } = props;

  return (
    <tr>
      <td className="product-stt">}</td>
      <td className="product-img">
        <img src="" />
      </td>
      <td className="product-name"></td>
      <td className="product-price"></td>
      <td className="product-quantity">50</td>
      <td className="product-action">
        <Link>
          <button className="edit">Edit</button>
        </Link>

        <button className="delete" onClick={onDeleteProduct}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProductList;
