
import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, Space,message } from 'antd';
import logo from '@/assets/image/bglogin@2x.png';
import bgdi from '@/assets/image/bgdi@2x.png';
import loginletf from '@/assets/image/loginletf@2x.png';
import loginicon from '@/assets/image/loginicon.png';
import wodologo from '@/assets/image/zh@2x.png';
import suodingologo from '@/assets/image/lock@2x.png';
import eye from '@/assets/image/eye.png';
import title from '@/assets/image/title.png';
import { userLogin } from '../service';
import styles from './index.less';



const Login = (props) => {

  const handleSubmit = async (values) => {
    console.log(values)

    try {
      let res = await userLogin({
        loginName: values.username,
        loginPassword: values.password
      });
      console.log(res)
      const urlParams = new URL(window.location.href);
      const params = getPageQuery();
      message.success('登录成功！');
      console.log(urlParams)
      console.log(params)
      let { redirect } = params;

      if (redirect) {
        const redirectUrlParams = new URL(redirect);

        if (redirectUrlParams.origin === urlParams.origin) {
          redirect = redirect.substr(urlParams.origin.length);

          if (window.routerBase !== '/') {
            redirect = redirect.replace(window.routerBase, '/');
          }

          if (redirect.match(/^\/.*#/)) {
            redirect = redirect.substr(redirect.indexOf('#') + 1);
          }
        } else {
          window.location.href = '/';
          return;
        }
      }

      history.replace(redirect || '/');

      return true;
    } catch (error) {
      // message.error('获取数据失败!');
      return false;
    }
  };

  return (
    <div className={styles.login} style={{
      background: `url(${logo})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }}>

      <div className={styles.loginform} style={{
        background: `url(${bgdi})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}>

        <div className={styles.formleft} style={{
          background: `url(${loginletf})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}>
          <img src={loginicon} className={styles.licon} />
        </div>
        <div className={styles.formright}>
          <div className={styles.title}>
            <img alt="logo" className={styles.logotitle} src={title} />
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              autoLogin: true,
            }}
            onFinish={(values) => {
              handleSubmit(values);
              return Promise.resolve();
            }}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入账号!',
                },
              ]}
            >
              <Input className={styles.logininput} prefix={<img alt="logo" className={styles.logoimg} src={wodologo} />} placeholder="请输入账号" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>


                <Input className={styles.logininput}
                  prefix={<img alt="logo" className={styles.logoicon} src={suodingologo} />}
                  type="password"
                  placeholder="请输入密码"
                // iconRender={(visible) => (visible ? <img alt="logo" className={styles.logoeye} src={eye} /> : <img alt="logo" className={styles.logoeye} src={eye} />)}

                />
              </Space>
            </Form.Item>

            <Form.Item name="autoLogin" valuePropName="checked" style={{ textAlign: 'right' }}>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>


            <Form.Item>
              <Button className={styles.subbtn} type="primary" htmlType="submit">登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
