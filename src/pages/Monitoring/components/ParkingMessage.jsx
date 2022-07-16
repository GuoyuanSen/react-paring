import React, { useMemo, useRef, useState, useCallback, createElement } from 'react';
import { Card, Radio, Modal, Row, Col, Tabs } from 'antd';
const { TabPane } = Tabs;
import { ExclamationCircleOutlined } from '@ant-design/icons';
import PayImage from '@/assets/image/daizhifu.png';
const { confirm } = Modal;
import BasicInfo from './BasicInfo';
import CallMark from './CallMark'; //呼叫事件标记
import QuestionFeedback from './QuestionFeedback'; //呼叫事件标记
import styles from './index.less';
/**
 * 通道滞留信息
 */

const tabs = [
  {
    name: '人工入场',
    // todo
    // showBinding:
  },
  {
    name: '停车信息',
    // todo
    // showBinding:
  },
  {
    name: '月租信息',
    // todo
    // showBinding:
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
        bodyStyle={{ padding: '0' }}
        style={{
          background: '#1a2855',
          border: '1px solid #7aecff',
          color: '#fff',
          marginTop: '12px',
        }}
      >
        <Tabs defaultActiveKey="5" tabBarStyle={{ color: '#999999' }}>
          {/* <TabPane tab="人工入场" key="1">
            人工入场
          </TabPane>
          <TabPane tab="停车信息" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="月租信息" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="现场问题反馈" key="4">
            <QuestionFeedback />
          </TabPane>
          <TabPane tab="呼叫事件标记" key="5">
            <CallMark /> 
          </TabPane>*/}

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
