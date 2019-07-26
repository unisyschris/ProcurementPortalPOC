import React, { Component } from 'react';
import { Button} from 'antd';
class Complaints extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
      
    }
    ClickBtn=()=>{
        console.log('click btn')
        window.alert('test selenium')
    }
    render() { 
        return (<div>
            Complaints
            <Button onClick={this.ClickBtn}  type="primary">test selenium</Button>
        </div>  );
    }
}
 
export default Complaints;