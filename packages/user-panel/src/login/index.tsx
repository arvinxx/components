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
import type { StateType, LoginParamsType } from '../type';
import LoginMessage from './LoginMessage';

import styles from './index.less';
import { useFormatMessage } from '../hooks';

export type LoginProps = {
  userLogin?: StateType;
  submitting?: boolean;
  onClickCaptcha?: (mobile: string) => boolean;
  handleSubmit?: (values: LoginParamsType) => void;
};

const Login: React.FC<LoginProps> = (props) => {
  const { userLogin = {}, submitting, onClickCaptcha, handleSubmit } = props;
  const { status, type: loginType } = userLogin;
  const [type, setType] = useState<string>('account');

  const f = useFormatMessage();

  return (
    <div className={styles.main}>
      <ProForm<LoginParamsType>
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={(values) => {
          handleSubmit(values);
          return Promise.resolve();
        }}
      >
        <Tabs activeKey={type} type={'card'} onChange={setType}>
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
                prefix: <UserOutlined className={styles.prefixIcon} />,
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
                prefix: <LockTwoTone className={styles.prefixIcon} />,
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
                prefix: <MobileTwoTone className={styles.prefixIcon} />,
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
                prefix: <MailTwoTone className={styles.prefixIcon} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={f('login.captcha.placeholder')}
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
                  message.error(f('login.captcha.required'));
                  return;
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
          <a
            style={{
              float: 'right',
            }}
          >
            {f('login.forgotPassword')}
          </a>
        </div>
      </ProForm>
    </div>
  );
};

export default Login;
