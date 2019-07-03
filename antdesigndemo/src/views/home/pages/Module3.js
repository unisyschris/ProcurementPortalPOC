import * as React from 'react';
import StepperNoContent from '../../../components/StepperNoContent';
import WrappedDemoB from '../../../components/FormDemoB';
import { Divider } from 'antd';
import TableList from '../../../components/TableList'

class Module3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
   
    render() { 
        return ( <div className="module3">
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
 
export default Module3;