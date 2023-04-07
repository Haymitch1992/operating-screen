import {request,METHOD} from '../utils/request.js'

// 一级接口
export async function postTrainOperation(loginForm:any) { 
  return request('/TrainOperation/mainPage', METHOD.POST,
    loginForm)
}

// 二级接口
export async function postTrainOperationLineIndex(loginForm:any) { 
  return request('/TrainOperation/lineIndex',METHOD.POST,loginForm)
}

// 获取 最大断面客流量 按线路
// 断面客流及运力
// 断面客流 按站/
export async function postLineSectionData(loginForm:any) { 
  return request('/AveLoadFactorofTransitNetwork/LineSectionData',METHOD.POST,loginForm)
}
//
export async function postLineTimeSerialData(loginForm:any) { 
  return request('/AveLoadFactorofTransitNetwork/LineTimeSerialData',METHOD.POST,loginForm)
}
export async function postTransitNetworkData(loginForm:any) { 
  return request('/AveLoadFactorofTransitNetwork/TransitNetworkData',METHOD.POST,loginForm)
}
///AveLoadFactorofTransitNetwork/