/**
 * 监控视频
 */
import React, { useRef, useState } from 'react';
import { Card, Modal,Button } from 'antd';
import DraggableAntdModal from 'draggable-antd-modal'
import VideoPlayer from '@/components/VideoPlayer';
import styles from './index.less';
export default React.memo(function MonitorVideo(props) {
  const { height } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const lookPicture = () => {
    setIsModalVisible(true);
  };
  return (
    <div style={{ height: `${height}` }}>
      <div className={styles.MonitorVideo}></div>
      <Card
        bodyStyle={{ padding: '0' }}
        headStyle={{ borderBottom: '1px solid #7aecff', color: '#fff', fontSize: '16px' }}
        title="通道车辆照片-南门出口"
        style={{
          background: '#1a2855',
          border: '1px solid #7aecff',
          color: '#fff',
          lineHeight: '15px',
          position: 'relative',
        }}
      >
        <img
          className={styles.imgCar}
          src="https://img1.baidu.com/it/u=7564749,1638981765&fm=253&fmt=auto&app=120&f=JPEG?w=820&h=461"
        ></img>
        <ul className={styles.switchIn}>
          <li>关闸</li>
          <li>开闸</li>
        </ul>
      </Card>
      <Card
        bodyStyle={{ padding: '0' }}
        headStyle={{
          borderBottom: '1px solid #7aecff',
          color: '#fff',
          fontSize: '16px',
          padding: '-10px',
        }}
        title="通道车辆监控"
        extra={
          <a
            onClick={lookPicture}
            style={{ color: '#00F6FF', position: 'absolute', left: '129px', top: '16px' }}
          >
            查看入场照片
          </a>
        }
        style={{
          background: '#1a2855',
          border: '1px solid #7aecff',
          color: '#fff',
          lineHeight: '15px',
          marginTop: '10px',
          position: 'relative',
        }}
      >
        <VideoPlayer
          src="https://open.ys7.com/v3/openlive/137765499_1_2.m3u8?expire=1657793057&id=467390830157078528&t=02b2f1239ae7ce7e4616c895284c1411d37c88e32006d0946e5929993d70d483&ev=100&accessToken=at.d2oo71fzcyf9gp6yb3qod9pl9a08d750-39k9q3bppa-1f6l0rs-pmzoakxuf"
          width="495"
          height="300"
        />
        <ul className={styles.switchIn}>
          <li>开启对讲视频</li>
        </ul>
      </Card>
      <DraggableAntdModal
      draggable
        title="查看入场照片"
        cancelText="关闭"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        footer={[
          <Button key="button1" onClick={() => { setIsModalVisible(false) }}>关闭</Button>
        ]}
      >
        <img
          className={styles.imgCar}
          src="https://img1.baidu.com/it/u=7564749,1638981765&fm=253&fmt=auto&app=120&f=JPEG?w=820&h=461"
        ></img>
      </DraggableAntdModal>
    </div>
  );
});
