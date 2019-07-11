const physicians = ["Hibbert, Julius", "Krieger, Algernop", "Riviera, Nick"];
const appointmentList = {
  "Hibbert, Julius": {
    email: "jhibbert@notablehealth.com",
    firstName: "Julius",
    lastName: "Hibbert",
    patients: [
      {
        number: 1,
        name: "Malory Archer",
        time: "8:00AM",
        kind: "Follow-up"
      },
      {
        number: 2,
        name: "Barry Dillon",
        time: "9:00AM",
        kind: "New Patient"
      },
      {
        number: 3,
        name: "Woodhouse",
        time: "10:00AM",
        kind: "Follow-up"
      }
    ]
  },
  "Krieger, Algernop": {
    email: "akrieger@notablehealth.com",
    firstName: "Algernop",
    lastName: "Krieger",
    patients: [
      {
        number: 1,
        name: "Sterling Archer",
        time: "8:00AM",
        kind: "New Patient"
      },
      {
        number: 2,
        name: "Cyril Figis",
        time: "8:30AM",
        kind: "Follow-up"
      },
      {
        number: 3,
        name: "Ray Gilette",
        time: "9:00AM",
        kind: "Follow-up"
      },
      {
        number: 4,
        name: "Lana Kane",
        time: "9:30AM",
        kind: "New Patient"
      },
      {
        number: 5,
        name: "Pam Poovey",
        time: "10:00AM",
        kind: "New Patient"
      }
    ]
  },
  "Riviera, Nick": {
    email: "nriviera@notablehealth.com",
    firstName: "Nick",
    lastName: "Riviera",
    patients: [
      {
        number: 1,
        name: "Cheryl Tunt",
        time: "8:00AM",
        kind: "Follow-up"
      },
      {
        number: 2,
        name: "Len Drexler",
        time: "9:00AM",
        kind: "New Patient"
      },
      {
        number: 3,
        name: "Maj. Nikolai Jackov",
        time: "10:00AM",
        kind: "Follow-up"
      },
      {
        number: 4,
        name: "Slater",
        time: "9:30AM",
        kind: "New Patient"
      },
      {
        number: 5,
        name: "Len Drexler",
        time: "10:00AM",
        kind: "New Patient"
      }
    ]
  }
};

module.exports = { physicians, appointmentList };
