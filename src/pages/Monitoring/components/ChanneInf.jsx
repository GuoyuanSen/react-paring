import React, { useRef, useState } from 'react';
import { Card, Row, Col } from 'antd';
import styles from './index.less';
import { useCallback } from 'react';
/**
 * 通道滞留信息
 */
const parkingLotList = [
  {
    name: '北京测试停车场1',
    type: 2,
    titlemin: '黑名单车辆待入场',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',
    cheCar: '京A23940',
    xiaochron: '黑名单',
    time: '2022-02-10 10:20:30',
  },
  {
    name: '北京测试停车场2',
    type: 1,
    titlemin: '黑名单车辆待入场',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',
    cheCar: '京A23940',
    xiaochron: '黑名单',
    time: '2022-02-10 10:20:30',
  },
  {
    name: '北京测试停车场3',
    type: 1,
    titlemin: '黑名单车辆待入场',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',
    cheCar: '京A23940',
    xiaochron: '黑名单',
    time: '2022-02-10 10:20:30',
  },
  {
    name: '北京测试停车场4',
    type: 1,
    titlemin: '黑名单车辆待入场',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',
    cheCar: '京A23940',
    xiaochron: '黑名单',
    time: '2022-02-10 10:20:30',
  },
  {
    name: '北京测试停车场4',
    type: 1,
    titlemin: '黑名单车辆待入场',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',
    cheCar: '京A23940',
    xiaochron: '黑名单',
    time: '2022-02-10 10:20:30',
  },
  {
    name: '北京测试停车场4',
    type: 1,
    titlemin: '黑名单车辆待入场',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',
    cheCar: '京A23940',
    xiaochron: '黑名单',
    time: '2022-02-10 10:20:30',
  },
  {
    name: '北京测试停车场4',
    type: 1,
    titlemin: '黑名单车辆待入场',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',
    cheCar: '京A23940',
    xiaochron: '黑名单',
    time: '2022-02-10 10:20:30',
  },
  {
    name: '北京测试停车场4',
    type: 1,
    titlemin: '黑名单车辆待入场',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',
    cheCar: '京A23940',
    xiaochron: '黑名单',
    time: '2022-02-10 10:20:30',
  },
  {
    name: '北京测试停车场4',
    type: 1,
    titlemin: '黑名单车辆待入场',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',
    cheCar: '京A23940',
    xiaochron: '黑名单',
    time: '2022-02-10 10:20:30',
  },
];
export default React.memo(function ChanneInf(props) {
  const { height } = props;
  return (
    <div className={styles.parklist}>
      <Card
        headStyle={{ borderBottom: '1px solid #7aecff', color: '#fff', fontSize: '16px' }}
        bodyStyle={{ padding: '12px' }}
        title="通道滞留信息"
        style={{
          background: '#1a2855',
          border: '1px solid #7aecff',
          color: '#fff',
          lineHeight:'20px'
        }}
      >
        <div className={styles.plist} style={{ height: `${height}` }}>
          <Row gutter={16}>
            {parkingLotList.map((item, index) => (
              <Col span={8} key={index}>
                <Card
                  headStyle={{ borderBottom: '1px solid #7aecff', color: '#fff', fontSize: '16px' }}
                  size="small"
                  title={item.name}
                  extra={
                    <a className={item.type == 1 ? styles.onOrIn : styles.Out}>
                      {item.type == 1 ? '入' : '出'}
                    </a>
                  }
                  style={{
                    background: '#1a2855',
                    border: '1px solid #7aecff',
                    color: '#fff',
                    marginBottom: '20px',
                  }}
                >
                  <p className={styles.titleMin}>{item.titlemin}</p>
                  <div className={styles.cardMains}>
                    <img className={styles.imgSRC} src={item.imgSRC}></img>
                    <div>
                      <span className={styles.cheCar}>{item.cheCar}</span>
                      <span className={styles.xiaochron}>{item.xiaochron}</span>
                      <p className={styles.times}>{item.time}</p>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Card>
    </div>
  );
});
