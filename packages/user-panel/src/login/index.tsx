import { LockOutlined, MailOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import LoginErrorMessage from './LoginErrorMessage';

import './index.less';
import { useFormatMessage } from '../components';
import type { IUserLogin } from '../types';
import * as H from 'history';
import { useHistory } from 'react-router';

export interface LoginProps {
  /**
   * 获取校验码方法
   */
  onCaptchaClick?: (mobile: string) => Promise<boolean>;
  /**
   * 提价
   */
  onSubmit?: IUserLogin.LoginSubmit;
  /**
   * 验证码倒数
   */
  captchaCountDown?: number;
  /**
   * 忘记密码 url
   */
  onForgotClick?: (history: H.History) => void;
}

const Login: React.FC<LoginProps> = (props) => {
  const { onCaptchaClick, onSubmit, captchaCountDown, onForgotClick } = props;

  const [type, setType] = useState<IUserLogin.LoginType>('account');
  const [submitting, setLoading] = useState(false);

  const [loginStatus, setLoginStatus] = useState<IUserLogin.LoginStatus>({});
  const { status, type: loginType } = loginStatus;

  const f = useFormatMessage();
  const history = useHistory();

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
          const result = await onSubmit({ ...values, type });
          setLoginStatus(result);
          setLoading(false);
        }}
      >
        <Tabs activeKey={type} type={'card'} onChange={(e) => setType(e as IUserLogin.LoginType)}>
          <Tabs.TabPane key="account" tab={f('login.accountLogin.tab')} />
          <Tabs.TabPane key="mobile" tab={f('login.phoneLogin.tab')} />
        </Tabs>

        {status === 'error' && loginType === 'account' && !submitting && (
          <LoginErrorMessage content={f('login.accountLogin.errorMessage')} />
        )}
        {type === 'account' && (
          <>
            <ProFormText
              name="userName"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className="avx-user-panel-login-prefixIcon" />,
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
                prefix: <LockOutlined className="avx-user-panel-login-prefixIcon" />,
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
          <LoginErrorMessage content={f('login.phoneLogin.errorMessage')} />
        )}
        {type === 'mobile' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className="avx-user-panel-login-prefixIcon" />,
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
                prefix: <MailOutlined className="avx-user-panel-login-prefixIcon" />,
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
              phoneName={'mobile'}
              onGetCaptcha={async (mobile) => {
                if (!onCaptchaClick) {
                  message.error(f('login.captcha.function.required'));

                  throw Error(f('login.captcha.function.required'));
                }
                const result = await onCaptchaClick(mobile);

                if (result === false) {
                  return;
                }

                message.success(f('login.captcha.fetch.success'));
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
          {onForgotClick ? (
            <a
              style={{
                float: 'right',
              }}
              onClick={() => {
                onForgotClick(history);
              }}
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
