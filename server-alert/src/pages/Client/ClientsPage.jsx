import NavBar from "Components/NavBar";
import React from "react";
import {  Outlet } from "react-router-dom";


export default function ClientsPage() {

  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  );
}
