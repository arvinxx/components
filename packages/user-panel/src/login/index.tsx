import {
  LockTwoTone,
  MailTwoTone,
  MobileTwoTone,
  UserOutlined,
} from '@ant-design/icons';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import ProForm, {
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-form';
import LoginMessage from './LoginMessage';

import './index.less';
import { useFormatMessage } from '../hooks';
import type { StateType, IUserLogin } from '../types';

export interface LoginProps {
  userLogin?: StateType;
  /**
   * 获取校验码方法
   */
  onClickCaptcha?: (mobile: string) => Promise<boolean>;
  handleSubmit?: IUserLogin.LoginSubmit;
  captchaCountDown?: number;
  /**
   * 忘记密码 url
   */
  forgotUrl?: string;
}

const Login: React.FC<LoginProps> = (props) => {
  const {
    userLogin = {},
    onClickCaptcha,
    handleSubmit,
    captchaCountDown,
    forgotUrl,
  } = props;
  const { status, type: loginType } = userLogin;
  const [type, setType] = useState<IUserLogin.LoginType>('account');
  const [submitting, setLoading] = useState(false);

  const f = useFormatMessage();

  return (
    <div className="avx-user-panel-login-container">
      <ProForm<IUserLogin.LoginParams>
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          render: (_, dom) => dom.pop(),
          searchConfig: {
            submitText: f('login.submit'),
          },
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={async (values) => {
          setLoading(true);
          await handleSubmit({ ...values, type });
          setLoading(false);
          return Promise.resolve();
        }}
      >
        <Tabs
          activeKey={type}
          type={'card'}
          onChange={(e) => setType(e as IUserLogin.LoginType)}
        >
          <Tabs.TabPane key="account" tab={f('login.accountLogin.tab')} />
          <Tabs.TabPane key="mobile" tab={f('login.phoneLogin.tab')} />
        </Tabs>

        {status === 'error' && loginType === 'account' && !submitting && (
          <LoginMessage content={f('login.accountLogin.errorMessage')} />
        )}
        {type === 'account' && (
          <>
            <ProFormText
              name="userName"
              fieldProps={{
                size: 'large',
                prefix: (
                  <UserOutlined className="avx-user-panel-login-prefixIcon" />
                ),
              }}
              placeholder={f('login.username.placeholder')}
              rules={[
                {
                  required: true,
                  message: f('login.username.required'),
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: (
                  <LockTwoTone className="avx-user-panel-login-prefixIcon" />
                ),
              }}
              placeholder={f('login.password.placeholder')}
              rules={[
                {
                  required: true,
                  message: f('login.password.required'),
                },
              ]}
            />
          </>
        )}

        {status === 'error' && loginType === 'mobile' && !submitting && (
          <LoginMessage content="验证码错误" />
        )}
        {type === 'mobile' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: (
                  <MobileTwoTone className="avx-user-panel-login-prefixIcon" />
                ),
              }}
              name="mobile"
              placeholder={f('login.phoneNumber.placeholder')}
              rules={[
                {
                  required: true,
                  message: f('login.phoneNumber.required'),
                },
                {
                  pattern: /^1\d{10}$/,
                  message: f('login.phoneNumber.invalid'),
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: (
                  <MailTwoTone className="avx-user-panel-login-prefixIcon" />
                ),
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={f('login.captcha.placeholder')}
              countDown={captchaCountDown}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${f('pages.getCaptchaSecondText')}`;
                }
                return f('login.phoneLogin.getVerificationCode');
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: f('login.captcha.required'),
                },
              ]}
              onGetCaptcha={async (mobile) => {
                if (!onClickCaptcha) {
                  message.error(f('login.captcha.function.required'));

                  throw Error(f('login.captcha.function.required'));
                }
                const result = await onClickCaptcha(mobile);

                if (result === false) {
                  return;
                }

                message.success('获取验证码成功！');
              }}
            />
          </>
        )}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            {f('login.rememberMe')}
          </ProFormCheckbox>
          {forgotUrl ? (
            <a
              style={{
                float: 'right',
              }}
              href={forgotUrl}
            >
              {f('login.forgotPassword')}
            </a>
          ) : null}
        </div>
      </ProForm>
    </div>
  );
};

export default Login;
