import React from 'react';

//components
import Carousel from './Carousel/Carousel';
import TaskCounter from './TaskCounter/TaskCounter';
import Calendar from './Calendar/Calendar';

//Styles
import './Home.css';
import eventsListJS from './Calendar/events';

class Home extends React.Component {

  componentWillMount(){
    let eventListStr:any = localStorage.getItem("eventList");
    let eventList = JSON.parse(eventListStr);

    if(eventList === null || eventList.length === 0){
      alert("Default event list refill");
      localStorage.setItem("eventList", JSON.stringify(eventsListJS));
    }

    let sessionItem = {
      openTasks: 0,
      finishedTasks: 0,
      inprogressTasks: 0,
      eventList: eventList
    }

    sessionItem.eventList.map((item:any) => {
        if (item.status === 'open')
          sessionItem.openTasks++;
        if (item.status === 'finished')
          sessionItem.finishedTasks++;
        if (item.status === 'inprogress')
          sessionItem.inprogressTasks++;
    });

    localStorage.setItem("session", JSON.stringify(sessionItem));
  }

  render() {
    return (
      <div className="home">
        <Carousel></Carousel>
        <TaskCounter></TaskCounter>
        <Calendar></Calendar>
      </div>
    );
  }
}
 
export default Home;

