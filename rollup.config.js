import path from 'path';

const cwd = process.cwd();
const pkgPath = path.resolve(cwd,'./package.json');
const pkg = require(pkgPath);

export default {
  // 要打包的文件源路径
  input: 'src/index.js',
  // 文件输出配置
  output: [
    {
      file: pkg.main,
      format: 'cjs', // 输出文件格式为CommonJS
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es', // 输出文件格式 es
      sourcemap: true
    },
  ],
  // 打包时忽略的文件
  external:[
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
  ],
  // 插件
  plugins: [
  ]
}
