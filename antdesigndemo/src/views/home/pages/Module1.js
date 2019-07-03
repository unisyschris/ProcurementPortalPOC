import * as React from 'react';
import M1Part from './M1Part';
import M2Part from './M2Part';
import M3Part from './M3Part';
import { Route, Switch, Redirect } from 'react-router-dom';
import StepperNoContent from '../../../components/StepperNoContent';
import WrappedDemo from '../../../components/FormDemo';
import { Divider } from 'antd';
import TableList from '../../../components/TableList';
import { connect } from 'react-redux';
class Module1 extends React.Component {
    constructor(props) {
        super(props);
       
    }
   
    render() {
        return (<div className="module1">

            <div className="section">
                <StepperNoContent></StepperNoContent>
            </div>
            <Divider />
            <div className="section">
                <WrappedDemo ></WrappedDemo>
            </div>
            <Divider />
            <TableList></TableList>
        </div>);
    }
}
// const Module1
export default Module1;