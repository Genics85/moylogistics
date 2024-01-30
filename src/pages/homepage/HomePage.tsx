import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default HomePage;
