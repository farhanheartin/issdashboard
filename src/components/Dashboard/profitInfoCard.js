import dashboardConfig from "../../config/dashboard.config";
import "../../css/dashboard.css";

function ProfitInfoCard() {
  const profitInfoData = dashboardConfig.profitInfoCard;

  return (
    <div className="">
      <h2>Dashboard</h2>
      <div class="row dynamic">
        {profitInfoData.map((items, idx) => {
          const Icon = items.icon;
          return (
            <div key={`profitInfoCard_${idx}`} class="column card-container">
              <div
                className="profitInfoIconDiv"
                style={{ backgroundColor: items.bgColor }}
              >
                {Icon}
              </div>
              <div className="profitinfo">
                <div className="profitValue">{items.value}</div>
                <div className="profitType">{items.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfitInfoCard;
