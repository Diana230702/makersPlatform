import React from "react";
import "./App.css";
import MyRoutes from "./MyRoutes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AdminPage from "./pages/AdminPage/AdminPage";
import AddCourse from "./pages/AdminPage/AddCourse";
import Registration from "./components/auth/Registration";
import AddPaidCourse from "./pages/AdminPage/AddPaidCourse";
import PaidCoursesList from "./pages/AdminPage/PaidCoursesList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
      <AdminPage />
      <AddCourse />
      <PaidCoursesList />
      <AddPaidCourse />
      <Registration />

      <Footer />
    </div>
  );
}

export default App;
