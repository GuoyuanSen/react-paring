import React, { useRef, useState } from 'react';
import { Radio,Button } from 'antd';
import styles from './index.less';

const xiaochen = [
  { name: '登记入场', type: '1' },
  { name: '出场呼叫', type: '2' },
  { name: '支付异常', type: '3' },
  { name: '免费放行', type: '4' },
  { name: '系统或网络故障', type: '5' },
];
const jutiReson = [
  { name: '登记车牌', type: '1' },
  { name: '无牌月租', type: '2' },
  { name: '电动二轮三轮', type: '3' },
  { name: '老年代步车', type: '4' },
  { name: '其他', type: '5' },
];
export default React.memo(function CallMark(props) {
  const [selectCall, setValueCall] = useState('1');
  const CallClassification = ({ target: { value } }) => {
    setValueCall(value);
  };
  return (
    <>
      <div className={styles.CarChange}>
        <span className={styles.carType}>呼叫分类</span>
        <Radio.Group
          onChange={CallClassification}
          value={selectCall}
          optionType="button"
          className={styles.buttonSelect}
        >
          {xiaochen.map((item, index) => (
            <Radio value={item.type}>{item.name}</Radio>
          ))}
        </Radio.Group>
      </div>
      <div className={[`${styles.CarChange}`,`${styles.CarTitleChange}`].join(' ')}>
        <span className={styles.carType}>具体原因</span>
        <Radio.Group
          onChange={CallClassification}
          value={selectCall}
          className={styles.reasonsClass}
        >
          {jutiReson.map((item, index) => (
            <Radio value={item.type}>{item.name}</Radio>
          ))}
        </Radio.Group>
      </div>
      <div style={{textAlign:"end",margin:"15px"}}><Button type="primary">提交原因</Button></div>
      
    </>
  );
});
