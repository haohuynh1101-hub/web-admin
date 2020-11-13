import React from "react";
import PropTypes from "prop-types";
import "./searchbar.scss";
SearchBar.propTypes = {};

function SearchBar(props) {
  return (
    <div className="search-group container">
      <form>
        <div className="row">
          <div className=" search-left col-md-3">
            <div className="search-input">
              <h3>Chọn khu vực</h3>
              <input type="text" placeholder="Bạn muốn tìm phòng ở đâu?" />
              <a>
                <input type="text" placeholder="Thành phố" />
                <span>
                  <i className="fa fa-angle-down"></i>
                </span>
              </a>
              <a>
                <input type="text" placeholder="Quận" />
                <span>
                  <i className="fa fa-angle-down"></i>
                </span>
              </a>
            </div>
          </div>
          <div className=" col-md-4">
            <div className="search-middle">
              <h3>Chọn loại phòng</h3>
              <ul className="menu">
                <li>
                  <input type="radio" value="1" />
                  <label>Phòng trọ, nhà trọ</label>
                </li>
                <li>
                  <input type="radio" value="2" />
                  <label>Chung cư, căn hộ</label>
                </li>

                <li>
                  <input type="radio" value="3" />
                  <label>Nhà mặt phố</label>
                </li>
                <li>
                  <input type="radio" value="3" />
                  <label>Văn phòng</label>
                </li>
                <li>
                  <input type="radio" value="3" />
                  <label>Nhà nguyên căn</label>
                </li>
                <li>
                  <input type="radio" value="3" />
                  <label>Mặt bằng, cửa hàng</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="search-right col-md-4">
            <h3>Chọn khoảng giá</h3>
            <div className="form-group">
              <div className="price-from">
                <div className="input-group">
                  <input type="number" />
                  <span>Trăm</span>
                </div>
              </div>
              <span className="to">Đến</span>
              <div className="price-to">
                <div className="input-group">
                  <input type="number" />
                  <span>Trăm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="search">
        {/* <button>
          <i className="fa fa-search"></i>
          Tìm Kiếm
        </button> */}
        <a href="#" className="btn btn-1 color-green">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Tìm kiếm
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
