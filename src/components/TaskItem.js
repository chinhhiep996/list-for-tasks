import React from 'react';
import classnames from 'classnames';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
  }

  handleChangeStatus() {
    this.props.handleChangeStatus(this.props.index);
  }

  handleDeleteTask() {
    this.props.handleDeleteTask(this.props.index);
  }

  handleEditTask() {
    this.props.handleEditTask(this.props.index);
  }

  render() {
    let {task, index} = this.props;
    const classStatus = classnames('label cursor-pointer', {'label-danger': task.status, 'label-success': !task.status});

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center" onClick={this.handleChangeStatus}>
          <span className={classStatus}>
            {task.status ? 'Kích hoạt' : 'Ẩn'}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning"
            onClick={this.handleEditTask}
          >
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button>&nbsp;
          <button type="button" className="btn btn-danger"
            onClick={this.handleDeleteTask}
          >
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );
  }
}


export default TaskItem;
