import React from 'react';
import SignIn from '../signIn/SignIn';
class GeneralPage extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div>Главная
             <SignIn className='menu-submenu' />
        </div>;
       
   
    }
}



export default GeneralPage;