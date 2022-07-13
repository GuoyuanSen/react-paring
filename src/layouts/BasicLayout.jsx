
import { PageContainer, ProLayout, MenuDataItem } from '@ant-design/pro-components';
import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useIntl, connect, history } from 'umi';
import { Result, Button } from 'antd';
import RightContent from '@/components/GlobalHeader/RightContent';
import { MessageOutlined } from '@ant-design/icons';
import { useState } from 'react';
const defaultMenus = [
  { 
    path: '/monitoring',
    name: 'Monitoring',//监控中心
    component: './Monitoring',
  },
  {
    path: '/vehicle',
    name: 'Vehicles',//车辆数据
    component: './Vehicle'
  },
  {
    path: '/CallStatistics',
    name: 'CallStatistics',//呼叫数据统计
    component: './CallStatistics'
  },
  {
    path: '/dutyOperation',
    name: 'dutyOperation',//当班操作统计
    component: './DutyOperation'
  },
  {
    path: '/feedback',
    name: 'Feedback',//现场问题反馈
    component: './Feedback'
  },
];

const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);

const BasicLayout = (props) => {
  console.log(props)
  const {
    settings
  } = props;
  const [pathname, setPathname] = useState('/monitoring');
  useEffect(() => {
    console.log(pathname)
  }, []);

  const loopMenuItem = (menus) =>
    menus.map(({ icon, routes, ...item }) => ({
      ...item,
      icon: icon && IconMap[icon],
      routes: routes && loopMenuItem(routes),
    }));
  const menuDataRender = (menuList) =>
    menuList.map((item) => {
      const localItem = {
        ...item,
        children: item.children ? menuDataRender(item.children) : undefined,
      };
      return localItem;
    });
  const { formatMessage } = useIntl();
  return (
    <ProLayout
      formatMessage={formatMessage}
      {...props}
      {...settings}
      onMenuHeaderClick={() => history.push('/monitoring')}
      rightContentRender={() => <RightContent />}
      menu={{ request: async () => loopMenuItem(defaultMenus) }}
      location={{
        pathname: pathname,
      }}
      menuItemRender={(menuItemProps, defaultDom) => {
        return (<a 
          onClick={() => {
            setPathname(menuItemProps.path || '/monitoring');
          }}
        >
          <Link to={menuItemProps.path}>{defaultDom}</Link>
        </a>) ;
      }}

    >
      {/* <PageContainer content="">
        <div style={{ height: 'calc(100vh - 100px)' }} >
          {children}
        </div>
      </PageContainer> */}
    </ProLayout>

  );
};

export default connect(({ global, settings }) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
