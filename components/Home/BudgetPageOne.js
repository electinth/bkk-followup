import React from "react";
import children from "assets/images/children.gif";
import p_icon from "assets/images/p_icon.svg";
import { isMobile } from "react-device-detect";

export default function BudgetPageOne(props) {
  const { active_index } = props;

  return (
    <div
      className="budget-page-one fixed inset-0 z-10 flex items-center pointer-events-none bg-green-default"
      style={{ top: "60px" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {!isMobile || active_index === 1 ? (
            <div className="left">
              <h2 className="leading-tight d2 hidden lg:block">
                <span className="d2 text-white-default">
                  สิ้นปี 2562
                  <br />
                  กรุงเทพมีประชากร
                </span>
                <br />
                5,666,264 คน
              </h2>

              <h3 className="leading-tight d3 block lg:hidden text-center">
                <span className="d3 text-white-default">
                  สิ้นปี 2562
                  <br />
                  กรุงเทพมีประชากร
                </span>
                <br />
                5,666,264 คน
              </h3>

              <h2 className="leading-tight d2 mt-14 hidden lg:block">
                <span className="d2 text-white-default">ใช้งบประมาณมากถึง</span>
                <br />
                80,000 ล้านบาท
              </h2>

              <h3 className="leading-tight d3 mt-8 block lg:hidden text-center">
                <span className="d2 text-white-default">ใช้งบประมาณมากถึง</span>
                <br />
                80,000 ล้านบาท
              </h3>

              <h3 className="mt-8 text-4xl hidden lg:block">
                แต่เราก็ยังเห็นหลายปัญหากวนใจ ที่เกิดขึ้นซ้ำๆ และยังไม่ถูกแก้
              </h3>

              <h3 className="mt-8 text-2xl block lg:hidden text-center">
                แต่เราก็ยังเห็นหลายปัญหากวนใจ ที่เกิดขึ้นซ้ำๆ และยังไม่ถูกแก้
              </h3>
            </div>
          ) : null}

          {!isMobile || active_index > 1 ? (
            <div className="right relative">
              <img
                src={children}
                alt={children}
                className="children-image w-3/4 lg:w-2/4 absolute top-2/4 transform -translate-y-2/4 left-2/4 -translate-x-2/4"
              />

              {(!isMobile && active_index > 1) ||
              (isMobile && active_index > 2) ? (
                <div className="relative h-full flex flex-col lg:flex-row items-center justify-center text-center">
                  <div
                    className="p-5 bg-opacity-80 rounded-md shadow-xl content bg-white-default"
                    style={{ minWidth: isMobile ? "100%" : "387px" }}
                  >
                    <h5 className="text-lg">
                      ในปี 2562 กทม. ใช้เงินดูแลประชาชนเฉลี่ย
                    </h5>

                    <div className="px-4 py-2 my-2 rounded-md budget bg-green-light">
                      <h4 className="d4">14,118.65 บาท / คน / ปี</h4>
                    </div>

                    <h5>เป็นการใช้งบประมาณ สูงสุดในรอบ 8 ปี</h5>
                  </div>

                  <a
                    href="https://elect.in.th/bkk-budget/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative lg:absolute inset-x-0 bottom-0 flex items-center justify-center p-2 mx-auto rounded-md shadow-xl pointer-events-auto content bg-white-default w-full lg:w-max mt-3 lg:mt-0"
                  >
                    <img width={30} src={p_icon} alt={p_icon} />

                    <h3 className="ml-2">อ่านบทความเกี่ยวกับงบกทม.</h3>
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
