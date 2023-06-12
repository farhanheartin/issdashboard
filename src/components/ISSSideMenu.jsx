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

  const isActiveMenu = (pathname) => {
    const currentPathName = location.pathname
      ? location.pathname.toLowerCase()
      : "";
    const routePathName = pathname ? pathname.toLowerCase() : "";
    return currentPathName === routePathName;
  };

  return (
    <div className="ISSSideMenuContainer">
      {appRouteConfig.map((menuObj, menuObjIdx) => {
        const isMenuActive = isActiveMenu(menuObj.path);
        return (
          <div
            className={`ISSSideMenuHeaderLabel ${isMenuActive ? "active" : ""}`}
            key={"header_" + menuObjIdx}
          >
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
                const isSubMenuActive = isActiveMenu(subMenuObj.path);
                return (
                  <div
                    className={`ISSSideSubMenuHeaderLabel ${
                      isSubMenuActive ? "active" : ""
                    }`}
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
