import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

@withRouter
export default class AuthRoute extends React.Component{
  componentDidMount(){
    const publicList = ['/login','/register']
    const pathname = this.props.location.pathname;
    if(publicList.includes(pathname)){
      return null
    }
    // 获取用户信息
    axios.get('/user/info').then((res)=>{
      if(res.status == 200){
        console.log(res.data)
        if(res.data.code == 0){

        }else{
          this.props.history.push('/login')
        }
      }
    })
    // 是否登录
    // 现在的url地址，login不需要跳转
    // 用户的type 牛人？boss?
    // 用户信息是否完善
  }
  render(){
    return <p>判断跳转</p>
  }
}