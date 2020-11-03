import React from 'react';
import { Table, Tag } from "antd";
import "./table.css"
const { Column } = Table;

class TasksForGeneral extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
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
              tasks: ["Лаб-ная работа №3", "Учебник с 182 № 3, 9, 12."],
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
            <span>Домашние задания</span>
         
              <Table dataSource={data} size="small" pagination={false} showHeader={false} >
              <Column
                  title="Время"
                  dataIndex="time"
                  key="time"
                  render={(time) => (
                    <>
                      {
                          <>
                        <Tag color="blue" key={time[0]} style={{padding:'2px', margin:0}}>
                          {time[0]}/{time[1]}
                        </Tag>
                       
                       </>
                      }
                    </>
                  )}
                />
                <Column title="Предмет" dataIndex="subject" key="subject" />
                <Column
            title="Задания"
            dataIndex="tasks"
            key="tasks"
            render={(tasks) => (
                <>
                
                    <span style={{fontSize:"12px"}}> 
                      {tasks}
                    </span>
                   
                </>
              )}
          />
               
              </Table>
            </>
          );
        }



}
      
    



export default TasksForGeneral;