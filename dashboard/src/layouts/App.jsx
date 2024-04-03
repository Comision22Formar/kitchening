import { Outlet } from "react-router-dom";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { Siderbar } from "../components/ui/Siderbar";
import "./App.css";

export const App = () => {
  return (
    <div id="wrapper">
      <Siderbar />

      <div id="content-wrapper" className="d-flex justify-content-between flex-column w-100">
        <div id="content">
          <Header />

          <Outlet/>
        </div>

        <Footer />
      </div>
    </div>
  );
};
