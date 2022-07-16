import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Radio, Button } from 'antd';
import styles from './index.less';

const xiaochen = [
  {
    name: '登记入场',
    type: '1',
    children: [
      { name: '登记车牌_登记入场', type: '1' },
      { name: '无牌月租', type: '2' },
      { name: '电动二轮三轮', type: '3' },
      { name: '老年代步车', type: '4' },
      { name: '其他', type: '5' },
    ],
  },
  {
    name: '出场呼叫',
    type: '2',
    children: [
      { name: '登记车牌_出场呼叫', type: '1' },
      { name: '无牌月租', type: '2' },
      { name: '电动二轮三轮', type: '3' },
      { name: '老年代步车', type: '4' },
      { name: '其他', type: '5' },
    ],
  },
  {
    name: '支付异常',
    type: '3',
    children: [
      { name: '登记车牌_支付异常', type: '1' },
      { name: '无牌月租', type: '2' },
      { name: '电动二轮三轮', type: '3' },
      { name: '老年代步车', type: '4' },
      { name: '其他', type: '5' },
    ],
  },
  {
    name: '免费放行',
    type: '4',
    children: [
      { name: '登记车牌_免费放行', type: '1' },
      { name: '无牌月租', type: '2' },
      { name: '电动二轮三轮', type: '3' },
      { name: '老年代步车', type: '4' },
      { name: '其他', type: '5' },
    ],
  },
  {
    name: '系统或网络故障',
    type: '5',
    children: [
      { name: '登记车牌_系统或网络故障', type: '1' },
      { name: '无牌月租', type: '2' },
      { name: '电动二轮三轮', type: '3' },
      { name: '老年代步车', type: '4' },
      { name: '其他', type: '5' },
    ],
  },
];
export default React.memo(function CallMark(props) {
  const initSelectCall = useMemo(() => {
    return xiaochen[0].type;
  }, []);

  const [selectCall, setSelectCall] = useState(initSelectCall);
  const [reason, setReason] = useState();

  const handleCallClassification = useCallback(({ target: { value } }) => {
    setSelectCall(value);
  }, []);

  const reasons = useMemo(() => {
    return xiaochen.find((item) => item.type === selectCall).children;
  }, [selectCall]);

  const handleSubmit = useCallback(() => {
    // todo 提交
    console.log(selectCall, reason);
  }, [reason, selectCall]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div className={styles.CarChange}>
        <span className={styles.carType}>呼叫分类</span>
        <Radio.Group
          onChange={handleCallClassification}
          value={selectCall}
          optionType="button"
          className={styles.buttonSelect}
        >
          {xiaochen.map((item) => (
            <Radio value={item.type} key={item.type}>
              {item.name}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <div className={[`${styles.CarChange}`, `${styles.CarTitleChange}`].join(' ')}>
        <span className={styles.carType}>具体原因</span>
        <Radio.Group
          onChange={({ target: { value } }) => setReason(value)}
          value={reason}
          className={styles.reasonsClass}
        >
          {reasons.map((item) => (
            <Radio value={item.type} key={item.type}>
              {item.name}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <div style={{ textAlign: 'end', margin: '15px' }}>
        <Button type="primary" onClick={handleSubmit}>
          提交原因
        </Button>
      </div>
    </div>
  );
});
