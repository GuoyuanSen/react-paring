import { extend } from 'umi-request';
import cookie from 'react-cookies';
import { notification } from 'antd';
import { userInfo, encrypt } from './utils';
import { newUrl } from './urlFilter'


const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/** 异常处理程序 */
const errorHandler = (response) => {
  console.log(response);
  console.log('....3');
  if (response && response.errorCode) {
    const errorText = codeMessage[response.errorCode] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw new Error({ code: data.errorCode, msg: data.errorMessage || '数据请求失败!' });
  // return response;
};
const user = userInfo();
console.log(user);

/** 配置request请求时的默认参数 */
const request = extend({
  // errorHandler, // 默认错误处理 不用这里 我注释了
  credentials: 'include', // 默认请求是否带上cookie
});
// request请求拦截器, 改变url 或 options
request.interceptors.request.use((url, options) => {

  const headers = {
    'Content-Type': options.requestType ? options.requestType : '',
    'token': user?.token || 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI0NTczM2NiYjk3MzE0Zjg0OTZmYTI5YTNmNjFjMzhmMSIsInVzZXIiOiJhZG1pbiIsInN1YiI6ImFkbWluIn0.L43wwvJLOyv5xeCqL-fnNp6IHS-G0AJodZ0jzh2aKW_nQLtL2JEtF2osAdSgJC9Wx6CYSfl3vczTnboWpv3xJA'
  };
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  let _url = newUrl(url);
  return {
    url: `${_url}`,
    options: { ...options, headers }
  };
});
// request响应拦截器, 统一处理错误信息
request.interceptors.response.use(async (response, options) => {
  if (options.responseType == 'blob' || options.requestType == 'form') return response; // blob 类型直接返回 不处理
  const data = await response.clone().json();
  console.log(data)

  if (data.code !== 200 && data.code !== '200') {

    if (data.code == 500 && data.code == '500') {
      notification.error({
        description: data.msg || '数据请求失败!',
        message: '',
      });
    } else {
      notification.warning({
        description: data.msg || '数据请求失败!',
        message: '',
      });
    }
    throw new Error({ code: data.code, msg: (data.msg || '数据请求失败!') });
  } else {
    return response;
  }
});
export default request;
