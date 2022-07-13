import React, { useRef, useState } from "react";
import { Button, Form, Input, Select, Pagination, Popover } from "antd";
import styles from "./index.less";
import { useCallback } from "react";
const parkingLotList = [
  {
    name: "北京测试停车场1",
    totalCount: 450,
    currentCount: 25,
    children: [
      {
        name: "京B12345",
        payType: "临停",
        time: "202-01-01 12:23:34",
        status: "已出场",
        type:1,
        img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ntimg.cn%2F20140412%2F18279937_180818648179_2.jpg&refer=http%3A%2F%2Fpic.ntimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660230642&t=56e1c95f2e5625060b430e8ac313300d"
      },
      {
        name: "京B12345",
        payType: "临停",
        time: "202-01-01 12:23:34",
        status: "已入场",
        type:2,
        img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ntimg.cn%2F20140412%2F18279937_180818648179_2.jpg&refer=http%3A%2F%2Fpic.ntimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660230642&t=56e1c95f2e5625060b430e8ac313300d"
      },
    ],
  },
  {
    name: "北京测试停车场2",
    totalCount: 450,
    currentCount: 25,
    children: [
      {
        name: "京B12345",
        payType: "临停",
        time: "202-01-01 12:23:34",
        status: "已出场",
        type:1,
        img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ntimg.cn%2F20140412%2F18279937_180818648179_2.jpg&refer=http%3A%2F%2Fpic.ntimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660230642&t=56e1c95f2e5625060b430e8ac313300d"
      },
      {
        name: "京B12345",
        payType: "临停",
        time: "202-01-01 12:23:34",
        status: "已出场",
        type:1,
        img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ntimg.cn%2F20140412%2F18279937_180818648179_2.jpg&refer=http%3A%2F%2Fpic.ntimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660230642&t=56e1c95f2e5625060b430e8ac313300d"
      },
      {
        name: "京B12345",
        payType: "临停",
        time: "202-01-01 12:23:34",
        status: "已出场",
        type:1,
        img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ntimg.cn%2F20140412%2F18279937_180818648179_2.jpg&refer=http%3A%2F%2Fpic.ntimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660230642&t=56e1c95f2e5625060b430e8ac313300d"
      },
      {
        name: "京B12345",
        payType: "临停",
        time: "202-01-01 12:23:34",
        status: "已出场",
        type:1,
        img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ntimg.cn%2F20140412%2F18279937_180818648179_2.jpg&refer=http%3A%2F%2Fpic.ntimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660230642&t=56e1c95f2e5625060b430e8ac313300d"
      },
      {
        name: "京B12345",
        payType: "临停",
        time: "202-01-01 12:23:34",
        status: "已出场",
        type:1,
        img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ntimg.cn%2F20140412%2F18279937_180818648179_2.jpg&refer=http%3A%2F%2Fpic.ntimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660230642&t=56e1c95f2e5625060b430e8ac313300d"
      },
    ],
  },
];
const ParkingLot = (props) => {
  const { height } = props;
  const [form] = Form.useForm();
  const handleSearch = useCallback(() => {
    // 搜索
  }, []);
  return (
    <div className={styles.parklist}>
      <div className={styles.search}>
        <Input placeholder="输入停车场名称" />
        <Button type="primary" onClick={handleSearch}>
          查询
        </Button>
      </div>
      <div className={styles.plist} style={{ height: `${height}` }}>
        {parkingLotList.map((item) => (
          <div key={item.name} className={styles.pItem}>
            <div className={styles.pItemHeader}>
              <Popover content={item.name}>
                <div className={styles.plname}>{item.name}</div>
              </Popover>
              <div className={styles.plcont}>
                剩余车位：{item.currentCount}/{item.totalCount}
              </div>
            </div>
            <div className={styles.pItemContent}>
              {item.children.map((i,index) => (
                <div key={index} className={styles.pItemMain}>
                  <img className={styles.icon} src={i.img}></img>
                  <div className={styles.itemContent}>
                    <div>
                      <span className={styles.plnum}>{i.name}</span>
                      <span className={styles.pltype}>
                        {i.payType}
                      </span>
                    </div>
                    <div>
                      <span className={styles.plnum}>{i.time}</span>
                      <span className={`${styles.pltype} ${styles.abnormal}`}>
                        {i.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <Pagination simple defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default ParkingLot;
