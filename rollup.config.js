import babel from 'rollup-plugin-babel'; // 需要使用最新JS语法，babel 转码
import postcss from 'rollup-plugin-postcss';
// import resolve from 'rollup-plugin-node-resolve'; // 帮助 Rollup 查找外部模块，然后安装
import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
// import { terser } from "rollup-plugin-terser";
import path from 'path';
import {terser} from "rollup-plugin-terser";
const cwd = process.cwd();
const pkgPath = path.resolve(cwd, './package.json');
const pkg = require(pkgPath);


const externals = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];
var output = [];
if (pkg.main) {
  output = [
    ...output,
    {
      file: pkg.main,
      format: 'cjs', // 输出文件格式为CommonJS
      sourcemap: false,
    }
  ];
  console.log("********************  main");
  console.log(output);
}
if (pkg.module) {
  output = [
    ...output,
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: false,
    }
  ];
  console.log("********************  module");
  console.log(output);
}
if (pkg.min && pkg.minName) {
  output = [
    ...output,
    {
      file: pkg.min,
      format:'umd',
      sourcemap:false,
      name:pkg.minName,
      plugins:[
        terser()
      ]
    }
  ];
  console.log("********************  min");
  console.log(output);
}

export default {
  input: 'src/index.js',
  external: externals,  // 需要处理成外部包引用列表
  output: output,
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
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module:'ESNext',
        }
      },
      useTsconfigDeclarationDir: true, /* 使用 txconfig中声明的文件目录配置 */
    })
  ]
};
