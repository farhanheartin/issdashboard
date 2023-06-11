import { ReactComponent as ShipmentBox } from "../assets/shipmentBox.svg";
import { ReactComponent as RevenueGrowth } from "../assets/revenue.svg";
import { ReactComponent as Dollar } from "../assets/dollar.svg";
import { ReactComponent as Analytics } from "../assets/analytics.svg";
import { ReactComponent as WaveGraph } from "../assets/waveGraph.svg";
import { ReactComponent as Weight } from "../assets/buildings.svg";

const dashboardConfig = {
  profitInfoCard: [
    {
      id: 1,
      icon: <ShipmentBox />,
      name: "Shipments",
      value: "9,607",
      bgColor: "#EF5A16",
    },
    {
      id: 2,
      icon: <RevenueGrowth />,
      name: "Revenue",
      value: "$60,545,139.80",
      bgColor: "#0D79BA",
    },
    {
      id: 3,
      icon: <Dollar />,
      name: "Cost",
      value: "$53,723,134.82",
      bgColor: "#CC323E",
    },
    {
      id: 4,
      icon: <Analytics />,
      name: "Gross Profit",
      value: "$6,822,004.26",
      bgColor: "#6FA31B",
    },
  ],
  shipMentInfo: [
    {
      id: 1,
      icon: <WaveGraph />,
      name: "TEUs",
      value: "11,939",
      date: "March 2022",
      bgColor:
        "linear-gradient(to right, rgba(238,155,31,1), rgba(208,72,37,1))",
    },
    {
      id: 2,
      icon: <Weight />,
      name: "Chargeable Weight",
      value: "2,603,094.65",
      date: "March 2022",
      bgColor:
        "linear-gradient(to right, rgba(85,114,134,1), rgba(38,55,70,1))",
    },
  ],
};

export default dashboardConfig;
