const { physicians, appointmentList } = require("./data");

const getPhysicians = cb => {
  cb(null, physicians);
};

const getAppointments = (physicians, cb) => {
  const appointments = appointmentList[physicians];
  cb(null, appointments);
};

module.exports = { getPhysicians, getAppointments };
