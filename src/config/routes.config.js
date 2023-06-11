import React from "react";
const Dashboard = React.lazy(() => import("../components/Dashboard/Dashboard"));
const DataAnalysisGlobalReport = React.lazy(() =>
  import("../components/DataAnalysis/DataAnalysis")
);
const DataDumpContacts = React.lazy(() =>
  import("../components/DataDump/DataDump")
);
const ExchangeRate = React.lazy(() =>
  import("../components/ExchangeRate/ExchangeRate")
);
const FinancialClients = React.lazy(() =>
  import("../components/Financial/Financial")
);

const appRouteConfig = [
  {
    menu: "DASHBOARD",
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    menu: "DATA ANALYSIS",
    subMenu: [
      {
        menu: "Global Report",
        path: "/dataAnalysis/globalReport",
        component: <DataAnalysisGlobalReport />,
      },
      {
        menu: "Contacts",
        path: "/dataAnalysis/contacts",
        component: <DataAnalysisGlobalReport />,
      },
      {
        menu: "Customer Payments",
        path: "/dataAnalysis/customerPayments",
        component: <DataAnalysisGlobalReport />,
      },
    ],
  },
  {
    menu: "DATA DUMP",
    subMenu: [
      {
        menu: "Contacts",
        path: "/dataDump/contacts",
        component: <DataDumpContacts />,
      },
      {
        menu: "Customer Master",
        path: "/dataDump/customerMaster",
        component: <DataDumpContacts />,
      },
    ],
  },
  {
    menu: "EXCHANGE RATE",
    subMenu: [
      {
        menu: "Exchange Rate",
        path: "/exchangeRate/exchangeRate",
        component: <ExchangeRate />,
      },
    ],
  },
  {
    menu: "FINANCIAL",
    subMenu: [
      {
        menu: "Clients",
        path: "/financial/clients",
        component: <FinancialClients />,
      },
    ],
  },
];

export default appRouteConfig;
