import React from 'react';
import { Table, Tag } from "antd";
import "./table.css"
const { Column } = Table;

class LastMisses extends React.Component {
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
          }
      ];
  
      return (
        <>
        <br/>
        <span>Пропуски</span>
     
          <Table style={{height: '30%'}}  dataSource={data} size="small"  pagination={false} tableLayout='fixed' showHeader={false} >
          <Column
              title="Дата"
              dataIndex="date"
              key="date"
            />
               <Column
        title="Задания"
        dataIndex="status"
        key="status"
        render={ (status) =>{
            let color = 'red';
            if( status == 'Б' ) color = 'blue';
              return(
                <Tag color={color} key={status}>
                          {status}
                </Tag>
              )
            }
            }
      />
            <Column title="Предмет" dataIndex="subject" key="subject" />
         
           
          </Table>
        </>
      );
    }



}

export default LastMisses;