import React from 'react';
import { Menu } from 'antd';
import Schledule from '../schledule/Schledule';
import Attendance from '../attendance/Attendance';
import Progress from '../progrss/Progress'
import GeneralPage from '../general/GeneralPage';
import SignIn from '../signIn/SignIn';

class HomePage extends React.Component {
    state = {
        current: 'schledule',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };


    render() {
        const { current } = this.state;

    return (
        <>
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{marginBottom:'10px'}}>
        <Menu.Item key="home">
        Главная
        </Menu.Item>
        <Menu.Item key="schledule">
        Расписание
        </Menu.Item>
        <Menu.Item key="attendance" >
          Пропуски
        </Menu.Item>
        <Menu.Item key="progress" >
          Оценки
        </Menu.Item>
        <Menu.Item key="progress" style={{float:'right', width:'auto', textAlign:'center'}} >
        <SignIn className='menu-submenu' />
        </Menu.Item>
        
    
  
      </Menu>
      
        {current == "schledule" && <Schledule />}
        {current == "attendance" && <Attendance />}
        {current == "progress" && <Progress />}
        {current == "home" && <GeneralPage />}

      </>
    );
  }
    
}


export default HomePage;