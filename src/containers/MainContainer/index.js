import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./main.scss";
import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList";
import { useSelector, connect } from "react-redux";
import { actFetchListProduct, actDeleteProduct } from "../../redux/actions";
MainContainer.propTypes = {
  onFetchListProduct: PropTypes.func,
};

function MainContainer(props) {
  const { onFetchListProduct, onDeleteProduct } = props;
  const products = useSelector((state) => state.products.listProducts);
  useEffect(() => {
    onFetchListProduct();
  }, []);
  console.log(products);
  function handleDeleteProduct(product) {
    if (window.confirm("Bạn có muốn xóa sản phẩm này?")) {
      onDeleteProduct(product.id);
    }
  }
  return (
    <div className=" main container">
      <div className="search-item">
        <Link to="/create">
          <button className="add">Add Product</button>
        </Link>
        <div>
          <form className="term">
            <a>
              <i className="search fa fa-search"></i>
            </a>
            <input type="text" placeholder="Search" />
          </form>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className="product-stt">STT</th>
            <th className="product-img"></th>
            <th className="product-name">Tên sản phẩm</th>
            <th className="product-price">Giá</th>
            <th className="product-quantity">Số lượng</th>
            <th className="product-action">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((product) => (
            <ProductList
              product={product}
              key={product.id}
              onDeleteProduct={() => handleDeleteProduct(product)}
            />
          ))} */}
          <ProductList />
        </tbody>
      </table>
    </div>
  );
}
function mapDispatchtoProps(dispatch) {
  return {
    onFetchListProduct: () => {
      dispatch(actFetchListProduct());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProduct(id));
    },
  };
}
export default connect(null, mapDispatchtoProps)(MainContainer);
