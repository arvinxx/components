export namespace IUserLogin {
  export type LoginType = 'account' | 'mobile';

  export interface LoginStatus {
    status?: 'ok' | 'error';
    type?: LoginType;
    /**
     * 登录的用户类型
     */
    currentAuthority?: 'user' | 'guest';
  }

  export interface AccountLoginParams {
    userName: string;
    password: string;
  }
  export interface MobileLoginParams {
    mobile: string;
    captcha: string;
  }
  export interface LoginParams extends AccountLoginParams, MobileLoginParams {}

  export interface RequestParams extends Partial<LoginParams> {
    type: LoginType;
  }

  export type LoginSubmit = (values: RequestParams) => Promise<void>;
}
