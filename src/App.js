import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import appRouteConfig from "./config/routes.config";
import ISSLoader from "./components/ISSLoader";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        {appRouteConfig.map((routeObj) => {
          return routeObj.path ? (
            <Route
              path={routeObj.path}
              element={
                <Suspense fallback={<ISSLoader />}>
                  <div>{routeObj.component}</div>
                </Suspense>
              }
              key={`route_${routeObj.menu}`}
            />
          ) : (
            routeObj.subMenu.map((subMenuObj) => {
              return (
                subMenuObj.path && (
                  <Route
                    path={subMenuObj.path}
                    element={
                      <Suspense fallback={<ISSLoader />}>
                        <div>{subMenuObj.component}</div>
                      </Suspense>
                    }
                    key={`route_${subMenuObj.menu}`}
                  />
                )
              );
            })
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
