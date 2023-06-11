import ISSFocusReportingPage from "../ISSFocusReportingPage";
import refineTextFromPath from "../ISSUtils";
import { useLocation } from "react-router";

const DataDump = () => {
  const location = useLocation();

  return (
    <ISSFocusReportingPage>
      <div className="subMenuContentTxt">
        {refineTextFromPath(location.pathname)}
      </div>
    </ISSFocusReportingPage>
  );
};

export default DataDump;
