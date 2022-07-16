/**
 * 监控中心
 */
import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import ParkingLot from '../../components/ParkingLot';
import ChanneInf from './components/ChanneInf';
import CallList from './components/CallList';
import MonitorVideo from './components/MonitorVideo';
import ParkingMessage from './components/ParkingMessage';
import { Card, Row, Col } from 'antd';
import styles from './index.less';
const leftHeader = [
  { name: '托管车场1', count: 35 },
  { name: '托管车场2', count: 35 },
  { name: '托管车场3', count: 35 },
  { name: '托管车场4', count: 35 },
];

const rightHeader = [
  { name: '已接听呼叫数', count: 35 },
  { name: '托管车场1', count: 35 },
  { name: '托管车场2', count: 35 },
  { name: '托管车场3', count: 35 },
];

export default React.memo(() => {
  const [showDetail, setShowDetail] = useState(''); //展示详情还是列表

  const handleClick = useCallback((item) => {
    console.log(item, 123321);
    setShowDetail(item);
  }, []);

  return (
    <div className={styles.aisleset}>
      <div className={styles.header}>
        <div className={styles.left}>
          {leftHeader.map((item) => (
            <span key={item.name}>
              {item.name} : {item.count}
            </span>
          ))}
        </div>
        <div className={styles.right}>
          {rightHeader.map((item) => (
            <span key={item.name}>
              {item.name} : {item.count}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <Row gutter={24}>
          <Col span={5}>
            <ParkingLot height={'calc(100vh - 240px)'} handleClickMain={handleClick} />
          </Col>
          {showDetail ? (
            <>
              <Col span={14} style={{ padding: 0 }}>
                <ChanneInf height={'calc(100vh - 228px)'} />
              </Col>
              <Col span={5}>
                <CallList height={'calc(100vh - 228px)'} />
              </Col>
            </>
          ) : (
            <>
              <Col span={8}>
                <MonitorVideo height={'calc(100vh - 228px)'} />
              </Col>
              <Col span={11}>
               <ParkingMessage/>
              </Col>
            </>
          )}
        </Row>
      </div>
    </div>
  );
});
