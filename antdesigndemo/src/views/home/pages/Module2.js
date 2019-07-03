import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import StepperNoContent from '../../../components/StepperNoContent';
import WrappedDemoB from '../../../components/FormDemoB';
import { Divider } from 'antd';
import TableList from '../../../components/TableList';
 
class Module2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
   
    render() { 
        return ( <div className="module2">
             <div className="section">
                <StepperNoContent></StepperNoContent>
            </div>
            <Divider/>
            <div className="section">
               <WrappedDemoB ></WrappedDemoB>
            </div>
            <Divider />
            <TableList></TableList>
        </div> );
    }
}
 
export default Module2;