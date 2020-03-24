import React from 'react';
import CountUp from 'react-countup';

//Styles
import './TaskCounter.css';

class TaskCounter extends React.Component {

  state = {
    sessionItem: {
      openTasks: 0,
      finishedTasks: 0,
      inprogressTasks: 0,
      eventList: [{}]
    }
  }  

  componentWillMount(){
    let sesionStr:any = localStorage.getItem("session");
    this.setState({
      sessionItem: JSON.parse(sesionStr)
    });
  }

  render() {
    return (
      <div className="counter">
        <h2>Tasks Counter</h2>
        <h3>Tasks state fast view</h3>
        <div className="counterCircl">
          <div className="outsideCircl">
            <div className="contentCircl">
              <span>Created Tasks</span><br /><p><CountUp start={0} end={this.state.sessionItem.eventList.length} duration={5} delay={1} onEnd={({ start }) => start()} /></p></div>
          </div>
          <div className="outsideCircl">
            <div className="contentCircl">
              <span>Open Tasks</span><br /><p><CountUp start={0} end={this.state.sessionItem.openTasks} duration={5} delay={1} onEnd={({ start }) => start()} /></p></div>
          </div>
          <div className="outsideCircl">
            <div className="contentCircl">
              <span>Finished Tasks</span><br /><p><CountUp start={0} end={this.state.sessionItem.finishedTasks} duration={5} delay={1} onEnd={({ start }) => start()} /></p></div>
          </div>
          <div className="outsideCircl">
            <div className="contentCircl">
              <span>In Progress Tasks</span><br /><p><CountUp start={0} end={this.state.sessionItem.inprogressTasks} duration={5} delay={1} onEnd={({ start }) => start()} /></p></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskCounter;
