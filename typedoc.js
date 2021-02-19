/**
 * typedoc 配置项
 * 快查地址: https://typedoc.org/guides/options/
 */
module.exports = {
  name: 'template',
  // 以 modules 的形式输出文档
  out: 'apis',
  exclude: '**/*+(index|.spec|.e2e).ts',
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  excludeNotExported: true,
  /**
   * 如果注释里包含 @category
   * 设为 false 则按照 category 分组显示
   * 否则按照 class interface 等默认分组显示
   */
  categorizeByGroup: false,
  categoryOrder: ['节点', '样式', '对象', '抽象对象'],
  includeDeclarations: true,
  includeVersion: true,
  /**
   * 不显示源码来源
   * 作为文档查阅的过程中这个信息比较干扰
   */
  disableSources: true,
  readme: './README.md',
  // 标记有 @internal 的代码将不会输出
  stripInternal: true,
  // 用于将 monorepo 的 路径 映射为 modules 名称
  'external-modulemap': 'packages/(.*)/src',
};
