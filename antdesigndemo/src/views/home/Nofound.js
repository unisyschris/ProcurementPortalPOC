import React, { Component } from 'react';
// import { Result, Button } from 'antd';
class Nofound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            {/* <Result
                status="404"
                title="404"
                subTitle="'Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            /> */}
            No Found page
        </div>
        );
    }
}

export default Nofound;