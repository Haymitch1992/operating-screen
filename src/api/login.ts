import {request,METHOD} from '../utils/request.js'

// 用户登录 
// export async function postLogin(loginForm:any) { 
//   return request('/api/user/login/',METHOD.POST,loginForm)
// }


// 用户注册
export async function postRegist(loginForm:any) { 
  return request('/api/user/register/',METHOD.POST,loginForm)
}


// 发送邮箱验证码
export async function postEmailCode(loginForm:any) { 
  return request('/api/user/send_email_auth_code/',METHOD.GET,loginForm)
}

// 重置密码

export async function resetPassWord(loginForm:any) { 
  return request('/api/user/reset_password/',METHOD.POST,loginForm)
}

export async function checkToken(loginForm:any) { 
  return request('/api/user/login/',METHOD.GET,loginForm)
}
