import React, { useState } from "react";
import License from "../../Components/License";
import FormInformation from "../../Components/formInput";
import useLocalStorageState from "hooks/useLocalStorageState";

function LicenseManage(props) {
  const [Client, setClient] = useLocalStorageState('client',props.Client);
  console.log("License Manage")
  console.log(Client)
 
  return (
    <div>
      <div id="main-wrapper" style={{ padding: "16px 32px 0px 32px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4" style={{ paddingBottom: "93px" }}>
              <License
                licensePlate={Client[Client.length-1].LicensePlate}
                logo={Client[Client.length-1].logo}
              />
            </div>
            <FormInformation
              id={Client[Client.length-1].id}
              name={Client[Client.length-1].name}
              licensePlate={Client[Client.length-1].LicensePlate}
              address={Client[Client.length-1].address}
              contact={Client[Client.length-1].contact}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LicenseManage;
