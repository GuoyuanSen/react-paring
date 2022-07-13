
/**
 * 监控视频
 */
 import React, { useRef, useState } from 'react';
 import { Card, Row, Col } from 'antd';
 import ReactPlayer from 'react-player/lazy'
 import styles from './index.less';
const MonitorVideo = (props) => {
    const { height } = props;
    return (
     <div style={{ height: `${height}` }}>
        <div className={styles.MonitorVideo}></div>
        <Card
           bodyStyle={{padding: '0'}}
           headStyle={{borderBottom: '1px solid #7aecff',color:'#fff',fontSize:"16px"}}
           title="通道车辆照片-南门出口"
           style={{
             background: '#1a2855',
             border: '1px solid #7aecff',
             color: '#fff',
             lineHeight:'15px'
           }}
         >
          <img className={styles.imgCar} src="https://img1.baidu.com/it/u=7564749,1638981765&fm=253&fmt=auto&app=120&f=JPEG?w=820&h=461"></img>
          </Card>
          <Card
           bodyStyle={{padding: '0'}}
           headStyle={{borderBottom: '1px solid #7aecff',color:'#fff',fontSize:"16px",padding:"-10px"}}
           title="通道车辆监控"
           extra={
            <a style={{color:'#00F6FF'}}>查看入场照片</a>
          }
           style={{
             background: '#1a2855',
             border: '1px solid #7aecff',
             color: '#fff',
             lineHeight:'15px',
             marginTop: '18px'
           }}
         >
            <ReactPlayer controls url='https://open.ys7.com/v3/openlive/137765499_1_2.m3u8?expire=1657793057&id=467390830157078528&t=02b2f1239ae7ce7e4616c895284c1411d37c88e32006d0946e5929993d70d483&ev=100&accessToken=at.d2oo71fzcyf9gp6yb3qod9pl9a08d750-39k9q3bppa-1f6l0rs-pmzoakxuf' playing={true}/>
         
          </Card>
         
     </div>
    )}

export default MonitorVideo