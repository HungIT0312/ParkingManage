import React, { useState } from 'react';

const License = ({ licensePlate, logo }) => {
  const [plate, setPlate] = useState(licensePlate);

  // const handleChange = (event) => {
  //   setPlate(event.target.value);
  // };

  return (
    <div className="card border-info" style={{ boxShadow: "5px 8px 8px rgba(0, 0, 0, 0.2)" }}>
      <img src={logo} style={{ width: "18rem", marginTop: "32px" }} className="card-img-top rounded mx-auto d-block img-fluid img-thumbnail" alt="..." />
      <div className="card-body">
        <label htmlFor="licensePlateInput">Biển kiểm soát:</label>
        <h5 className="card-title">BKS: {plate}</h5>
        <p className="card-text">Biển số xe đã được đăng kí rồi</p>
        {/* <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Biển kiểm soát" value={plate} onChange={handleChange} />
          </div>
        </form> */}
        <a style={{ marginTop: "93px", width: "100%" }} href="/" className="btn btn-primary">Mở Barie</a>
      </div>
    </div>
  );
};

export default License;
