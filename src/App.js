import React from "react";
import "./App.css";
import MyRoutes from "./MyRoutes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AdminPage from "./pages/AdminPage/AdminPage";
import AddCourse from "./pages/AdminPage/AddCourse";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
      {/* <AdminPage /> */}
      {/* <AddCourse /> */}

      <Footer />
    </div>
  );
}

export default App;
