import React from "react";
import "./screen_table.css";
import ScreenHeader from "../components/screen_header";
<<<<<<< HEAD
import { Table } from "antd";
=======
import { Table } from 'antd'
import Navbar from '../../navbar'
import plus from "../../assets/icon_aplus.png";

>>>>>>> 57a4800fe0f039b3b689d13b5e855861742bacad
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
<<<<<<< HEAD
      <ScreenHeader name="Bảng điểm"></ScreenHeader>
      <hr
        style={{
          // marginTop: "vh",
          backgroundColor: "#eee",
          height: 0.05,
          width: "auto",
          borderColor: "transparent",
          boxShadow: "0px -3px 8px 1px rgba(210, 210, 210, 0.6)",
        }}
      />
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "10px",
        }}
      >
        <Table dataSource={data}>
=======
      <Navbar pageName="Bảng điểm" path={plus} />
      <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto", padding: '10px' }}>
        <Table dataSource={data} >
>>>>>>> 57a4800fe0f039b3b689d13b5e855861742bacad
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
