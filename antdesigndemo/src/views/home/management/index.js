import React, { Component } from 'react';
import { Form, Select, Input, Button } from 'antd';

const CustomizedForm = Form.create({
    name: 'global_state',
    onFieldsChange(props, changedFields) {
      props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        console.log(props)
      return {
        username: Form.createFormField({
          ...props.username,
          value: props.username.value,
        }),
        age: Form.createFormField({
            ...props.age,
            value: props.age.value,
          }),
      };
    },
    onValuesChange(_, values) {
      console.log(values);
    },
  })(props => {
    const { getFieldDecorator } = props.form;
    return (
      <Form layout="inline">
        <Form.Item label="Username">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Username is required!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Age">
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Username is required!' }],
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  });


class Management extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fields: {
                username: {
                  value: 'benjycui',
                },
                age:{
                    value:18
                }
              },
         }
    }
    handleFormChange = changedFields => {
        this.setState(({ fields }) => ({
          fields: { ...fields, ...changedFields },
        }));
      };
      cancelEdit=()=>{
        this.setState(({ fields }) => ({
            fields: { username: {
                value: 'abs',
              },age:{
                  value:19
              }},
          }));
      }
    
      render() {
        const { fields } = this.state;
        return (
          <div>
            {/* <CustomizedForm {...fields} onChange={this.handleFormChange} />
            <Button type="primary" style={{marginLeft:'1rem'}} onClick={this.cancelEdit}>
                      Cancel
                    </Button> */}
                    Management
          </div>
        );
      }
}
export default Form.create({ name: 'coordinated' })(Management);
