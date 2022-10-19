//import logo from './logo.svg';

import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./views/pages/About";
import ChangePassword from "./views/pages/auth/changePassword/ChangePassword";
import ConfirmPassword from "./views/pages/auth/confirmPassword/ConfirmPassword";
import Profile from "./views/pages/auth/profile/Profile";
import ResetPassword from "./views/pages/auth/resetPassword/ResetPassword";
import SignIn from "./views/pages/auth/signIn/SignIn";
import SingUp from "./views/pages/auth/singUp/SingUp";
import Contact from "./views/pages/Contact";
import Home from "./views/pages/Home";
import NoPage from "./views/pages/NoPage";
import UsersCreate from "./views/pages/users/UsersCreate";
import UsersEdit from "./views/pages/users/UsersEdit";
import UsersList from "./views/pages/users/UsersList";
// import loadRoutes from "./routes/Routes";
function App() {
  useEffect(() => {
    localStorage.getItem("ADMIN") ? (
      <Navigate to="/users" />
    ) : (
      <Navigate to="/login" />
    );
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/create" element={<UsersCreate />} />
          <Route path="/users/edit/:id" element={<UsersEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" />
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

      {/* <loadRoutes /> */}
    </>
  );
}

export default App;
