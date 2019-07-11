import React from "react";
import PhysicianList from "./PhysicianListComponent";
import AppointmentList from "./AppointmentListComponent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        physicians = [],
    };
  }

  componentDidMount() {
      fetch("/api/physicians")
      .then(physicians => physicians.json())
      .then(physicians => (
          this.setState({ physicians: physicians})
      ).catch( err => console.log(err));
  }

  

  render() {
    return (
      <div className="calendar-body">
        <h1>Welcome to React app</h1>
      </div>
    );
  }
}
