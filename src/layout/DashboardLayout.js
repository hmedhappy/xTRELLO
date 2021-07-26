import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import SideBar from "../shared/SideBar";


function DashboardLayout(props) {
  return (
      <div className="wrapper">
          <Header />
          <SideBar />
            <div className="content-wrapper">
                <React.Fragment>{props.children}</React.Fragment>
            </div>
          <Footer />
      </div>

  );
}

export default DashboardLayout;
