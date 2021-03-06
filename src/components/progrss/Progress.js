import React from "react";
import { Input, Table } from "antd";
const { Column } = Table;
class Progress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          key: "mark081120",
          name: "Лина",
          mark081120: 3,
          mark091120: 4,
          mark101120: 5,
          mark111120: 1,
          mark121120: 1,
          mark131120: 1,
          mark141120: 1,
        },
        {
          key: "mark091120",
          name: "Женя",
          mark081120: 2,
          mark091120: 5,
          mark101120: 1,
          mark111120: 1,
          mark121120: 1,
          mark131120: 1,
          mark141120: 1,
        },
        {
          key: "mark101120",
          name: "Малина",
          mark081120: 1,
          mark091120: 1,
          mark101120: 1,
          mark111120: 1,
          mark121120: 1,
          mark131120: 1,
          mark141120: 1,
        },
        {
          key: "mark111120",
          name: "Вишня",
          mark081120: 0,
          mark091120: 0,
          mark101120: 0,
          mark111120: 1,
          mark121120: 1,
          mark131120: 1,
          mark141120: 1,
        },
        {
          key: "mark121120",
          name: "Апельсин",
          mark081120: 0,
          mark091120: 0,
          mark101120: 0,
          mark111120: 1,
          mark121120: 1,
          mark131120: 1,
          mark141120: 1,
        },
        {
          key: "mark131120",
          name: "Рябина",
          mark081120: 0,
          mark091120: 0,
          mark101120: 0,
          mark111120: 1,
          mark121120: 1,
          mark131120: 1,
          mark141120: 1,
        },
        {
          key: "mark141120",
          name: "Крапива",
          mark081120: 0,
          mark091120: 0,
          mark101120: 0,
          mark111120: 1,
          mark121120: 1,
          mark131120: 1,
          mark141120: 1,
        },
      ],
    };
  }

  changeValue = (record, dat, event) => {
    let newData = this.state.data
    let serachI = 0

    let i = 0;
    while (i < this.state.data.length) {
      if (record.key == this.state.data[i].key){
        serachI = i
      }
      i++;
    }
    console.log("Номер элемента в массиве > ", serachI)
    console.log("Искомое значение > ", dat )
    console.log("Объект в котором ищем > ", this.state.data[serachI])
    console.log("Нужное значение > ", this.state.data[serachI][dat])
    console.log(event.target.value)
    
    newData[serachI][dat] = Number(event.target.value)
    console.log("Нужное значение после обновления > ", newData[serachI][dat])
    this.setState({data: newData}, () => console.log(this.state.data))

  }

  render() {
    let door = this.state.data.map((dat) => {

      // Здесь лучше передалть на количество переменных mark иначе если будет слишком мало людей, не будут выводится все оценки
      return (
        <Column
          title={dat.key}
          width="50px"
          dataIndex={dat.key}
          name={dat.key}
          render={(text, record) => (
            <>
              <Input bordered={false} defaultValue={text}  onChange={ (event) =>  this.changeValue(record, dat.key, event)}></Input>
            </>
          )}
        />
      );
    });

    return (
      <>
        <Table
          scroll={{ x: 'fit-content' }}
          dataSource={this.state.data}
          size="small"
          pagination={false}
          sticky="true"
        >
          <Column title="ФИО"  width="100px" dataIndex="name" name={this.state.data.name}  fixed='left'/>
          {door}
        </Table>
      </>
    );
  }
}

export default Progress;
