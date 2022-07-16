import React, { useRef, useState } from 'react';
import { Card, Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import styles from './index.less';
import { useCallback } from 'react';
/**
 * 通道滞留信息
 */
const parkingLotList = [
  {
    name: '北京测试停车场1',
    type: 2,
    titlemin: '地面出口',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',

    time: '2022-02-10 10:20:30',
  },
  {
    name: '北京测试停车场1',
    type: 2,
    titlemin: '地面出口',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',

    time: '2022-02-10 10:20:30',
  },
  {
    name: '北京测试停车场1',
    type: 2,
    titlemin: '地面出口',
    imgSRC:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.moyublog.com%2Fd%2Ffile%2F2020-12-28%2Fb514b1db666b44c67f9fd37e15286f0c.jpg&refer=http%3A%2F%2Ffile.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660273194&t=e08392bf771df1d020008417afd23411',

    time: '2022-02-10 10:20:30',
  },
];
export default React.memo(function ChanneList(props) {
  const { height } = props;
  return (
    <div className={styles.parklist}>
      <Card
        bodyStyle={{ padding: '12px' }}
        headStyle={{ borderBottom: '1px solid #7aecff', color: '#fff', fontSize: '16px' }}
        title="呼叫列表"
        style={{
          background: '#1a2855',
          border: '1px solid #7aecff',
          color: '#fff',
          lineHeight: '20px'
        }}
      >
        <div className={styles.plist} style={{ height: `${height}` }}>
          {parkingLotList.map((item, index) => (
            <Card
              key={index}
              headStyle={{ borderBottom: '1px solid #7aecff', color: '#fff', fontSize: '16px' }}
              size="small"
              title={item.name}
              extra={<Button size="small">主动呼叫</Button>}
              style={{
                background: '#1a2855',
                border: '1px solid #7aecff',
                color: '#fff',
                marginBottom: '20px',
              }}
            >
              <div className={styles.cardMains}>
                <img className={styles.imgSRC} src={item.imgSRC}></img>
                <div>
                  <span className={styles.cheCar}>{item.titlemin}</span>
                  <p className={styles.times}>{item.time}</p>
                  <div>
                    {' '}
                    <Button size="small" icon={<PhoneOutlined />} style={{ marginRight: '6px' }}>
                      挂断
                    </Button>
                    <Button size="small" type="primary" icon={<PhoneOutlined />}>
                      接听
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
});
