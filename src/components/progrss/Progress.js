import React from "react";
import { Input, Table } from "antd";
const { Column } = Table;
class Progress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          key: "1",
          name: "Лина",
          1: 3,
          2: 4,
          3: 5,
          4: 1,
        },
        {
          key: "2",
          name: "Женя",
          1: 2,
          2: 5,
          3: 1,
          4: 1,
        },
        {
          key: "3",
          name: "Малина",
          1: 1,
          2: 1,
          3: 1,
          4: 1,
        },
        {
          key: "4",
          name: "Вишня",
          1: 0,
          2: 0,
          3: 0,
          4: 1,
        },
      ],
    };
  }

  render() {
    let door = this.state.data.map((dat) => {
      return (
        <Column
          title={"Столибик " + dat.key}
          dataIndex={dat.key}
          name={dat.key}
        />
      );
    });

    return (
      <>
        <Table dataSource={this.state.data} size="small" pagination={false}  rowKey={record => console.log(record)}>
          <Column title="ФИО" dataIndex="name" name={this.state.data.name} />
          {door}
        </Table>
      </>
    );
  }
}

export default Progress;
