import { useState } from "react";
import "../css/ISSFocusReportingPage.css";
import ISSHeader from "./ISSHeader";
import ISSSideMenu from "./ISSSideMenu";

const ISSFocusReportingPage = ({ children }) => {
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);

  return (
    <div className="ISSReportingMainContainer">
      <div className="ISSReportingHeaderContainer">
        <ISSHeader setToggleHamburgerMenu={setToggleHamburgerMenu} />
      </div>
      <div className="ISSReportingMenuContentContainer">
        <div
          className={`ISSReportingMenuContainer ${
            toggleHamburgerMenu ? "active" : "inactive"
          }`}
        >
          <ISSSideMenu setToggleHamburgerMenu={setToggleHamburgerMenu} />
        </div>
        <div className="ISSReportingContentContainer">{children}</div>
      </div>
    </div>
  );
};

export default ISSFocusReportingPage;
