import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Home from "../pages/homepage/Home";
import TruckloadService from "../pages/services/TruckloadService";
import PartialTruckloadService from "../pages/services/PartialTruckloadService";
import LtlFreight from "../pages/services/LtlFreight";
import InternationFreightShipping from "../pages/services/InternationalFreightShipping";
import AirFreightShipping from "../pages/services/AirFreightShipping";
import ContainerShipping from "../pages/services/ContainerShipping";
import ExpeditedFreight from "../pages/services/ExpeditedFreight";
import RefrigeratedFreight from "../pages/services/RefrigeratedFreight";
import HeavyHaul from "../pages/services/HeavyHaul";
import RailFreight from "../pages/services/RailFreight";
import WhiteGloves from "../pages/services/WhiteGloves";
import SpecializedFreight from "../pages/services/SpecializedFreight";
import FrequentlyAskedQuestions from "../pages/frequently-asked-question/FrequentlyAskedQuestion";
import FreightGlossary from "../pages/freight-glossary/FreightGlossary";

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
        <Route
          path="service/expedited-freight"
          element={<ExpeditedFreight />}
        />
        <Route
          path="service/refrigerated-freight"
          element={<RefrigeratedFreight />}
        />
        <Route path="service/heavy-haul" element={<HeavyHaul />} />
        <Route path="service/rail-freight" element={<RailFreight />} />
        <Route path="service/white-gloves" element={<WhiteGloves />} />
        <Route
          path="service/specialized-freight"
          element={<SpecializedFreight />}
        />
        <Route
          path="frequently-asked-questions"
          element={<FrequentlyAskedQuestions />}
        />
        <Route
          path="freight-glossary"
          element={<FreightGlossary />}
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;
