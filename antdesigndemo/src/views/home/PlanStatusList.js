import React, { Component } from 'react';
import TableList from '../../components/TableList'
class PlanStatusList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div style={{height:'auto',backgroundColor:'#fff',padding:'30px 20px 60px'}}>
           <h2>PlanStatusList</h2>
            <TableList></TableList>
        </div> );
    }
}
 
export default PlanStatusList;