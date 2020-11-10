import React from "react";
import { Table, Row, Col, List } from "antd";
import "./table.css";
const { Column } = Table;

class TasksForGeneral extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        key: "1",
        subject: "Математика",
        tasks: ["с 81, № 2,4,7,12."],
        time: ["08:00", "08:45"],
      },
      {
        key: "2",
        subject: "Русский язык",
        tasks: ["с 121, № 21, 22."],
        time: ["09:00", "09:45"],
      },
      {
        key: "3",
        subject: "Физика",
        tasks: ["Лаб-ная работа №3\n", "Учебник с 182 № 3, 9, 12."],
        time: ["10:00", "10:45"],
      },
      {
        key: "4",
        subject: "Литература",
        tasks: ["«Ворон» Эдгар Аллан По"],
        time: ["11:00", "11:45"],
      },
      {
        key: "5",
        subject: "Музыка",
        tasks: [],
        time: ["12:00", "13:45"],
      },
    ];

    return (
      <>
        <Row className="rowForGenral" style={{ minWidth: 260, boxShadow:'0 4px 8px rgba(0,0,0,0.12)', borderRadius: 3 }}>
          <Col
            className="colOfGeneral"
            flex="20px"
            style={{
              textAlign: "center",
              height: "inherit",
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
              backgroundColor: "#fafafa",
              borderRadius: 3,
            }}
          >
            Домашние задания
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
              Домашние задания
            </span>
            <Table
              dataSource={data}
              size={"small"}
              pagination={false}
              showHeader={false}
              expandable={{
                expandedRowRender: (record) => {
                  let list = [];
                  record.tasks.forEach((task) => {
                    list.push(<span>{task}</span>);
                  });

                  return (
                    <List
                      size="small"
                      bordered
                      dataSource={list}
                      renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                  );
                },
                rowExpandable: (record) => record.tasks.length > 0,
                defaultExpandAllRows: true,
              }}
            >
              <Column
                title="Время"
                dataIndex="time"
                key="time"
                render={(time) => (
                  <>
                    {time[0]}/{time[1]}
                  </>
                )}
              />
              <Column title="Предмет" dataIndex="subject" key="subject" />
            </Table>
          </Col>
        </Row>
      </>
    );
  }
}

export default TasksForGeneral;
