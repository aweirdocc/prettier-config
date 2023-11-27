/** @type {import('prettier').Config} */
export default {
  semi: true, // 代码结尾是否加分号
  singleQuote: true, // 是否使用单引号
  htmlWhitespaceSensitivity: 'ignore', //  HTML 空白敏感性 default: 'css'
  trailingComma: 'all', // 在对象或数组最后一个元素后面是否加逗号，可选值"[none：不追加 | es5：追加]
  bracketSpacing: true, // 在对象，数组括号与代码之间加空格
  tabWidth: 2,  // 代码缩进空格数
  useTabs: true,  // 使用制表符缩进而不是空格缩进
  arrowParens: 'avoid', // 单个参数的箭头函数不加括号 x => x
  overrides: [
    {
      files: 'pnpm-lock.yaml',
      options: {
        requirePragma: true, // default: false
      },
    },
  ],
}