/*
 * @Author: liuruijun
 * @Date: 2020-09-04 14:13:05
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-04 15:24:46
 * @Description: file content
 */
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'], // 禁用 分号
    'no-multiple-empty-lines': ['error'], // 代码空行 数量
    'linebreak-style': [0, 'error', 'windows'], // 使用windows的换行
    'comma-dangle': [2, 'never'], //  对象数组最后一个不带逗号
    'no-trailing-spaces': 0, // 禁用 校验代码末尾带空格
    'import/no-dynamic-require': 0, // 禁用 动态require
    'import/no-unresolved': 0,
    'no-param-reassign': 0, // 声明为函数参数的变量可能会引起误解
    'max-len': ['error', 150], // 单行代码最大长度
    'guard-for-in': 0, // 禁用 禁用for in 循环
    'no-shadow': 0, // 禁用  禁止页面内相容参数名
    'object-shorthand': 0, // 禁用 禁止对象内使用带引号字符串
    'no-restricted-syntax': 0,
    "no-plusplus": 0, // 禁用 ++
    'consistent-return': 0, // 关闭箭头函数必须要return
    'no-return-assign': 0, // return 语句中不能有赋值表达式
    'global-require': 0,  // 关闭禁止使用requrie
    'prefer-promise-reject-errors': 0, //这条规则旨在确保承诺只被Error对象拒绝。
    "import/extensions": "off", // 禁用文件名详细文件类型后缀
    "react/jsx-props-no-spreading":0,
    "react/prefer-stateless-function":0
  },
};
