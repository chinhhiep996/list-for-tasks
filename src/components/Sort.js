import React from "react";

class Sort extends React.Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="btton"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp xếp <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a href="true" role="button" className="sort_selected">
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </a>
            </li>
            <li>
              <a href="true" role="button">
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
