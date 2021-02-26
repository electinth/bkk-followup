import React from "react";
import { CSSTransition } from "react-transition-group";
import children from "assets/images/children.png";
import p_icon from "assets/images/p_icon.svg";

export default function BudgetPageOne(props) {
  const { active_index } = props;

  return (
    <div
      className="fixed inset-0 z-10 flex items-center pointer-events-none budget-page-one bg-green-default"
      style={{ top: "60px" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <div className="left">
            <h2 className="leading-tight d2">
              <span className="d2 text-white-default">
                สิ้นปี 2562
                <br />
                กรุงเทพมีประชากร
              </span>
              <br />
              5,666,264 คน
            </h2>

            <h2 className="leading-tight d2 mt-14">
              <span className="d2 text-white-default">ใช้งบประมาณมากถึง</span>
              <br />
              80,000 ล้านบาท
            </h2>

            <h3 className="mt-8 d3">
              แต่เราก็ยังเห็นหลายปัญหากวนใจ ที่เกิดขึ้นซ้ำๆ และยังไม่ถูกแก้
            </h3>
          </div>

          <div className="relative flex items-center justify-center text-center right">
            <img
              src={children}
              alt={children}
              className="children-image"
              style={{ width: "288px" }}
            />

            <CSSTransition
              in={active_index > 1}
              timeout={400}
              unmountOnExit
              classNames="fade"
            >
              <div
                className="absolute p-5 transform bg-opacity-75 rounded-md shadow-xl content bg-white-default top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4"
                style={{ minWidth: "387px" }}
              >
                <h5 className="text-lg">
                  ในปี 2562 กทม. ใช้เงินดูแลประชาชนเฉลี่ย
                </h5>

                <div className="px-4 py-2 my-2 rounded-md budget bg-green-light">
                  <h4 className="d4">14,118.65 บาท / คน / ปี</h4>
                </div>

                <h5>เป็นการใช้งบประมาณ สูงสุดในรอบ 8 ปี</h5>
              </div>
            </CSSTransition>

            <CSSTransition
              in={active_index > 1}
              timeout={400}
              unmountOnExit
              classNames="fade"
            >
              <a
                href="https://elect.in.th/bkk-budget/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-x-0 bottom-0 flex items-center p-2 mx-auto rounded-md shadow-xl pointer-events-auto content bg-white-default w-max"
              >
                <img width={30} src={p_icon} alt={p_icon} />

                <h3 className="ml-2">อ่านบทความเกี่ยวกับงบกทม.</h3>
              </a>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
}
