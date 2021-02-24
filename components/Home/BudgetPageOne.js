import React from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import children from "assets/images/children.png";
import p_icon from "assets/images/p_icon.svg";

export default function BudgetPageOne(props) {
  const { active_index } = props;

  return (
    <div
      className="budget-page-one bg-green-default fixed z-10 inset-0 flex items-center pointer-events-none"
      style={{ top: "60px" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <div className="left">
            <h2 className="d2 leading-tight">
              <span className="d2 text-white-default">
                สิ้นปี 2562
                <br />
                กรุงเทพมีประชากร
              </span>
              <br />
              5,666,264 คน
            </h2>

            <h2 className="d2 leading-tight mt-14">
              <span className="d2 text-white-default">ใช้งบประมาณมากถึง</span>
              <br />
              80,000 ล้านบาท
            </h2>

            <h3 className="d3 mt-8">
              แต่เราก็ยังเห็นหลายปัญหากวนใจ ที่เกิดขึ้นซ้ำๆ และยังไม่ถูกแก้
            </h3>
          </div>

          <div className="right text-center flex items-center justify-center relative">
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
                className="content bg-white-default bg-opacity-75 p-5 rounded-md absolute top-2/4 transform -translate-y-2/4 left-2/4 -translate-x-2/4 shadow-xl"
                style={{ minWidth: "387px" }}
              >
                <h5 className="text-lg">
                  ในปี 2562 กทม. ใช้เงินดูแลประชาชนเฉลี่ย
                </h5>

                <div className="budget bg-green-light rounded-md px-4 py-2 my-2">
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
              <div
                className="content bg-white-default p-2 rounded-md absolute inset-x-0 bottom-0 shadow-xl flex items-center w-max mx-auto cursor-pointer pointer-events-auto"
                style={{ width: "fit-content" }}
              >
                <Image width={30} height={30} src={p_icon} alt={p_icon} />

                <h3 className="ml-2">อ่านบทความเกี่ยวกับงบกทม.</h3>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
}
