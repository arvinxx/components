/**
 * 登录方式
 */
export type LoginType =
  /**
   * 账号密码登录
   */
  | 'account'
  /**
   * 手机验证码登录
   */
  | 'mobile';

export interface LoginStatus {
  /**
   * 登录状态
   */
  status?: 'ok' | 'error';
  /**
   * 用户登录方式
   */
  type?: LoginType;
  /**
   * 登录的用户类型
   */
  currentAuthority?: 'user' | 'guest';
}

/**
 * 账号登录参数
 */
export interface AccountLoginParams {
  userName: string;
  password: string;
}

/**
 * 验证码登录参数
 */
export interface MobileLoginParams {
  mobile: string;
  captcha: string;
}

/**
 * 统一登录参数
 */
export interface LoginParams extends AccountLoginParams, MobileLoginParams {}

/**
 * 发送登录请求参数
 */
export interface RequestParams extends Partial<LoginParams> {
  type: LoginType;
}

/**
 * 登录提交按钮方法
 */
export type LoginSubmit = (values: RequestParams) => Promise<LoginStatus>;
