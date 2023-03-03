// import React from "react";
// import License from "./License";
// import FormInformation from "./formInput";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import NavBar from "./NavBar";
// import LicenseManage from "./LicenseManage";
// class MainPage extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(props, 'props')
//         this.state = {
//             Client: []
//         };
//     }

//     async componentDidMount() {
//         await fetch("http://localhost:3004/Client")
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data, 'data')
//                 console.log(this.state.Client)
//                 this.setState({ Client: data });
//             })

//     }



//     render() {
//         // const { Client } = this.state;
//         return (
//             <BrowserRouter>
//                 <NavBar />
//                 <Routes>
//                     <Route
//                         path="/Home/License"
//                         element={
//                             <LicenseManage Client={this.state.Client} />
//                         }
//                     />
//                     {/* <Route path="/ParkingSlot" element={<LicenseManage />} /> */}
//                 </Routes>
//             </BrowserRouter>
//         );
//     }
// }

// export default MainPage;
// /*licensePlate
// logo
// id
// name
// address
// contact
// */
