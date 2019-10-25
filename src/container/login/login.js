import React,{ Fragment } from 'react';
import Logo from '@/component/logo/logo'
import { List,InputItem,WingBlank,WhiteSpace,Button } from 'antd-mobile'

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.register = this.register
  }
  register=()=>{
    this.props.history.push('./register')
  }
  render(){
    return(
      <Fragment>
        <Logo></Logo>
        <h2>这是登录页</h2>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type='primary'>登录</Button>
          <WhiteSpace />
          <Button type='primary' onClick={this.register}>注册</Button>
        </WingBlank>
      </Fragment>
    )
  }
}