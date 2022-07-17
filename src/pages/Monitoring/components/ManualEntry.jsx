import React, { createElement, useMemo } from 'react';
import { Select, Input, Modal, Row, Col, Tabs, Form, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { PassItem } from './ParkingMessage';

const licensePlateTypes = ['蓝牌', '黄牌', '新能源', '黑牌', '其他'];

const ManualEntry = React.memo(function ManualEntry() {
  const options = useMemo(() => {
    return [
      {
        label: '京',
        value: 'beijing',
      },
      {
        label: '津',
        value: 'tianjin',
      },
      {
        label: '冀',
        value: 'hebei',
      },
    ];
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          rowGap: '20px',
        }}
      >
        <div style={{ fontSize: '22px' }} title="车牌号码">
          车牌号码
        </div>
        <div
          style={{
            display: 'flex',
            columnGap: '10px',
            alignItems: 'center',
          }}
        >
          <Select placeholder="请选择" options={options} />
          <Input style={{ width: '400px' }} />
          <span>随机生成</span>
        </div>
        <div
          style={{
            display: 'flex',
            columnGap: '10px',
          }}
        >
          {licensePlateTypes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div>入场时间:当前时间</div>
      </div>

      <PassItem />
    </div>
  );
});

export default ManualEntry;
