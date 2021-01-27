import styles from "../styles/Dashboard.module.css";
import Layout from "../layouts/layout";

export default function Dashboard() {
  const category = [
    { น้ำท่วมถนน: "#1570FF" },
    { พื้นที่สีเขียว: "#00C853" },
    { มลพิษในคลอง: "#FF9E0D" },
    { ปริมาณขยะมูลฝอย: "#DF3A6B" },
    { ฝุ่นควันเกินมาตรฐาน: "#476A8B" },
  ];
  return (
    <Layout>
      <div
        className="absolute top-0 bottom-0 left-0 right-0 flex flex-row bg-black-default text-white-default"
        id="dashboard-wrapper"
        style={{ paddingTop: "60px" }}
      >
        <div className="flex flex-col flex-1" id="intro-dashboard-left">
          <div className="flex items-center justify-center flex-1">
            <span>
              <p className="d5">หรืออีกวิธีที่สามารถมีส่วนร่วมได้ก็คือ</p>
              <p className="d3">
                ร่วมกันสำรวจสถานการณ์ ปัญหาด้านต่างๆ ของกรุงเทพฯ ในรอบ 8
                ปีที่ผ่านมา
              </p>
              <p className="d5">ข้อมูลย้อนหลัง พ.ศ. 2555-2562</p>
            </span>
          </div>
          <div className="flex-1">bottom</div>
        </div>
        <div className="flex-1" id="intro-dashboard-right">
          2
        </div>
      </div>
    </Layout>
  );
}
