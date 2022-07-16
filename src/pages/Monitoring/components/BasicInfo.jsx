import React, { useMemo, useState, useCallback } from 'react';
import { Card, Radio, Modal, Row, Col, Tabs } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import styles from './index.less';
const { TabPane } = Tabs;
import PayImage from '@/assets/image/daizhifu.png';
const { confirm } = Modal;

const carList = [
  { name: '临时车', type: 1 },
  { name: '月租车', type: 2 },
  { name: '免费车', type: 3 },
  { name: '黑名单', type: 4 },
];
const xiaochen = [
  { name: '小型车', type: '1' },
  { name: '大型车', type: '2' },
];

export default React.memo(function BasicInfo() {
  const title = '京B12345';
  const [selectCar, setValue] = useState('1');
  const onChangeVehicleType = useCallback(({ target: { value } }) => {
    confirm({
      title: '提示',
      icon: <ExclamationCircleOutlined />,
      content: '切换车型后，系统将按照已选择车型重新计算停车费用，请确认是否切换车型？',
      onOk() {
        setValue(value);
      },
    });
  }, []);
  const vehicleTypes = useMemo(() => {
    return xiaochen.map((item) => ({
      label: item.name,
      value: item.type,
    }));
  }, []);
  return (
    <Card
      bodyStyle={{ padding: '14px 0 0 12px' }}
      headStyle={{
        borderBottom: '1px solid #7aecff',
        color: '#fff',
        fontSize: '16px',
        lineHeight: '15px',
      }}
      title={title}
      extra={
        <a style={{ color: '#00F6FF', position: 'absolute', left: '129px', top: '16px' }}>
          更改车牌
        </a>
      }
      style={{
        background: '#1a2855',
        border: '1px solid #7aecff',
        color: '#fff',
        position: 'relative',
      }}
    >
      <div className={styles.CarChange}>
        <span className={styles.carType}>车辆类型</span>
        {carList.map((item) => {
          return (
            <i key={item.type} className={styles['carTypes_' + item.type]}>
              {item.name}
            </i>
          );
        })}
      </div>
      <br />
      <div className={styles.CarChange}>
        <span className={styles.carType}>
          <i>车</i>
          <i> 型</i>
        </span>
        <Radio.Group
          buttonStyle="solid"
          onChange={onChangeVehicleType}
          value={selectCar}
          optionType="button"
          className={styles.buttonSelect}
          options={vehicleTypes}
        />
      </div>
      <p className={styles.recordIsOut}>未匹配入场记录</p>

      <div className={styles.amountNumber}>
        <Row>
          <Col span={12} className={styles.amountNum}>
            <div className={styles.amountSum}>
              <span>55元</span>
              <span>消费金额</span>
            </div>
            <div className={styles.amountSum}>
              <span>10元</span>
              <span>抵扣金额</span>
            </div>
            <div className={styles.amountSum}>
              <span>45元</span>
              <span>应付金额</span>
            </div>
          </Col>
          <Col span={12} className={styles.payMoneyPark}>
            <div>
              <img src={PayImage} />
            </div>
            <div>
              <span>
                还需支付<em>45</em>
              </span>
              <span>推送订单</span>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
});
