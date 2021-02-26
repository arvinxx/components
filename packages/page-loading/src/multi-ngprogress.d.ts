declare module 'multi-nprogress' {
  import { NProgress } from 'nprogress';

  declare const nProgress = () => NProgress;

  export default nProgress;
}
