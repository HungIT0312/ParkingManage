import React, { useState } from 'react';

const FormInformation = (props) => {
  const [state, setState] = useState({
    id: props.id,
    licensePlate: props.licensePlate,
    name: props.name,
    contact: props.contact,
    address: props.address
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [name]: value
    });
  }
// console.log(this.state.value)
  return (
    <div className="col">
      <div className="col-lg-12">
        <div className="card" style={{ boxShadow: "5px 8px 12px rgba(0, 0, 0, 0.3)" }}>
          <div className="card-body" style={{ marginBottom: "36px" }}>
            <h4 className="card-title text-center">Thông tin</h4>
            <div className="basic-form" style={{ marginTop: "36px" }}>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6" >
                    <label>ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ID"
                      name="id"
                      value={state.id}
                      onChange={handleChange}
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Biển kiểm soát</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="BKS"
                      name="licensePlate"
                      value={state.licensePlate}
                      onChange={handleChange}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Liên lạc</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Liên lạc"
                    name="contact"
                    value={state.contact}
                    onChange={handleChange}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Địa chỉ"
                    name="address"
                    value={state.address}
                    onChange={handleChange}
                    readOnly
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInformation;