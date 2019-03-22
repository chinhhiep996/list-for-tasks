import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      keyword: ''
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    let { keyword } = this.state;

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            name="keyword"
            type="text"
            value={keyword}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Nhập từ khóa..."
          />
          <span className="input-group-btn">
            <button 
              className="btn btn-primary" 
              type="button"
              onClick={this.handleSubmit}
            >
              <span className="fa fa-search mr-5" />
              Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
