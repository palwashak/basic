import React from "react";
import nots from "../src/res.json";
import { useEffect, useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    setNotifications(nots);
    document.title = "Salesforce Service Cloud";
  }, []);

  const UserRow = (notification, index) => {
    return (
      <tr
        key={index}
      >
        <td>{notification.Id}</td>
        <td>{notification.IsClosed ? "Closed" : "Open"}</td>
        <td>{notification.ClosedDate}</td>
        <td>{notification.CaseNumber}</td>
        <td>{notification.Status}</td>
        <td>{notification.Subject}</td>
        <td>{notification.Description}</td>
      </tr>
    );
  };
  const userTable = notifications.map((notification, index) =>
    UserRow(notification, index)
  );
  const value = "Joel";
  return (
    <div>
      <h2>Hello {value}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Enquiry Reference Number</th>
            <th>Is Closed</th>
            <th>Date Closed</th>
            <th>Case Number</th>
            <th>Status</th>
            <th>Subject</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
}

export default App;
