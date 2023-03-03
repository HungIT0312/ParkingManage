import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Tables = (props) => {
    const [Client, setClient] = useState(props.Client);


  const renderTableData = () => {
    return Client.map((cli, index) => {
      const { LicensePlate, id, logo, name, address, contact } = cli;
      return (
        <tr key={id}>
          <td>{LicensePlate}</td>
          <td>
            <a href={logo} target="_blank" rel="noreferrer">View</a>
          </td>
          <td>{id}</td>
          <td>{name}</td>
          <td>{address}</td>
          <td>{contact}</td>
          <td className="">
            <button className="btn btn-primary col-3 ">
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button className="btn btn-success col-3 ">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="btn btn-danger col-3 ">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    const header = Object.keys(Client[0]);
    return header.map((key, index) => (
      <th scope="row" key={index}>
        {key.toUpperCase()}
      </th>
    ));
  };

  return (
    <div id="main-wrapper" style={{ padding: "16px 32px 0px 32px" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card" style={{ borderRadius: "8px", boxShadow:"5px 8px 8px rgba(0, 0, 0, 0.2)"}}>
              <div className="card-body">
                <div className="card-title">
                  <h4>Khách hàng</h4>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        {renderTableHeader()}
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{renderTableData()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
// const [students, setStudents] = useState([
//     { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
//     { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
//     { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
//     { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
// ])

//   "LicensePlate": "43K143333",
//   "logo": "https://i.stack.imgur.com/J96IY.png",
//   "id": "111",
//   "name": "Hưng Hí",
//   "address": "Đà Nẵng",
//   "contact": "0935282111"
