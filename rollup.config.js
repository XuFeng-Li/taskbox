import babel from 'rollup-plugin-babel'; // 需要使用最新JS语法，babel 转码
// import commonjs from 'rollup-plugin-commonjs'; // rollup-plugin-node-resolve 插件可以解决 ES6模块的查找导入，但是npm中的大多数包都是以CommonJS模块的形式出现的，所以需要使用这个插件将CommonJS模块转换为 ES2015 供 Rollup 处理
// import external from 'rollup-plugin-peer-deps-external'; // 打包的时候排除external列表中的包，作为外部依赖
import postcss from 'rollup-plugin-postcss';
// import resolve from 'rollup-plugin-node-resolve'; // 帮助 Rollup 查找外部模块，然后安装
import json from "rollup-plugin-json";
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
// import { terser } from "rollup-plugin-terser";
import path from 'path';
const cwd = process.cwd();
const pkgPath = path.resolve(cwd, './package.json');
const pkg = require(pkgPath);
const mainPkg = require('./package.json');

const externals = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];

export default {
  input: 'src/FormatWan.js',
  external: externals,  // 需要处理成外部包引用列表
  output: [
    {
      file: mainPkg.main,
      format: 'cjs', // 输出文件格式为CommonJS
      sourcemap: true,
    },
    // { file: mainPkg.min, format: "cjs", plugins: [terser()] }, // 非浏览器里用的UMD的包，压缩也不需要
    {
      file: mainPkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    // TODO: 不打UMD的包不需要这两个
    // resolve(),
    // commonjs(), // 将CommonJS模块转换为ES6，以便rollup打包
    postcss({
      modules: true,
      exec: true,
      plugins: [autoprefixer, cssnano],
      extract: 'dist/css/bundle.css',
      use : [
        ['less', { javascriptEnabled: true }]
      ],
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    json(),
  ]
};
