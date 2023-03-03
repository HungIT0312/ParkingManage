import ClientManage from "layouts/ClientManage/Client";
import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LicenseManage from "./layouts/License/LicenseManage";
import LoginForm from "./Components/login";
import TimeInOut from "layouts/Time/TimeInOut";
import Update from "layouts/Update/Update";
import useAPI from "./hooks/useAPI";
import ErrorPage from "./layouts/Error+Loading/Error";
import ClientsPage from "pages/Client/ClientsPage";
import RegisterPage from "pages/Login/registerPage";
import Loading from "layouts/Error+Loading/Loading";
import Parking from "layouts/Parking/Parking";

function App() {
  const {
    data: Client,
    error,
    isLoading,
  } = useAPI("http://localhost:3004/Clients", []);
  const {
    data: TimeLog,
  } = useAPI("http://localhost:3004/TimeLog", []);
  const {
    data: Parkings,
  } = useAPI("http://localhost:3004/Parkings", []);
console.log("app.js")
console.log(Parkings)

  if (error) {
    return <ErrorPage></ErrorPage>;
  } else if (isLoading) {
    return <Loading/>;
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/Home" element={<ClientsPage />}>
              <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
              {/* <Route path="/" element={<ErrorPage></ErrorPage>}></Route> */}
              <Route path="License" element={<LicenseManage Client={Client} />} />
              <Route path="Parking" element={<Parking Parkings={Parkings}/>}></Route>
              <Route path="Client" element={<ClientManage Client={Client} />}>
                <Route path="Update" element={<Update />}></Route>
              </Route>
              <Route path="TimeLog" element={<TimeInOut TimeLog={TimeLog} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
