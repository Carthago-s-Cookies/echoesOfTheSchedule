import React from "react";
import { Table, Tag, Row, Col } from "antd";
import "./table.css";

const { Column } = Table;

class LastMarks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        key: "1",
        subject: "Математика",
        mark: 5,
        date: "03.10.20",
      },
      {
        key: "2",
        subject: "Русский язык",
        mark: 4,
        date: "02.10.20",
      },
      {
        key: "3",
        subject: "Химия",
        mark: 3,
        date: "28.09.20",
      },
      {
        key: "4",
        subject: "Биология",
        mark: 4,
        date: "25.09.20",
      },
      {
        key: "5",
        subject: "Акустика",
        mark: 1,
        date: "23.09.20",
      },
      {
        key: "7",
        subject: "Музыка",
        mark: 4,
        date: "21.09.20",
      },
    ];

    return (
      <>
        <Row className="rowForGenral" style={{ minWidth: 260, boxShadow:'0 4px 8px rgba(0,0,0,0.12)', borderRadius: 3}}>
          <Col
            className="colOfGeneral"
            flex="20px"
            style={{
              textAlign: "center",
              height: "inherit",
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
              backgroundColor: "#fafafa",
              borderRadius: 2,
            }}
          >
            Последние оценки
          </Col>
          <Col flex="auto">
            <span
              className="labelOfGeneral"
              style={{
                textAlign: "center",
                backgroundColor: "#fafafa",
                borderRadius: 3,
              }}
            >
              Пропуски
            </span>
            <Table
              dataSource={data}
              size="small"
              pagination={false}
              showHeader={false}
            >
              <Column title="Дата" dataIndex="date" key="date" />
              <Column title="Предмет" dataIndex="subject" key="subject" />
              <Column
                title="Задания"
                dataIndex="mark"
                key="mark"
                render={(mark) => {
                  let color = "red";
                  if (mark == 2) color = "orange";
                  if (mark == 3) color = "orange";
                  if (mark == 4) color = "blue";
                  if (mark == 5) color = "green";
                  return (
                    <Tag color={color} key={mark}>
                      {mark}
                    </Tag>
                  );
                }}
              />
            </Table>
          </Col>
        </Row>
      </>
    );
  }
}

export default LastMarks;
