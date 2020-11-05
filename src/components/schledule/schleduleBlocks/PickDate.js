import { DatePicker } from 'antd';
import React from 'react';


class PickDate extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div>
             { window.innerWidth < 600 && <>
           <DatePicker style={{ width: '50%' }} size="small" />
           <DatePicker style={{ width: '50%' }} size="small" /> 
           </>
           }


            { window.innerWidth > 600 &&
            <DatePicker.RangePicker style={{ width: '100%' }} />}
        </div>;
    }
}


export default PickDate;