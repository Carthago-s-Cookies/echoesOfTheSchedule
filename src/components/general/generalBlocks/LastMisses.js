import React from "react";
import { Table, Tag, Row, Col } from "antd";

import "./table.css";
const { Column } = Table;

class LastMisses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        key: "1",
        subject: "Математика",
        status: "Н",
        date: "03.10.20",
      },
      {
        key: "2",
        subject: "Русский язык",
        status: "Н",
        date: "02.10.20",
      },
      {
        key: "3",
        subject: "Химия",
        status: "Н",
        date: "28.09.20",
      },
      {
        key: "4",
        subject: "Биология",
        status: "Б",
        date: "25.09.20",
      },
      {
        key: "5",
        subject: "Акустика",
        status: "Н",
        date: "23.09.20",
      },
    ];

    return (
      <>
        <Row className='rowForGenral' style={{minWidth:260, boxShadow:'0 4px 8px rgba(0,0,0,0.12)', borderRadius: 3}}>
          <Col
            className="colOfGeneral"
            flex="20px"
            style={{
              textAlign: "center",
              height: "inherit",
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
              backgroundColor: '#fafafa',
              borderRadius: 2
            }}
          >
            Пропуски
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
                dataIndex="status"
                key="status"
                render={(status) => {
                  let color = "red";
                  if (status == "Б") color = "blue";
                  return (
                    <Tag color={color} key={status}>
                      {status}
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

export default LastMisses;
