import React, { Component } from 'react';
import TableList from '../../components/TableList'
class PlanStatusList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div style={{height:'auto',backgroundColor:'#fff',padding:'10px 16px 50px'}}>
           <h2>PlanStatusList</h2>
            <TableList></TableList>
        </div> );
    }
}
 
export default PlanStatusList;