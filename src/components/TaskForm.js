import React from "react";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      status: true
    }

    this.handleCloseNewForm = this.handleCloseNewForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    let { taskEditing } = this.props;
    if(taskEditing && taskEditing.id) {
      this.setState({
        id: taskEditing.id,
        name: taskEditing.name,
        status: taskEditing.status
      });
    } else {
      this.setState(() => {
        return {
          name: '',
          status: true
        };
      });
    }
  }

  handleCloseNewForm() {
    this.props.onHideNewForm();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    if(this.state.id) {
      this.props.handleEditTask(this.state)
    } else {
      this.props.getNewTask(this.state);
    }
    this.handleCloseNewForm();
    event.preventDefault();
  }

  render() {
    let { taskEditing } = this.props;
    let titleTask = (taskEditing && taskEditing.id) ? 'Sửa công việc' : 'Thêm công việc';

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {titleTask}
            <span className="fa fa-times-circle text-right" onClick={this.handleCloseNewForm} />
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Tên: </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <label>Trạng thái: </label>
            <select
              className="form-control"
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              <option value={true}>Kích hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-5" />
                Lưu lại
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger"
                onClick={this.handleCloseNewForm}
              >
                <span className="fa fa-close mr-5" />
                Hủy bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
