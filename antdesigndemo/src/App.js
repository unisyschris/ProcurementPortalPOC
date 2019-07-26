import React, { Component } from 'react';
import { Router, Route, Switch,Redirect } from 'react-router-dom';
// import Home from './views/home/index';
import HomePage from './views/home/index.Container';
import { history } from './utils/history';
import Login from './views/login/Login.Container';
import { setHtmlFontSize, resetHtmlFontSize } from './utils/setHtmlFontSize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.resize = () => { setHtmlFontSize() };
  }
  componentDidMount(){
    window.addEventListener('resize', this.resize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    resetHtmlFontSize();
  }
  render() {
    setHtmlFontSize()
    return (<div>
      <Router history={history}>
        <Switch>
         <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/`} component={HomePage}></Route>
        </Switch>
      </Router>
    </div>);
  }
}


export default App;
