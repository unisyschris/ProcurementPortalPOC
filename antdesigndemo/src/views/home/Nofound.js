import React, { Component } from 'react';
// import { Result, Button } from 'antd';
import { connect } from 'react-redux';
class Nofound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log(this.props.isNoFound)
        this.props.hideNav()
    }
    render() {
        console.log(this.props)
        return (<div>
          <div className="notfound">
                <div className="notfound-404">
                    <h1>4<span>0</span>4</h1>
                    
                </div>
                <p> The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <a href={`${process.env.PUBLIC_URL}/login`}>Login Page</a>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.user.isNoFound)
    return {
        isNoFound: state.user.isNoFound
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        hideNav: () => dispatch({ type: 'IS_NAV_SHOW', data: true })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nofound);
