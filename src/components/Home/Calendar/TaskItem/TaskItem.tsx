import React from 'react';

//Styles
import './TaskItem.css';

type Props = {
  id: number,
  title: string,
  date: string,
  status: string,
  severity: string
}

class TaskItem extends React.Component<Props> {
  render() {
    return (
      <div className="taskItem">
          <div className="itemContent">
            <span className="severity">{this.props.severity}</span><br />
            <span className="title">{this.props.title}</span><br />
            <span className="date">{this.props.date}</span><br />
            <span className={this.props.status}>{this.props.status}</span><br />
          </div>
      </div>
    );
  }
}

export default TaskItem;
