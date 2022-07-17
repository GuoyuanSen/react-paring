import React, { useMemo, useRef, useState, useCallback, createElement } from 'react';
import { Card, Radio, Modal, Row, Col, Tabs, Button, Input } from 'antd';
const { TabPane } = Tabs;
import { ExclamationCircleOutlined } from '@ant-design/icons';
import PayImage from '@/assets/image/daizhifu.png';
const { confirm } = Modal;
import BasicInfo from './BasicInfo';
import ManualEntry from './ManualEntry';
import ParkingInfo from './ParkingInfo';
import MonthlyRentInfo from './MonthlyRentInfo';
import QuestionFeedback from './QuestionFeedback';
import CallMark from './CallMark'; //呼叫事件标记
import styles from './index.less';
/**
 * 通道滞留信息
 */

export const SearchItem = React.memo(() => {
  const handleSearch = useCallback(() => {
    // todo
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '10px',
      }}
    >
      <span>车牌号码</span>
      <Input
        style={{
          width: '200px',
        }}
      />
      <Button onClick={handleSearch}>查询</Button>
    </div>
  );
});

export const PassItem = React.memo(() => {
  const toPassItem = useCallback(() => {
    // todo
  }, []);
  return (
    <div
      style={{
        width: '100%',
        height: '100px',
        lineHeight: '100px',
        textAlign: 'center',
      }}
      onClick={toPassItem}
    >
      <Button type="primary">抬杆放行</Button>
    </div>
  );
});

const tabs = [
  {
    name: '人工入场',
    // todo
    showBinding: ManualEntry,
  },
  {
    name: '停车信息',
    // todo
    showBinding: ParkingInfo,
  },
  {
    name: '月租信息',
    // todo
    showBinding: MonthlyRentInfo,
  },
  {
    name: '现场问题反馈',
    showBinding: QuestionFeedback,
  },
  {
    name: '呼叫事件标记',
    showBinding: CallMark,
  },
];

export default React.memo(function ChanneList(props) {
  return (
    <div className={styles.parkingMessage}>
      <BasicInfo />
      <Card
        className={styles.parkingMessageWrapper}
        bodyStyle={{ padding: '0', display: 'flex', flex: '1' }}
        style={{
          background: '#1a2855',
          border: '1px solid #7aecff',
          color: '#fff',
          marginTop: '12px',
          display: 'flex',
          flex: '1',
        }}
      >
        <Tabs defaultActiveKey="5" tabBarStyle={{ color: '#999999' }}>
          {tabs.map((item) => (
            <TabPane tab={item.name} key={item.name}>
              {item.showBinding ? createElement(item.showBinding) : null}
            </TabPane>
          ))}
        </Tabs>
      </Card>
    </div>
  );
});
