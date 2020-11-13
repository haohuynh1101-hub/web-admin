import React, { Component } from "react";
import "./mainaction.scss";
import { connect } from "react-redux";
import {
  actAddProduct,
  actGetDetailProduct,
  actUpdateProduct,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import { times } from "lodash";
class MainAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      file: "",
      imagePreviewUrl: "",
    };
  }
  componentDidMount() {
    const { onEditProduct, match } = this.props;
    if (match) {
      const id = match.params.id;
      onEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEdit) {
      var { itemEdit } = nextProps;
      this.setState({
        id: itemEdit.id,
        txtName: itemEdit.name,
        txtPrice: itemEdit.price,
        imagePreviewUrl: itemEdit.img,
      });
    }
  }
  handleClickFile = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };
  handleSubmit = (e) => {
    const { onAddProduct, onUpdateProduct, history } = this.props;
    e.preventDefault();
    var product = {
      id: this.state.id,
      name: this.state.txtName,
      price: this.state.txtPrice,
      imagePreviewUrl: "https://via.placeholder.com/150",
    };
    if (this.state.id) {
      onUpdateProduct(product);
      history.goBack();
    } else {
      onAddProduct(product);
      history.goBack();
    }
  };
  handleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="add-product container">
          <div className="row">
            <h2>Thêm mới sản phẩm</h2>
            <div className="infor-product col-md-6">
              <h3>Tên sản phẩm</h3>
              <input
                name="txtName"
                value={this.state.txtName}
                type="text"
                placeholder="Tên sản phẩm"
                onChange={this.handleChange}
              />
              <h3>Giá tiền</h3>
              <input
                name="txtPrice"
                value={this.state.txtPrice}
                type="text"
                placeholder="Giá"
                onChange={this.handleChange}
              />
              <h3>Số lượng</h3>
              <input type="number" placeholder="Số lượng" />
            </div>
            <div className="upload-file col-md-6">
              <input type="file" onChange={this.handleClickFile} />
              <div className="choose-img">
                <img src={this.state.imagePreviewUrl} />
              </div>
            </div>
          </div>

          <button type="submit" className="save">
            Lưu lại
          </button>
          <Link to="/">
            <button onClick={this.handleClickBack} className="back">
              Quay lại
            </button>
          </Link>
        </div>
      </form>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    itemEdit: state.itemEdit,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProduct(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetDetailProduct(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProduct(product));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(MainAction);
