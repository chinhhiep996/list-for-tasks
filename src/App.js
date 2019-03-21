import React, { Component } from "react";
import uniqid from 'uniqid';

import './App.css';

import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: null
    };

    this.onShowNewForm = this.onShowNewForm.bind(this);
    this.onHideNewForm = this.onHideNewForm.bind(this);
    this.getNewTask = this.getNewTask.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.updateEditTask = this.updateEditTask.bind(this);
  }

  componentWillMount() {
    if(localStorage.getItem('tasks')) {
      this.getTaskListLocal();
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }

  getTaskListLocal() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      tasks: tasks
    });
  }

  setAgainState(newState) {
    this.setState({
      tasks: newState
    });

  }

  onShowNewForm() {
    this.setState({
      isDisplayForm: true
    });
  }

  onHideNewForm() {
    this.setState({
      isDisplayForm: false
    });
  }

  getNewTask(task) {
    let { tasks } = this.state;
    let newTask = {
      id: uniqid(),
      name: task.name,
      status: !task.status ? false : true
    }
    tasks.unshift(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.getTaskListLocal();
  }

  handleChangeStatus(index) {
    let { tasks } = this.state;
    tasks[index].status = !tasks[index].status;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.getTaskListLocal();
  }

  handleDeleteTask(index) {
    let { tasks } = this.state;
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.getTaskListLocal();
  }

  async handleEditTask(index) {
    let { tasks } = this.state;
    await this.setState({
        isDisplayForm: true,
        taskEditing: tasks[index]
    });
  }

  updateEditTask(updateTask) {
    if(updateTask.status === 'true') {
      updateTask.status = true;
    } else if (updateTask.status === 'false') {
      updateTask.status = false;
    }
    let { tasks } = this.state;
    let index = tasks.findIndex(task => task.id === updateTask.id);
    tasks[index] = updateTask;
    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.getTaskListLocal();
  }

  render() {
    let { tasks, isDisplayForm, taskEditing } = this.state;
    let showNewForm = isDisplayForm ? <TaskForm
      onHideNewForm={this.onHideNewForm}
      getNewTask={this.getNewTask}
      handleEditTask={this.updateEditTask}
      taskEditing={taskEditing}
    /> : '';
    let classColTasks = '';

    if(isDisplayForm) {
      classColTasks = 'col-xs-8 col-sm-8 col-md-8 col-lg-8'
    } else {
      classColTasks = 'col-xs-12 col-sm-12 col-md-12 col-lg-12'
    }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/** Form */}
            {showNewForm}
          </div>

          <div className={classColTasks}>
            <button type="button" className="btn btn-primary" onClick={this.onShowNewForm}>
              <span className="fa fa-plus mb-5" />Thêm Công Việc
            </button>
            {/** Search - Sort */}
            <div className="row mt-15">
              {/**Control */}
              <Control></Control>
            </div>
            {/**List */}
            <TaskList tasks = {tasks}
              handleChangeStatus={this.handleChangeStatus}
              handleDeleteTask={this.handleDeleteTask}
              handleEditTask={this.handleEditTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
