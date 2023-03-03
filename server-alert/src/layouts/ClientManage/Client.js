import NavBar from "Components/NavBar";
import Tables from "Components/Table";
import useLocalStorageState from "hooks/useLocalStorageState";
import React, { useState } from "react";

const ClientManage = (props) => {
    const [Client, setClient] = useLocalStorageState('Client',props.Client);


  return (
    <div>
      <div id="main-wrapper" style={{ padding: "16px 32px 0px 32px" }}>
        <div className="container-fluid">
          <Tables Client={Client} />
        </div>
      </div>
    </div>
  );
};

export default ClientManage;
