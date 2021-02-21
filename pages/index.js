import styles from "../styles/Home.module.css";
import Layout from "../layouts/layout";
import DashboardLineChart from "../components/dashboard-line-chart";

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <DashboardLineChart />
      </div>
    </Layout>
  );
}
