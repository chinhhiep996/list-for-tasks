import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterName: '',
      filterStatus: 0
    }

    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChangeStatus(index) {
    this.props.handleChangeStatus(index);
  }

  handleDeleteTask(index) {
    this.props.handleDeleteTask(index);
  }

  handleEditTask(index) {
    this.props.handleEditTask(index);
  }

  handleFilter(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    let {tasks} = this.props;
    let {filterName, filterStatus} = this.state;
    let taskList = tasks.map((task, index) => {
      return <TaskItem key={index} index={index} task={task}
        handleChangeStatus={this.handleChangeStatus}
        handleDeleteTask={this.handleDeleteTask}
        handleEditTask={this.handleEditTask}
      />;
    });

    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng thái</th>
                <th className="text-center">Hàng động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="filterName"
                    value={filterName}
                    onChange={this.handleFilter}
                  />
                </td>
                <td>
                  <select
                    className="form-control"
                    name="filterStatus"
                    value={filterStatus}
                    onChange={this.handleFilter}
                  >
                    <option value={0}>Tất cả</option>
                    <option value={-1}>Ẩn</option>
                    <option value={1}>Kích hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {/*TaskItem*/}
              {taskList}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskList;
