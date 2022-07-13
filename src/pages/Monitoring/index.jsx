/**
 * 监控中心
 */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import ParkingLot from '../../components/ParkingLot';
import ChanneInf from './components/ChanneInf'
import CallList from './components/CallList'
import MonitorVideo from './components/MonitorVideo'
import { Card , Row, Col} from 'antd';
import styles from './index.less';
const leftHeader = [
  { name: '托管车场', count: 35 },
  { name: '托管车场', count: 35 },
  { name: '托管车场', count: 35 },
  { name: '托管车场', count: 35 },
];

const rightHeader = [
  { name: '已接听呼叫数', count: 35 },
  { name: '托管车场', count: 35 },
  { name: '托管车场', count: 35 },
  { name: '托管车场', count: 35 },
];

export default React.memo(() => {
  const [showDetail, setshowDetail] = useState(false); //展示详情还是列表
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
          <ParkingLot height={'calc(100vh - 280px)'} />
       </Col>
       {  showDetail ? 
          <>
         <Col span={14} style={{padding:0}}>
              <ChanneInf height={'calc(100vh - 280px)'}/>
          </Col>
          <Col span={5}>
                <CallList height={'calc(100vh - 280px)'}/>
          </Col> 
          </>
          : 
          <>
          <Col span={8}>
            <MonitorVideo height={'calc(100vh - 280px)'}/>
          </Col>

        
          </>
          }
         )
      
          </Row>
      </div>
    </div>
   )
});
