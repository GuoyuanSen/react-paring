import React, { useRef } from 'react';
import { Button, message, notification, Table } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import sty from '../../global.less';
const ImportErrExcel = (props) => {
  const { data, type } = props;
  let columns = [];
  if (type == 1) {
    //泊位管理
    columns = [
      {
        title: '泊位编号',
        dataIndex: 'parkingspaceCode',
        key: 'parkingspaceCode',
      },
      {
        title: '错误信息',
        dataIndex: 'errInfo',
        key: 'errInfo',
      },
    ];
  } else if (type == 2) {
    columns = [
      {
        title: '设备编码',
        dataIndex: 'hardwareCode',
        key: 'hardwareCode',
      },
      {
        title: '厂商',
        dataIndex: 'supplierName',
        key: 'supplierName',
      },
      {
        title: '型号',
        dataIndex: 'productName',
        key: 'productName',
      },
      {
        title: '错误信息',
        dataIndex: 'errInfo',
        key: 'errInfo',
      },
    ];
  } else if (type == 3) {
    columns = [
      {
        title: '设备编码',
        dataIndex: 'hardwareCode',
        key: 'hardwareCode',
      },
      {
        title: '厂商',
        dataIndex: 'supplierName',
        key: 'supplierName',
      },
      {
        title: '型号',
        dataIndex: 'productName',
        key: 'productName',
      },
      {
        title: '错误信息',
        dataIndex: 'errInfo',
        key: 'errInfo',
      },
    ];
  } else if (type == 4) {
    columns = [
      {
        title: '设备编码',
        dataIndex: 'hardwareCode',
        key: 'hardwareCode',
      },
      {
        title: '厂商',
        dataIndex: 'supplierName',
        key: 'supplierName',
      },
      {
        title: '型号',
        dataIndex: 'productName',
        key: 'productName',
      },
      {
        title: 'IMEI',
        dataIndex: 'imei',
        key: 'imei',
      },
      {
        title: '错误信息',
        dataIndex: 'errInfo',
        key: 'errInfo',
      },
    ];
  }
  return (
    <div className={sty.errbox}>
      <div className={sty.errboxcont}>
        <div className={sty.errtitle}>{data.importStatus}</div>
        <div
          className={sty.errclose}
          onClick={() => {
            props.onClose();
          }}
        >
          <CloseCircleOutlined className={sty.errcliseicon} />
        </div>
        <div className={sty.errtable}>
          <Table
            scroll={{ y: '400' }}
            pagination={false}
            columns={columns}
            dataSource={data.existJson}
          />
        </div>
        <div className={sty.errbtn}>
          <Button
            type="primary"
            onClick={(e) => {
              props.onExport();
            }}
          >
            下载
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImportErrExcel;
