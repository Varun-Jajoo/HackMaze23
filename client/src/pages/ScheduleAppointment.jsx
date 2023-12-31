import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";
import "./Appointments.css";
import axios from "axios";
function ScheduleAppointment() {
  const [startDate, setStartDate] = useState();
  const [timeValue, setTimeValue] = useState("");
  const [healthP, setHealthP] = useState([]);
  const [selectedHP, setSelectedHP] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://docwebsite.adityasurve1.repl.co/user/get-all-approved-doctors",
        { headers: { token: localStorage.getItem("token") } }
      )
      .then((response) => {
        setHealthP(response.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function checkAvailabilty() {
    const t = startDate.split("-");
    const date = `${t[2]}/${t[1]}/${t[0]}`;
    console.log(selectedHP, date, timeValue);
    axios
      .post(
        "https://docwebsite.adityasurve1.repl.co/user/check-booking-avilability",
        {
          date: date,
          time: timeValue,
          doctorId: selectedHP,
        },
        { headers: { token: localStorage.getItem("token") } }
      )
      .then((response) => {
        if (response.data.success) {
          alert("Slot Available");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function handleBook() {
    const t = startDate.split("-");

    const date = `${t[2]}/${t[1]}/${t[0]}`;
    axios
      .post(
        "https://docwebsite.adityasurve1.repl.co/user/book-appointment",
        {
          userId: localStorage.getItem("token"),
          date: date,
          time: timeValue,
          doctorId: selectedHP || healthP[0]._id,
        },
        { headers: { token: localStorage.getItem("token") } }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          alert("Booked, Waiting for confirmation from health partner.");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="AppGlass2">
      <Sidebar />
      <div className="ContentWrapper">
        <ProfileHeader title={"Schedule Appointment"} />
        <div className="AppGlass3">
          <div className="bookAppointmentWrapper">
            <div className="inputWrapper">
              <h4>Select Health Partner</h4>
              <select
                value={selectedHP}
                onChange={(event) => {
                  setSelectedHP(event.target.value);
                }}
              >
                {healthP?.map((partner, key) => {
                  return (
                    <option
                      key={key}
                      value={partner._id}
                    >{`${partner.firstname} ${partner.lastname}`}</option>
                  );
                })}
              </select>
            </div>
            <div className="inputWrapper">
              <h4>Select Date</h4>
              <input
                type="date"
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date.target.value)}
              />
            </div>
            <div className="inputWrapper">
              <h4>Select Time</h4>
              <select
                value={timeValue}
                onChange={(event) => {
                  setTimeValue(event.target.value);
                }}
              >
                <option value="11:00">11:00</option>

                <option value="13:00">13:00</option>

                <option value="15:00">15:00</option>
              </select>
            </div>
            <div className="appointmentButtons card-button">
              <button onClick={checkAvailabilty}>Check availaibilty</button>
              <button onClick={handleBook}>Book appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleAppointment;
