import React, { useRef, useState } from 'react';
import { Button, message, notification } from 'antd';
import { request } from 'umi';
import { userInfo } from '../../utils/utils';
import ImportErrExcel from '../ImportErrExcel';
import { set } from 'lodash-es';
import ExportJsonExcel from 'js-export-excel';
const Export = (props) => {
  const { url, method, params, type } = props;
  const [showErr, setShowErr] = useState(false); // 编辑弹框是否显示
  const [errData, setErrData] = useState({}); // 编辑弹框是否显示
  const inputEl = useRef(null);
  // 获取用户信息
  const user = userInfo();
  console.log(user);

  // let user = {
  //   token: '1285098b09934eedb3f2a38dec8e6714',
  //   uid: '00001',
  //   userName: 'Boss',
  //   userhead: 'avatar/16057733108500005.png',
  //   brandId: '900000',
  //   unitId: 'BD001',
  //   _admin: 1,
  //   _brandAdmin: 0,
  // };

  const handleImport = (file) => {
    // 获取上传的文件对象
    const { files } = file.target;
    if (!files) return;
    const formData = new FormData();
    formData.append('file', files[0]);
    const hide = message.loading('数据导入中……');
    request(url, {
      method,
      headers: {
        // 'Content-Type': "multipart/form-data",
        token: user.token || '',
      },
      requestType: 'form',
      params: {
        ...params,
        uid: user.uid || '',
        brandId: user.brandId || '',
      },
      data: formData,
    })
      .then((res) => {
        hide();
        inputEl.current.value = '';
        console.log(res);
        if (res.errorCode == 200 || res.errorCode == '200') {
          message.success('导入成功!');
        } else {
          if (res.errorCode == 500 || res.errorCode == '500') {
            notification.error({
              description: res.errorMessage || '数据请求失败!',
              message: '',
            });
          } else {
            if (res.errorCode == 402 || res.errorCode == '402') {
              setErrData(res.data);
              setShowErr(true);
            } else {
              notification.warning({
                description: res.errorMessage || '数据请求失败!',
                message: '',
              });
            }
          }
          // message.error(res.errorMessage);
        }
        props.onImport();
      })
      .catch((err) => {
        hide();
        if (inputEl && inputEl.current) {
          inputEl.current.value = '';
        }

        message.error('数据导入失败!');
      });
  };

  // 导出Excel
  const downloadExcel = () => {
    let option = {}; //option代表的就是excel文件
    let dataTable = []; //excel文件中的数据内容
    if (errData && errData.existJson && errData.existJson.length > 0) {
      if (type == 1) {
        //泊位管理
        for (let i in errData.existJson) {
          //循环获取excel中每一行的数据
          let obj = {
            泊位编号: errData.existJson[i].parkingspaceCode,
            错误信息: errData.existJson[i].errInfo,
          };
          dataTable.push(obj); //设置excel中每列所获取的数据源
        }
        option.fileName = '泊位管理'; //excel文件名称
        option.datas = [
          {
            columnWidths: ['8', '8'],
            sheetData: dataTable, //excel文件中的数据源
            sheetName: '泊位管理', //excel文件中sheet页名称
            sheetFilter: ['泊位编号', '错误信息'], //excel文件中需显示的列数据
            sheetHeader: ['泊位编号', '错误信息'], //excel文件中每列的表头名称
          },
        ];
      } else if (type == 2) {
        //地磁设备
        for (let i in errData.existJson) {
          //循环获取excel中每一行的数据
          let obj = {
            设备编码: errData.existJson[i].hardwareCode,
            厂商: errData.existJson[i].supplierName,
            型号: errData.existJson[i].productName,
            错误信息: errData.existJson[i].errInfo,
          };
          dataTable.push(obj); //设置excel中每列所获取的数据源
        }
        option.fileName = '地磁设备'; //excel文件名称
        option.datas = [
          {
            columnWidths: ['8', '10', '10', '10'],
            sheetData: dataTable, //excel文件中的数据源
            sheetName: '地磁设备', //excel文件中sheet页名称
            sheetFilter: ['设备编码', '厂商', '型号', '错误信息'], //excel文件中需显示的列数据
            sheetHeader: ['设备编码', '厂商', '型号', '错误信息'], //excel文件中每列的表头名称
          },
        ];
      } else if (type == 3) {
        //高位设备
        for (let i in errData.existJson) {
          //循环获取excel中每一行的数据
          let obj = {
            设备编码: errData.existJson[i].hardwareCode,
            厂商: errData.existJson[i].supplierName,
            型号: errData.existJson[i].productName,
            错误信息: errData.existJson[i].errInfo,
          };
          dataTable.push(obj); //设置excel中每列所获取的数据源
        }
        option.fileName = '高位设备'; //excel文件名称
        option.datas = [
          {
            columnWidths: ['8', '10', '10', '10'],
            sheetData: dataTable, //excel文件中的数据源
            sheetName: '高位设备', //excel文件中sheet页名称
            sheetFilter: ['设备编码', '厂商', '型号', '错误信息'], //excel文件中需显示的列数据
            sheetHeader: ['设备编码', '厂商', '型号', '错误信息'], //excel文件中每列的表头名称
          },
        ];
      } else if (type == 4) {
        //手持终端
        for (let i in errData.existJson) {
          //循环获取excel中每一行的数据
          let obj = {
            设备编码: errData.existJson[i].hardwareCode,
            厂商: errData.existJson[i].supplierName,
            型号: errData.existJson[i].productName,
            IMEI: errData.existJson[i].imei,
            错误信息: errData.existJson[i].errInfo,
          };
          dataTable.push(obj); //设置excel中每列所获取的数据源
        }
        option.fileName = '手持终端'; //excel文件名称
        option.datas = [
          {
            columnWidths: ['8', '10', '10', '10', '10'],
            sheetData: dataTable, //excel文件中的数据源
            sheetName: '手持终端', //excel文件中sheet页名称
            sheetFilter: ['设备编码', '厂商', '型号', 'IMEI', '错误信息'], //excel文件中需显示的列数据
            sheetHeader: ['设备编码', '厂商', '型号', 'IMEI', '错误信息'], //excel文件中每列的表头名称
          },
        ];
      }

      console.log(option);
      // 创建一个ExportJsonExcel实例
      const exportExcel = new ExportJsonExcel(option);
      // 将数据保存到Excel并且导出
      exportExcel.saveExcel();
    } else {
      notification.warning({
        description: '暂无可下载数据!',
        message: '',
      });
    }
  };

  return (
    <span>
      <Button
        type="primary"
        onClick={(e) => {
          inputEl.current.click();
        }}
      >
        导入
      </Button>
      <input
        type="file"
        ref={inputEl}
        accept=".xlsx, .xls"
        style={{ display: 'none' }}
        onChange={async (e) => {
          handleImport(e);
        }}
      />
      {showErr && (
        <ImportErrExcel
          type={type}
          onClose={() => {
            setErrData({});
            setShowErr(false);
          }}
          onExport={() => {
            downloadExcel();
          }}
          data={errData}
        />
      )}
    </span>
  );
};

export default Export;
