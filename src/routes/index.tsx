import { Routes, Route } from "react-router-dom";


import { Home } from "../Pages/Home";
import { State } from "../Pages/State";

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="state" element={<State />}>
        <Route path=":stateId/:year" element={<State />} />
        {/* <Route path=":year" element={<State />} /> */}
      </Route>
    </Routes>
  )
}