import React from "react";

const AppointmentList = ({ appointments }) => {
  if (!appointments) {
    return <div className="appointment-list-container" />;
  } else {
    const rows = appointments.patients.map(patient => {
      return (
        <tr key={patient.name}>
          <td>{patient.number}</td>
          <td>{patient.name}</td>
          <td>{patient.time}</td>
          <td>{patient.kind}</td>
        </tr>
      );
    });
    return (
      <div className="appointment-list-container">
        <div>{`Dr. ${appointments.firstName} ${appointments.lastName}`}</div>
        <div>{appointments.email}</div>
        <table className="appointments-table">
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Kind</th>
            </tr>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
};

export default AppointmentList;
