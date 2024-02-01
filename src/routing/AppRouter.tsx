import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Home from "../pages/homepage/Home";
import TruckloadService from "../pages/services/TruckloadService";
import PartialTruckloadService from "../pages/services/PartialTruckloadService";
import LtlFreight from "../pages/services/LtlFreight";
import InternationFreightShipping from "../pages/services/InternationalFreightShipping";
import AirFreightShipping from "../pages/services/AirFreightShipping";
import ContainerShipping from "../pages/services/ContainerShipping";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="" element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="service" element={<TruckloadService />} />
        <Route path="service/truckload" element={<TruckloadService />} />
        <Route
          path="service/partial-truckload"
          element={<PartialTruckloadService />}
        />
        <Route path="service/ltl-freight" element={<LtlFreight />} />
        <Route
          path="service/international-freight-shipping"
          element={<InternationFreightShipping />}
        />
        <Route
          path="service/air-freight-shipping"
          element={<AirFreightShipping />}
        />
        <Route
          path="service/container-shipping"
          element={<ContainerShipping />}
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;
