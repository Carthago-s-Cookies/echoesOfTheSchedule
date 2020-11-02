import React from "react";
import { Table, Tag } from "antd";
const { Column } = Table;
class CardsOfScleduleAndTasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: props.events,
    };
  }

  render() {
  

    const data = [
      {
        key: "1",
        subject: "Математика",
        tasks: ["Конспект &2", "Рабочая тетрадь: № 1,3,8","Конспект &2", "Рабочая тетрадь: № 1,3,8","Конспект &2", "Рабочая тетрадь: № 1,3,8"],
        address: "Василий Сергеевич",
        room: "8",
      },
      {
        key: "2",
        subject: "Русский",
        tasks: ["Конспект &2", "Рабочая тетрадь: № 1,3,8"],
        address: "Ньюргун Тимофеев",
        room: "24",
      },
      {
        key: "3",
        subject: "Астрономия",
        tasks: ["Конспект &2", "Рабочая тетрадь: № 1,3,8"],
        address: "Ирина Игоревна",
        room: "67",
      },
    ];

    return (
      <>
        <Table dataSource={data} size="small" pagination={false} showHeader={false}>
          <Column title="Предмет" dataIndex="subject" key="subject" />
          <Column title="Каб" dataIndex="room" key="room" />
          <Column
            title="Задания"
            dataIndex="tasks"
            key="tasks"
            render={(tasks) => (
              <>
                {tasks.map((task) => (
                  <Tag color="blue" key={task}>
                    {task}
                  </Tag>
                ))}
              </>
            )}
          />
          
         { window.innerWidth > 500 &&
         
         <Column title="Преподаватель" dataIndex="address" key="address" />}
        </Table>
      </>
    );
  }
}

export default CardsOfScleduleAndTasks;
