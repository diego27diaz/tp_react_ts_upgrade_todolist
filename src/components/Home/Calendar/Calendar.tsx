import React from 'react';
import { Redirect } from 'react-router-dom'
import TaskItem from './TaskItem/TaskItem';

//Styles
import './Calendar.css';

class CalendarHome extends React.Component {

  state = {
    redirect: false
  }  
  
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }  
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/add' />
    }
  }

  getEventList(){    
    let eventListStr:any = localStorage.getItem("eventList");
    let eventList = JSON.parse(eventListStr);
    return eventList;
  }

  render() {
    return (
      <div className="calendar">
        <h2>Calendar</h2>
        <h3>Check your tasks for each day</h3>

        <div className="calendarContent">

          {this.getEventList().map((elm:any) => <TaskItem key={elm.id}
                                  id={elm.id} 
                                  title={elm.title} 
                                  date={elm.date} 
                                  status={elm.status} 
                                  severity={elm.severity}
                                />)}

        </div>
        <div>
          {this.renderRedirect()}
          <span className="btnAddCalendar" onClick={this.setRedirect}>Add new task</span>
        </div>
      </div>
    );
  }
}

export default CalendarHome;
