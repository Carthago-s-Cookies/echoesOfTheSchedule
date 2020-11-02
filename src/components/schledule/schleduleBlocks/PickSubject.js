import React from "react";
import { Select } from 'antd';

const { Option } = Select;

class PickSubject extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

   
  render() {
    return (
      <>
        <Select
          showSearch
          size="small"
          style={{ width: "50%", marginBottom:'10px', paddingLeft: '3px', }}
          placeholder="Предмет"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Математика</Option>
          <Option value="lucy">Физика</Option>
          <Option value="tom">Астраномия</Option>
        </Select>
      </>
    );
  }
}


export default PickSubject;