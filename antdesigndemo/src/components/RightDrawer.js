import React from 'react';
import { Drawer,message } from 'antd';


class RightDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkColor:0,
            color: ['rgb(245, 34, 45)', 'rgb(250, 84, 28)', 'rgb(250, 173, 20)', 'rgb(19, 194, 194)', 'rgb(82, 196, 26)', 'rgb(24, 144, 255)', 'rgb(47, 84, 235)', 'rgb(114, 46, 209)']
        }
    }
    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }

    setTheme=(index)=>{
        this.setState({
            checkColor:index
        })
    }
    handleColorChange = (varname, color) => {
        const { vars } = this.state;
        if (varname) vars[varname] = color;
        console.log(vars);
        window.less
          .modifyVars(vars)
          .then(() => {
            // message.success(`Theme updated successfully`);
            this.setState({ vars });
            localStorage.setItem('app-theme', JSON.stringify(vars));
          })
          .catch(error => {
            message.error('Failed to update theme');
          });
      };
    
    render() {
        const { onClose, drawerVisible } = this.props
        const { color,checkColor } = this.state
        return (<div>
            <Drawer
                title="Basic Drawer"
                placement="right"
                // closable={false}
                onClose={onClose}
                visible={drawerVisible}
                width={300}
            >
                <h3>Theme Color</h3>
                <div className="theme-color-content">
                    {color.map((val, index) => {
                      return  <div className="theme-color-block" key={index} style={{ backgroundColor: val }} onClick={this.setTheme.bind(this,index)}>
                            <i aria-label="icon: check" className="anticon anticon-check">
                               { checkColor===index && <svg viewBox="64 64 896 896" class data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                            </svg>}
                              
                            </i>
                        </div>
                    })}

                    {/* <div className="theme-color-block" style={{ backgroundColor: 'rgb(250, 84, 28)' }}></div> */}
                </div>
            </Drawer>
        </div>);
    }
}
export default RightDrawer;