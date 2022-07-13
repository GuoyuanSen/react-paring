import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import styles from './index.less';

const GlobalHeaderRight = () => {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.baidu.com">
              修改密码
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.baidu.com">
              退出
            </a>
          )
        }
      ]}
    />
  );
  return (
    <div className={styles.rightinfo}>
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <span>首达科技</span>
            <DownOutlined style={{color:'#fff'}} />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
