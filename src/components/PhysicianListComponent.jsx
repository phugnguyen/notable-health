import React from "react";

const PhysicianList = ({ physicians, fetchAppointments }) => {
  const physicianNames = physicians.map(name => {
    return <div onClick={fetchAppointments}>{name}</div>;
  });

  return (
    <div className="physician-list-container">
      <div className="">Notable</div>
      <div>PHYSICIANS</div>
      <div>{physicianNames}</div>
      <button>Logout</button>
    </div>
  );
};

export default PhysicianList;
