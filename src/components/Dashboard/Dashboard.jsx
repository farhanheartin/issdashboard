import ISSFocusReportingPage from "../ISSFocusReportingPage";
import ProfitInfoCard from "./profitInfoCard";
import ShipMentInfo from "./shipMentInfo";
import Chart from "react-apexcharts";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import "../../css/dashboard.css";

const Dashboard = () => {
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Land", "Air", "Sea"],
    series: [13, 38, 49],
    legend: {
      position: "bottom", // Set the legend position to bottom
    },
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "85%",
        },
        dataLabels: {
          offset: -40,
        },
      },
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
      style: {
        fontSize: "16px",
        fontFamily: "Arial",
        colors: ["#F76421", "#00ABC9", "#1353AA"], // Set the color of the labels
      },
    },
    colors: ["#F76421", "#00ABC9", "#1353AA"],
  };

  return (
    <ISSFocusReportingPage>
      <div>
        <ProfitInfoCard />
        <div>
          <div className="contentMainDiv">
            <ShipMentInfo />
            <div className="chart-container servicesChart">
              <div className="servicesChartHeader">Services</div>
              <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="donut"
                width={380}
              />
            </div>
            <div className="chart-container tradeLaneChart">
              <div className="tradeLaneChartHeader">Trade Lane</div>
              <VectorMap
                map={worldMill}
                containerStyle={{
                  width: "80px",
                  height: "50px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </ISSFocusReportingPage>
  );
};

export default Dashboard;
