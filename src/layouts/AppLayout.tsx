import React, { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import Rightside from "../layouts/Rightside/Rightside";
import Switcher from "./../layouts/Switcher/Switcher";
import * as SwitcherData from "../Data/Pages/SwitcherData/SwitcherData";
import BacktoTop from "../layouts/Backtotop/Backtotop";
import { Sidebar } from "../layouts/Sidebar/Sidebar";

interface AppProps {}

const App: FC<AppProps> = () => {
  document.querySelector("body")?.classList.remove("login-img", "landing-page", "horizontal");
  document.querySelector("body")?.classList.add("app", "sidebar-mini", "ltr", "light-mode");

  return (
    <Fragment>
      <div className="horizontalMenucontainer">
        <Switcher />
        <div className="page">
          <div className="page-main">
            <Header />
            <div className="sticky" style={{ paddingTop: "-74px" }}>
              <Sidebar />
            </div>
            <div className="jumps-prevent" style={{ paddingTop: "74px" }}></div>
            <div className="main-content app-content mt-0" onClick={() => SwitcherData.responsiveSidebarclose()}>
              <div className="side-app">
                <div className="main-container container-fluid">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        <Rightside />
        <BacktoTop />
      </div>
    </Fragment>
  );
};

export default App;
