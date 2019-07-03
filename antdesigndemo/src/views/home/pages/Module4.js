import * as React from 'react';

import Stepper from '../../../components/Stepper';
// import WrappedDemo from '../../../components/FormDemo';
import { Divider } from 'antd';
import Dialog from '../../../components/Dialog';
import TableList from '../../../components/TableList'
 
class Module4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
        let  role= localStorage.getItem('admin')
      }
    render() { 
        return ( <div className="module4">
             <div className="section">
                <Stepper></Stepper>
            </div>
            <Divider />
            <div className="section">
                <Dialog></Dialog>
            </div>
            <Divider />
            <TableList></TableList>
        </div> );
    }
}
 
export default Module4;