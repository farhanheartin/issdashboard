import issLogo from "../assets/iss-logo.png";
import { ReactComponent as Hamburger } from "../assets/hamburger.svg";
import { ReactComponent as Notification } from "../assets/notification.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import "../css/ISSHeader.css";

const ISSHeader = ({ setToggleHamburgerMenu }) => {
  return (
    <div className="ISSHeaderContainer">
      <div className="ISSHeaderLogo">
        <img src={issLogo} alt="ISS LOGO" />
      </div>
      <div className="ISSHeaderContent">
        <div className="ISSHeaderText">
          <div className="hamburgerMenuIcon svgIconContainer">
            <Hamburger
              onClick={() => {
                setToggleHamburgerMenu((prevState) => !prevState);
              }}
            />
          </div>
          <div>{"FOCUS Reporting Dashboard"}</div>
        </div>
        <div className="ISSHeaderIcon">
          <div className="svgIconContainer">
            <Notification onClick={() => alert("Notification")} />
          </div>
          <div className="svgIconContainer">
            <Email onClick={() => alert("Email")} />
          </div>
          <div className="svgIconContainer">
            <Profile onClick={() => alert("Profile")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISSHeader;
