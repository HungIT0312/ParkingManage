import useLocalStorageState from "hooks/useLocalStorageState";
import React, { useState } from "react";
import "../assets/css/Slot.css";
const Slot = (props) => {
    // const [Parkings, setParkings] = useLocalStorageState('Parkings',props.Parkings);
    // const [Parkings, setParkings] = useLocalStorageState('Parkings',props.Parkings);  
    const [slotName, setslotName] = useState(props.slotName);
    const [status, setstatus] = useState(props.status);
  return (
      <div className="col-lg-3 col-md-6 mb-4" >
        <div className="card-body cur" style={{height:"150px",border:"1px solid #ccc",borderRadius:"8px",backgroundColor:`${status ==="Full" ? "#28C76F":"#fff"}`,boxShadow:"5px 8px 8px rgba(0, 0, 0, 0.1)"}} >
          <div className="card-title align-items-center" ><h4 className=" text-center" >{slotName}</h4></div>
        </div>
      </div>
  );
};

export default Slot;
//{`nav-link ${activeLink === "/Home/"+menuItem.name ? "active" : ""}`}>background-image: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);