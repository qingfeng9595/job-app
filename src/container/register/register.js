import React, { Fragment } from "react";
import Logo from "@/component/logo/logo";
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from "antd-mobile";
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux'; 
const RadioItem = Radio.RadioItem;

@connect(
  state=>state.user,
  { register }
)
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'',
      pwd:'',
      repeatpwd:'',
      type: "genius"
    };
  }
  handleChange(key,val){
    this.setState({
      [key]:val
    })
  }
  handleRegister=()=>{
    console.log(this.state)
    this.props.register(this.state)
  }
  render() {
    return (
      <Fragment>
        <Logo />
        <h2>这是注册页</h2>
        <WingBlank>
          <List>
            { this.props.msg?<p>{this.props.msg}</p>:null }
            <InputItem
              onChange={v=>this.handleChange('user',v)}
            >用户名</InputItem>
            <WhiteSpace />
            <InputItem
              type='password'
              onChange={v=>this.handleChange('pwd',v)}
            >密码</InputItem>
            <WhiteSpace />
            <InputItem
              type='password'
              onChange={v=>this.handleChange('repeatpwd',v)}
            >确认密码</InputItem>
            <WhiteSpace />
            <RadioItem 
              checked={this.state.type == "genius"}
              onChange={()=>this.handleChange('type','genius')}
              >牛人</RadioItem>
            <WhiteSpace />
            <RadioItem 
              checked={this.state.type == "boss"}
              onChange={()=>this.handleChange('type','boss')}
              >BOSS</RadioItem>
            <Button type="primary"
              onClick={this.handleRegister}
            >提交</Button>
            <WhiteSpace />
          </List>
        </WingBlank>
      </Fragment>
    );
  }
}
