import React from "react";
import { Select } from 'antd';

const { Option } = Select;



class PickGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Select
          showSearch
          size="small"
          style={{ width: "50%", marginBottom:'10px', paddingRight: '3px' }}
          placeholder="Курс"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Иб-021</Option>
          <Option value="lucy">Ибо-041</Option>
          <Option value="tom">Ибо-121</Option>
        </Select>
      </>
    );
  }
}

export default PickGroup;
