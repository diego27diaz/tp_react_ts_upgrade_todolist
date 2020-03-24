import React from 'react';

//Styles
import './AddTask.css';

class AddTask extends React.Component {

  constructor(props:any) {
    super(props);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeSeverity = this.handleChangeSeverity.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  state = {
    title: "",
    date: "",
    state: "open",
    severity: "critical"
  }

  handleChangeTitle(event:any) {
      this.setState({title: event.target.value});
  }
  handleChangeDate(event:any) {
    this.setState({date: event.target.value});
  }
  handleChangeState(event:any) {
    this.setState({state: event.target.value});
  }
  handleChangeSeverity(event:any) {
    this.setState({severity: event.target.value});
  }

  addNewTask(){
    let eventListStr:any = localStorage.getItem("eventList");
    let eventListSession = JSON.parse(eventListStr);
    
    //new task
    let newTask = {
      id: Math.floor((Math.random() * 999999) + 1),
      title: this.state.title,
      date: this.state.date,
      status: this.state.state,
      severity: this.state.severity
    }

    eventListSession.push(newTask);
    localStorage.setItem("eventList", JSON.stringify(eventListSession));
  }

  render() {
    return (
      <div className="main">
        <h2>Add a new task</h2>

        <form>
          <div className="formAdd">
            <p>Please fill in this form to create a new task.</p>           
            <label><b>Title: </b></label>
            <input type="text" name="title" onChange={this.handleChangeTitle} required/>
            <label><b>Date: </b></label>
            <input type="date" name="date" onChange={this.handleChangeDate}  required/>
            <label><b>Status: </b></label>
            <select name="state" onChange={this.handleChangeState} required>
              <option value="open">open</option>
              <option value="inprogress">in progress</option>
              <option value="finished">finished</option>
              <option value="closed">closed</option>
            </select><br/>
            <label><b>Severity: </b></label>
            <select name="severity"  onChange={this.handleChangeSeverity} required>
              <option value="critical">critical</option>
              <option value="normal">normal</option>
              <option value="low">low</option>
            </select>
            <br/>
            <button onClick={this.addNewTask}>Add</button>
          </div>
        </form>

      </div>
    );
  }
}
 
export default AddTask;

