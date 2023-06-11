import { useNavigate, useLocation } from "react-router";
import appRouteConfig from "../config/routes.config";
import "../css/ISSSideMenu.css";

const ISSSideMenu = ({ setToggleHamburgerMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = (newPathName) => {
    if (location.pathname !== newPathName) {
      setToggleHamburgerMenu(false);
      navigate(newPathName);
    }
  };

  return (
    <div className="ISSSideMenuContainer">
      {appRouteConfig.map((menuObj, menuObjIdx) => {
        return (
          <div className="ISSSideMenuHeaderLabel" key={"header_" + menuObjIdx}>
            {!menuObj.path ? (
              <span>{menuObj.menu}</span>
            ) : (
              <span
                className="ISSMenuClick"
                onClick={() => goToPage(menuObj.path)}
              >
                {menuObj.menu}
              </span>
            )}
            {menuObj.subMenu &&
              menuObj.subMenu.length > 0 &&
              menuObj.subMenu.map((subMenuObj, subMenuObjIdx) => {
                return (
                  <div
                    className="ISSSideSubMenuHeaderLabel"
                    key={"sub_header_" + subMenuObjIdx}
                  >
                    {!subMenuObj.path ? (
                      <span>{subMenuObj.menu}</span>
                    ) : (
                      <span
                        className="ISSMenuClick"
                        onClick={() => goToPage(subMenuObj.path)}
                      >
                        {subMenuObj.menu}
                      </span>
                    )}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default ISSSideMenu;
