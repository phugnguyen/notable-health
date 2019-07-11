import React from "react";
import PhysicianList from "./PhysicianListComponent.jsx";
import AppointmentList from "./AppointmentListComponent.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
      appointments: null
    };

    this.fetchAppointments = this.fetchAppointments.bind(this);
  }

  componentDidMount() {
    fetch("/api/physicians")
      .then(physicians => physicians.json())
      .then(physicians => {
        this.setState({ physicians });
      })
      .catch(err => console.log(err));
  }

  fetchAppointments(e) {
    fetch(`/api/appointments/${e.target.innerHTML}`)
      .then(appointments => appointments.json())
      .then(appointments => this.setState({ appointments }))
      .catch(err => console.log(err));
  }

  render() {
    const { physicians, appointments } = this.state;
    return (
      <div className="schedule-body">
        <PhysicianList
          physicians={physicians}
          fetchAppointments={this.fetchAppointments}
        />
        <AppointmentList appointments={appointments} />
      </div>
    );
  }
}

export default App;
