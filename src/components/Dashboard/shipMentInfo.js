import dashboardConfig from "../../config/dashboard.config";

function ShipMentInfo() {
  const shipMentInfoData = dashboardConfig?.shipMentInfo;

  return (
    <div className="shipMentInfoContainer">
      <div className="row">
        {shipMentInfoData.map((items, idx) => (
          <div
            key={`shipMentInfo_${idx}`}
            className="shipMentInfoContentContainer"
            style={{ background: items.bgColor }}
          >
            <div className="shipMentInfoContent">
              <div className="shipMentInfoValue">{items.value}</div>
              <div className="shipMentInfoNameDate">
                <div className="shipMentInfoName">{items.name}</div>
                <div className="shipMentInfoDate">{items.date}</div>
              </div>
            </div>
            <div className="shipMentInfoIcon">{items.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShipMentInfo;
