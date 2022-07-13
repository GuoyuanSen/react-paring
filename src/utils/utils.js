import { parse } from 'querystring';
import JSEncrypt from 'jsencrypt';
/* eslint no-useless-escape:0 import/prefer-default-export:0 */

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = (path) => reg.test(path);

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export const getPageQueryIndex = (url, parameter) => {
  const index = url.lastIndexOf(parameter);
  url = url.substring(index + 1, url.length);
  return url;
};
/**
 * 验证手机号格式
 * @param {*} numbers 手机号
 * @returns 
 */
export const requiredPhone = (numbers) => {
  const reg = /^[1][3-9][\d]{9}/;
  if (reg.test(numbers)) {
    return true;
  } else {
    return false;
  }
};




// 加密
export function encrypt(txt) {
  const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD\n' +
    '2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ=='
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  return encrypt.encrypt(txt);
}


export const userInfo = () => {
  // const userIndex = getPageQueryIndex(top.window.location.href, '=');
  // console.log(userIndex);
  // const user = JSON.parse(window.parent.localStorage.user);
  // const userInfo = user[userIndex];
  // console.log('========用户信息=========');
  // console.log(userInfo);
  // console.log(user[userIndex]);
  // userInfo.userId = userInfo.uid;
  // return userInfo;

  // return {
  //   token: '1285098b09934eedb3f2a38dec8e6714',
  //   uid: 'b169080fd24b4ee7980f32dab9f0a967',
  //   userId: 'b169080fd24b4ee7980f32dab9f0a967',
  //   userName: '路内停车超级管理员（测试）',
  //   userhead: 'avatar/16057733108500005.png',
  //   brandId: '900000',
  //   unitId: 'BD001',
  //   _admin: 0,
  //   _brandAdmin: 0,
  // };
  return {};
};

// 获取页面授权按钮
export const getPageBtns = () => {
  // let pathname = 'webroadside/' + window.location.hash;

  // if (!window.localStorage) {
  //   alert('浏览器不支持localstorage');
  // } else {
  //   var storage = top.window.localStorage;
  //   var menusArr = JSON.parse(storage.menus);
  //   let currPage = menusArr.find(function (item) {
  //     if (item.href == pathname) {
  //       return item;
  //     }
  //   });
  //   if (currPage) {
  //     return currPage.buttons ? currPage.buttons : [];
  //   } else {
  //     return [];
  //   }
  // }


  return [];
};
