
export default [
  // {
  //   name: 'login',//登录
  //   path: '/user/login',
  //   component: './User/login',
  // },
  {
    path: '/',
    redirect: '/monitoring',
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { 
        path: '/monitoring',
        icon: 'icon-chechangyunying',
        name: 'Monitoring',//监控中心
        component: './Monitoring'
      },
      {
        path: '/vehicle',
        name: 'Vehicle',//车辆数据
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
    ]
  },

];
