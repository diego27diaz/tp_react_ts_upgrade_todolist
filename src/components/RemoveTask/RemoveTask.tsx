import React from 'react';

class RemoveTask extends React.Component {

  constructor(props:any) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  state = {
    eventListSession: []
  }

  componentDidMount(){
    let eventListStr:any = localStorage.getItem("eventList");
    let eventListSession = JSON.parse(eventListStr);
    this.setState({eventListSession: eventListSession});
  }

  remove(){
    let itemToRemove:any = null;
     this.state.eventListSession.map((item:any, i) => {
        if(item.title === "Diego"){
          itemToRemove = i;        
          return;
        }
     });

     this.state.eventListSession.splice(itemToRemove,1);
     this.setState({eventListSession: this.state.eventListSession});
     localStorage.setItem("eventList", JSON.stringify(this.state.eventListSession));
  }

  render() {

    let taskList = this.state.eventListSession.length > 0
    	&& this.state.eventListSession.map((item:any, i) => {
      return (
        <option key={i} value={item.id}>{item.title}</option>
      )
    }, this);

    return (
      <div className="main">
        <h2>Remove task</h2>

        <div className="formAdd">
          <p>Please select a task to remove.</p>           
          <label><b>Title: </b></label>
          <select>
            {taskList}
          </select>
          <br/>
          <button onClick={this.remove}>Remove</button>
        </div>

      </div>
    );
  }
}
 
export default RemoveTask;

