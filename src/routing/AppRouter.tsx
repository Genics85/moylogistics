import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Home from "../pages/homepage/Home";
import TruckloadService from "../pages/services/TruckloadService";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="" element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="service" element={<TruckloadService />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
