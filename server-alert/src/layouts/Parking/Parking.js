import NavBar from "Components/NavBar";
import Slot from "Components/Slot";
import React, { useState } from "react";

const Parking = (props) => {
  const [Parkings, setParkings] = useState(props.Parkings);

  const renderSlot = Parkings.map((slot, index) => {
    console.log("slot " + index);
    console.log(slot.slotName);
    return <Slot slotName={slot.slotName} status={slot.status}></Slot>;
  });
  return (
    <div>
      <div id="main-wrapper" style={{ padding: "16px 32px 0px 32px" }}>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-9">
              <div className="card bx-shadow" style={{ borderRadius: "8px" }}>
                <div className="card-body " style={{ height: "550px" }}>
                  <div className="card-title text-center">
                    <h4>Bãi đỗ</h4>
                    <hr style={{ backgroundColor: "#000" }} />
                  </div>
                  <div className="row " style={{ marginTop: "60px" }}>
                    {renderSlot}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="card bx-shadow" style={{ borderRadius: "8px" }}>
                <div className="card-body " style={{ height: "550px" }}>
                  <div className="row ml-1">
                    <div className="col-3 p-3  card" style={{backgroundColor:"#28C76F"}}></div>
                    <div className="col-3 p-1" style={{backgroundColor:"#fff"}}>
                        Empty
                    </div>

                  </div>
                  <div className="row ml-1">
                    <div className="col-3 p-3 mt-2 card" style={{backgroundColor:"#fff"}}></div>
                    <div className="col-9 p-1 mt-2" style={{backgroundColor:"#fff"}}>
                        Full
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parking;
//style={{ marginTop: "100px" }}
