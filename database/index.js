const { physicians, appointmentList } = require("./data.js");

const getPhysicians = cb => {
  cb(null, physicians);
};

const getAppointments = (physicians, cb) => {
  const appointments = appointmentList[physicians];
  cb(null, appointments);
};

module.exports = { getPhysicians, getAppointments };
