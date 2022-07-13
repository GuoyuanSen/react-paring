import React from 'react';
import { Button, message, notification } from 'antd';
import { request } from 'umi';
import { userInfo } from '../../utils/utils';

const Export = (props) => {
  const { url, method, fileName = '导出数据', params = {}, data = {} } = props;
  // 获取用户信息
  const user = userInfo();

  // 当前日期
  function getDate(formdata) {
    let now = new Date();
    let year = now.getFullYear(); //年
    let month = now.getMonth() + 1; //月
    let day = now.getDate(); //日
    let hh = now.getHours(); //时
    let mm = now.getMinutes(); //分
    let ss = now.getSeconds(); //分
    switch (formdata) {
      case 'yyyy':
        return year;
        break;
      case 'mm':
        return month;
        break;
      case 'dd':
        return day;
        break;
      case 'yyyy-mm':
        return year + '-' + (month >= 10 ? month : '0' + month);
        break;
      case 'first':
        return year + '-' + (month >= 10 ? month : '0' + month) + '-' + '01';
        break;
      case 'yyyy-mm-dd':
        return (
          year + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' + day)
        );
        break;
      case 'yyyymmdd':
        return year + '' + (month >= 10 ? month : '0' + month) + '' + (day >= 10 ? day : '0' + day);
        break;
      default:
        return '';
        break;
    }
  }

  const handleExport = () => {
    const hide = message.loading('数据导出中……');
    console.log('aaaa');
    request(url, {
      method,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        token: user.token || '',
      },
      responseType: 'blob',
      params: {
        ...params,
        uid: user.uid || '',
        brandId: user.brandId || '',
      },
      data: {
        ...data,
        uid: user.uid || '',
        brandId: user.brandId || '',
      },
    })
      .then((response) => {
        //必须用 response
        hide();
        if (response.type === 'application/json') {
          // 返回json给出错误提示
          const fileReader = new FileReader();
          fileReader.onloadend = () => {
            const jsonData = JSON.parse(fileReader.result);
            notification.warning({
              description: jsonData.errorMessage || '下载失败！',
              message: '',
            });
          };
          fileReader.readAsText(response);
        } else {
          // 下载文件
          const blob = new Blob([response]);
          const fileNames = fileName + getDate('yyyymmdd') + '.xlsx';
          const selfURL = window[window.webkitURL ? 'webkitURL' : 'URL'];
          let elink = document.createElement('a');
          if ('download' in elink) {
            elink.download = fileNames;
            elink.style.display = 'none';
            elink.href = selfURL['createObjectURL'](blob);
            document.body.appendChild(elink);
            console.log(elink);
            // 触发链接
            elink.click();
            selfURL.revokeObjectURL(elink.href);
            document.body.removeChild(elink);
          } else {
            navigator.msSaveBlob(blob, fileName);
          }
        }
      })
      .catch((err) => {
        message.error('数据导出失败!');
        console.log(err);
      });
  };

  return (
    <Button type="primary" onClick={() => handleExport()}>
      导出
    </Button>
  );
};

export default Export;
