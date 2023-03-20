import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<SignIn />} />
        <Route path={"/signup"} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}