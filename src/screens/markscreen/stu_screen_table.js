import React from "react";
import "./screen_table.css";
import ScreenHeader from "../components/screen_header";
import { Table } from "antd";
import plus from "../../assets/icon_aplus.png";

import Nav from "../../navbar"
function StuGradeTable() {
  const { Column, ColumnGroup } = Table;
  const data = [
    {
      key: 1,
      sname: "Toán",
      g151: 7,
      g451: 8,
      gck1: 9,
      gsk: 8,
      g152: 7,
      g452: 9,
      gck2: 8,
      gtk: 8,
    },
    {
      key: 2,
      sname: "Ngữ Văn",
      g151: 8,
      g451: 8,
      gck1: 9,
      gsk: 7,
      g152: 7,
      g452: 8,
      gck2: 8,
      gtk: 7,
    },
  ];
  return (
    <div>
      <Nav pageName="Bảng điểm" 
                    path={plus}
                    checkStu={true}/>
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "10px",
          marginTop: "10vh"
        }}
      >
        <Table dataSource={data}>
          <ColumnGroup title="Năm học 2021 - 2022" align="center" b>
            <Column
              title="Tên môn học"
              align="center"
              dataIndex="sname"
            ></Column>
            <Column title="15'" align="center" dataIndex="g151"></Column>
            <Column title="45'" align="center" dataIndex="g451"></Column>
            <Column title="CK1" align="center" dataIndex="gck1"></Column>
            <Column title="S.Kết" align="center" dataIndex="gsk"></Column>
            <Column title="15'" align="center" dataIndex="g152"></Column>
            <Column title="45'" align="center" dataIndex="g452"></Column>
            <Column title="CK2" align="center" dataIndex="gck2"></Column>
            <Column title="T.Kết" align="center" dataIndex="gtk"></Column>
          </ColumnGroup>
        </Table>
      </div>
    </div>
  );
}

export default StuGradeTable;
