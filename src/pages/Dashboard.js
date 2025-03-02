import React, { useEffect } from "react";
import SalesSummary from "../components/SalesSummary";
import VisitorChart from "../components/VisitorChart";
import RevenueChart from "../components/RevenueChart";
import CustomerSatisfaction from "../components/CustomerSatisfaction";
import TargetChart from "../components/TargetChart";
import { useDispatch, useSelector } from "react-redux";
import {
  getChartsData,
  getSalesData,
} from "../store/dashboard/dashboardActions";
import Loader from "../components/commonComponents/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChartsData());
    dispatch(getSalesData());
  }, [dispatch]);

  const { loading, chartsData } = useSelector((state) => state.dashboard);
  return (
    <div className="p-4">
      {loading && <Loader />}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <SalesSummary />
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Visitor Insights
            </h2>
            <VisitorChart data={chartsData?.record?.visitors} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mt-6">
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Total Revenue
            </h2>
            <RevenueChart data={chartsData?.record?.revenue} />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Customer Satisfaction
            </h2>
            <CustomerSatisfaction data={chartsData?.record?.satisfaction} />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Target vs Reality
            </h2>
            <TargetChart data={chartsData?.record?.targets} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
