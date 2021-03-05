import React from 'react';
import PropTypes from "prop-types";
import { parse, stringify } from 'qs';

import {FormatWan} from './formatWan/FormatWan';
export {
  FormatWan,
};

export const fixedZero = (val) => {
  return val * 1 < 10 ? `0${val}` : val;
};
fixedZero.PropTypes = {
  val: PropTypes.number.isRequired
};

export function getPlainNode(nodeList, parentPath = '') {
  const arr = [];
  nodeList.forEach(node => {
    const item = node;
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  }
  if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

function getRenderArr(routes) {
  let renderArr = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
  return renderRoutes;
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function getQueryPath(path = '', query = {}) {
  const search = stringify(query);
  if (search.length) {
    return `${path}?${search}`;
  }
  return path;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}


/** 给官方演示站点用，用于关闭真实开发环境不需要使用的特性 */
export function isAntdPro() {
  return window.location.hostname === 'preview.pro.ant.design';
}

// 类型判断
// const isType = type => obj =>
//   obj != null && Object.prototype.toString.call(obj) === `[object ${type}]`;

const isType = type => {
  return obj => {
    return obj != null && Object.prototype.toString.call(obj) === `[object ${type}]`;
  };
};

export const isFn = isType('Function');
export const isArr = Array.isArray || isType('Array');
export const isPlainObj = isType('Object');
export const isStr = isType('String');
export const isBool = isType('Boolean');
export const isNum = isType('Number');
export const isObj = val => typeof val === 'object';
export const isRegExp = isType('RegExp');

export const isEmpty = (val) => {
  if(!val && !isNum(val)) {
    return true
  }
}


export const isEmptyArr = (list) => {
  if(!isArr(list)) return;
  return list.every(ele => isEmpty(ele));
}

export const filterRender = (val, children) => {
  return isEmpty(val) ? '--' :  children || val
}

export const filterEmptyAttr = (obj) => {
  if(!isObj(obj)) return obj;
  Object.keys(obj).forEach(ele => {
    if(isEmpty(obj[ele])) delete obj[ele];
  })
  return obj;
}

/**
 * 例如
 * https://XXX/测试文件_6bd8d67918157897f68728b369caaa14.jpeg  ===> 测试文件.jpeg
 * https://XXX/6bd8d67918157897f68728b369caaa14.jpeg  ===> 6bd8d67918157897f68728b369caaa14.jpeg
 */
export function simplifyFileName(url, code) {
  const index = url.indexOf('_');
  const nameStartIndex = url.lastIndexOf('/');
  if (typeof url !== 'string') {
    return url;
  }
  if (index < 0) {
    return url.substring(nameStartIndex + 1); // 直接返回文件名
  }
  const extensionName = url.substring(url.lastIndexOf('.')); // 扩展名
  const nameEndIndex = url.lastIndexOf('_');
  const retStr = url.substring(nameStartIndex + 1, nameEndIndex);
  if (code * 1 !== 4) {
    return retStr + extensionName.substring(0, extensionName.indexOf('?'));
  }
  return retStr + extensionName;
}

// 后台返回的是 [url], 转化成 {url: '', name: '', status: 'done', uid: ''} 的形式
export function simplifyUrlMapToFileList(arr, code) {
  if (!arr || !arr.length) {
    return arr;
  }
  if (typeof arr === 'string') {
    arr = [arr];
  }
  const data = arr.map((urlStr, i) => {
    if (typeof urlStr !== 'string') {
      return urlStr;
    }
    const element = {};
    // console.log(urlStr, 123);
    // const index = urlStr.lastIndexOf('/');
    element.uid = -i + 10;
    element.status = 'done';
    element.name = simplifyFileName(urlStr, code); // urlStr.substring(index + 1);
    element.url = urlStr;
    return element;
  });
  // debugger
  return data;
}

// 后台返回的是 [url], 转化成 {url: '', name: '', status: 'done', uid: ''} 的形式
export function urlMapToFileList(arr) {
  if (!arr || !arr.length) {
    return arr;
  }
  if (typeof arr === 'string') {
    arr = [arr];
  }
  const data = arr.map((urlStr, i) => {
    if (typeof urlStr !== 'string') {
      return urlStr;
    }
    const element = {};
    // console.log(urlStr, 123);
    const index = urlStr.lastIndexOf('/');
    element.uid = -i + 10;
    element.status = 'done';
    element.name = urlStr.substring(index + 1);
    element.url = urlStr;
    return element;
  });
  // debugger
  return data;
}

// 返回url对应的文件名
export function urlMapToFile(urlStr) {
  if (typeof urlStr !== 'string') {
    return urlStr;
  }
  const index = urlStr.lastIndexOf('/');
  return urlStr.substring(index + 1);
}

export function fileListTourlMap(arr) {
  if (!arr || !arr.length) {
    return arr;
  }
  const data = arr.map(ele => ele.url || null);
  return data.filter(ele => ele);
}

export function transformServerDataForDefaultTreeData(data) {
  const Tdata = {};
  let childMeun = [];
  let childFunList = [];
  Tdata.title = data.name;
  Tdata.value = data.token;
  Tdata.key = data.token;
  Tdata.children = [];
  if (data.childMenuDefList && data.childMenuDefList.length) {
    childMeun = data.childMenuDefList.map(chidData =>
      transformServerDataForDefaultTreeData(chidData)
    );
  }
  if (data.funList && data.funList.length) {
    childFunList = data.funList.map(chidData => transformServerDataForDefaultTreeData(chidData));
  }
  Tdata.children = Tdata.children.concat(childMeun).concat(childFunList);
  return Tdata;
}

export function trim(str = '') {
  if (!isStr(str)) return str;
  return str.replace(/^\s+|\s+$/g, '');
}

export function beforeTrim(str = '') {
  return str.replace(/^\s+/g, '');
}

export function trimFormValue(formDate, excludeArr = []) {
  const copyFormDate = { ...formDate };
  Object.keys(copyFormDate).forEach(ele => {
    if (excludeArr.indexOf(copyFormDate[ele]) > -1) return;
    if (typeof copyFormDate[ele] === 'string') {
      copyFormDate[ele] = trim(copyFormDate[ele]);
    }
  });
  return copyFormDate;
}

export function mapToObject(list, key) {
  if (!list || !list.length) return list;
  const data = {};
  list.forEach(ele => {
    data[ele[key]] = ele;
  });
  return data;
}

export function beforeFieldsToRedux(fields, actions) {
  if (!fields) return fields;
  const backData = {};
  let isOrigin = true;
  const fAction = isArr(actions);
  Object.keys(fields).forEach((ele, i) => {
    const data = fields[ele];
    if (!fAction) {
      if (data.name && isOrigin) {
        backData[ele] = data.value;
      } else {
        isOrigin = false;
        backData[data.name || ele] = beforeFieldsToRedux(backData[ele]);
      }
    } else {
      let toAddAttr = true;
      if (data.name) {
        for (const ac of actions) {
          if (!data[ac]) {
            toAddAttr = false;
            break;
          }
        }
      }
      if (toAddAttr) {
        if (data.name && isOrigin) {
          backData[data.name || ele] = data.value;
        } else if (data.name && !isOrigin) {
          backData[ele] = data.value;
        } else {
          isOrigin = false;
          backData[data.name || ele] = beforeFieldsToRedux(data);
        }
      }
    }
  });
  return backData;
}

// 添加了dirty和touched判断
export function fieldsToRedux(fields) {
  return beforeFieldsToRedux(fields, ['touched', 'dirty']);
}

export function assignObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function arrayFilterSame(list) {
  if (!list || !list.length) return;
  const hasMap = {};
  const backList = [];
  list.forEach((ele, i) => {
    if (!hasMap[ele]) {
      backList.push(ele);
    }
    hasMap[ele] = ele;
  });
  return backList;
}

export function arrayDelOne(list, one, changeOrigin) {
  if (!list || !list.length) return list;
  const index = list.indexOf(one);
  if (index === -1) return list;
  if (changeOrigin) {
    list.splice(index, 1);
    return list;
  }
  const copyList = [...list];
  copyList.splice(index, 1);
  return copyList;
}

export function arrayHasSame(list) {
  if (!list || !list.length) return false;
  const hasMap = {};
  let hasSame = false;
  for (let i = 0; i < list.length; i++) {
    const value = list[i];
    if (hasMap[value]) {
      hasSame = true;
      break;
    }
    hasMap[value] = value;
  }
  return hasSame;
}

// 获取深层object指定的值
export function findDataByKey(data, key) {
  if (!key) return data;
  const keys = key.split('.');
  let backData = data;
  for (let i = 0; i < keys.length; i++) {
    if (!backData[keys[i]]) break;
    backData = data[keys[i]];
  }
  return backData;
}

// 分转化为元
export function MinuteToyuan(value) {
  if(value === null) return value;
  return value / 100;
}

export function YuanAndMinuteReverse(data, keys, backYuan) {
  if (!keys) return data;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let value = null;
    if (backYuan) {
      value = MinuteToyuan(data[key]);
    } else {
      value = yuanToMinute(data[key]);
    }
    if (key in data) {
      data[key] = value;
    }
  }
}

export function minuteToyuanStr(minute, noText) {
  const text = noText ? '' : ' 元';
  if (!minute) return `0.00${text}`;
  const yuanStr = `${minute / 100}`;
  const yuans = yuanStr.split('.');
  const yuanPart = yuans[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${yuanPart}.${yuans[1] ? `${yuans[1]}00`.substring(0, 2) : '00'}${text}`;
}
// 分转元
export const fen2yuan = (fen, len = 2) => {
  const flag = /[￥¥]/.test(`${fen  }`);
  const money = (parseInt(fen, 10) / 100).toFixed(len) - 0;
  return flag ? `¥${money}` : money;
};
// 元转分
export const yuan2fen = yuan => {
  const flag = /[￥¥]/.test(`${yuan  }`);
  const money = (+yuan * 100).toFixed(0) - 0;
  return flag ? `¥${money}` : money;
};

// 分转万
export const fen2wan = (fen, len = 1) => {
  const flag = /[￥¥]/.test(`${fen  }`);
  const money = (Math.floor((parseInt(fen, 10) / 1000000) * 10) / 10).toFixed(len) - 0;
  return flag ? `¥${money}` : money;
};

export function getYuanStr(yuan, noText) {
  const text = noText ? '' : ' 元';
  if (!yuan) return `0.00${text}`;
  const yuanStr = `${yuan}`;
  const yuans = yuanStr.split('.');
  const yuanPart = yuans[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${yuanPart}.${yuans[1] ? `${yuans[1]}00`.substring(0, 2) : '00'}${text}`;
}

export function valuesToFileds(values) {
  if(!values || !isObj(values)) return values;
  const backData = {};
  Object.keys(values).forEach(ele => {
    backData[ele] = { value: values[ele] };
  });
  return backData;
}

// 选取 object的部分属性
export const pickSomeAttr = (obj, attrs = []) => {
  if (!obj) return obj;
  const backObj = {};
  const deepCopyObj = assignObj(obj);
  attrs.forEach((ele, i) => {
    backObj[ele] = deepCopyObj[ele];
  });
  return backObj;
};

// eg: mapObj==> {id: 'value', list='children', name: 'title'} 映射一些属性值 **
export const mapSomeAttr = (obj, mapObj = {}, extendObjFn) => {
  if (!obj) return obj;
  let backObj = null;
  const keys = Object.keys(mapObj);

  const mapObjToNew = (data, leval) => {
    let backData = {};
    if (isFn(extendObjFn)) {
      backData = extendObjFn(leval, data) || {};
    }

    for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in data)) continue;
      const key = keys[i];
      const mapKey = mapObj[key];
      const value = data[key];

      if (isArr(value) && key !== 'all_connect') {
        backData[mapKey] = value.map(ele => mapObjToNew(ele, leval + 1));
      } else {
        backData[mapKey] = value;
      }
    }
    return backData;
  };

  if (isArr(obj)) {
    backObj = obj.map(ele => mapObjToNew(ele, 1));
  } else {
    backObj = mapObjToNew(obj);
  }

  return backObj;
};

// eg: mapObj==> {id: 'value', list='children', name: 'title'} 映射一些属性值 **
export const mapSomeAttrWithParents = (obj, mapObj = {}, pMap = [], key) => {
  if (!obj) return obj;
  let backObj = null;
  const keyMap = {};
  const keys = Object.keys(mapObj);

  const mapObjToNew = (data, leval, pdata) => {
    const backData = {};

    const pickObj = pickSomeAttr(data, pMap);
    if (pdata) {
      backData.all_connect = [...pdata, pickObj];
    } else {
      backData.all_connect = [pickObj];
    }
    keyMap[data[key]] = backData.all_connect;

    for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in data)) continue;
      const keyValue = keys[i];
      const mapKey = mapObj[keyValue];
      const value = data[keyValue];

      if (isArr(value)) {
        backData[mapKey] = value.map(ele => mapObjToNew(ele, leval + 1, backData.all_connect));
      } else {
        backData[mapKey] = `${value}`;
      }
    }
    return backData;
  };

  if (isArr(obj)) {
    backObj = obj.map(ele => mapObjToNew(ele, 1));
  } else {
    backObj = mapObjToNew(obj);
  }
  return { backData: backObj, keyMap };
};

const pickListSomeAttr = (list, attrs = []) => {
  if (isArr(list)) {
    return list.map(ele => pickSomeAttr(ele, attrs));
  }
};

export const pickAttr = (obj, attrs = []) => {
  let backData = null;
  if (isArr(obj)) {
    backData = pickListSomeAttr(obj, attrs);
  } else {
    backData = pickSomeAttr(obj, attrs);
  }
  return backData;
};

export const getSearchFormProperties = (columns, extendFields = {}, filter) => {
  const columnsFields = columns.filter(ele => {
    if (filter) {
      return filter(ele.fieldProps, ele);
    }
    return ele.fieldProps;
  });
  const jsonSchemaProperties = {};
  columnsFields.forEach(ele => {
    const data = pickSomeAttr(ele, ['title', 'dataIndex', 'fieldProps']);
    const filed = {
      dataIndex: data.dataIndex,
      name: data.dataIndex,
      title: data.title,
      ...data.fieldProps,
    };
    jsonSchemaProperties[filed.dataIndex] = filed;
  });
  return { ...jsonSchemaProperties, ...extendFields };
};

export const validateFormListFields = formMaps => {
  if (!isPlainObj(formMaps)) {
    return null;
  }
  let error = false;
  const values = [];
  Object.keys(formMaps).forEach(ele => {
    formMaps[ele].validateFields((hasErr, value) => {
      if (hasErr) {
        error = true;
        values.push({ ...value, error });
      } else {
        values.push({ ...value });
      }
    });
  });
  return {
    error,
    values,
  };
};

export const extendXprops = (columns, name, extendData) => {
  const objMap = mapToObject(columns, 'dataIndex');
  if (objMap[name]) {
    const data = objMap[name].fieldProps['x-props'];
    objMap[name].fieldProps['x-props'] = { ...data, ...extendData };
  }
};

export const doneMaxDo = (num, callback) => {
  let time = 0;
  const values = [];
  return value => {
    time += 1;
    values.push(value);
    if (time === num && callback) {
      callback(values);
    }
  };
};

export const stringifySome = (data, keys) => {
  if (!isObj(data)) return;
  if (isArr(keys)) {
    keys.forEach(ele => {
      if (isObj(data[ele])) {
        data[ele] = JSON.stringify(data[ele]);
      }
    });
  } else {
    Object.keys(data).forEach(ele => {
      const value = data[ele];
      if (isObj(value)) {
        data[ele] = JSON.stringify(value);
      }
    });
  }
  // eslint-disable-next-line consistent-return
  return data;
};

export const dateSplit = (data, noTime) => {
  if (!data) return data;
  const [da, time] = data.split(' ');
  return noTime ? (
    <span>{da}</span>
  ) : (
    <span>
      {da}
      <br />
      {time}
    </span>
  );
};

export /**
 *
 *
 * @param {*} str 要拆分的string
 * @param {*} number 保留多少个string
 * @param {boolean} [ellipsis=false] 如果大于 number, 是否展示...
 * @returns
 */
const strSplit = (str, number, ellipsis = true) => {
  if (typeof str !== 'string') return str;
  const {length} = str;
  if (length > number) {
    const formatedStr = `${str.slice(0, number)  }...`;
    return formatedStr;
  }
  return str;
};

export const isImage = value => {
  const exp = /\w(\.gif|\.jpeg|\.png|\.jpg|\.bmp)/i;
  return exp.test(value);
};

export const listPlusByKey = key => {
  const backList = [];
  return (list = []) => {
    const backListMap = backList.length ? mapToObject(backList, key) : {};
    for (let i = 0; i < list.length; i++) {
      const data = list[i];
      if (!backListMap[data[key]]) {
        backList.push(data);
      }
    }
    return backList;
  };
};
/**
 * 对象的值进行包装: { name: 'xx'} to { name: { value: 'xx'}}
 * 主要用于把普通对象初始化成 formFields 对象
 * @param {*} obj
 * @param {*} key
 */
export const wrapperByKey = (obj, keyName = 'value') => {
  const result = {};
  const keys = Object.keys(obj);
  keys.forEach(key => {
    result[key] = {
      [keyName]: obj[key],
    };
  });
  return result;
};

export const isUNaN = value => `${trim(value)}` === '' || isNaN(value);

function convertBase64ToBlob(base64) {
  const base64Arr = base64.split(',');
  const [content, contentTwo] = base64Arr;
  let type = '';
  let base64String = '';
  if (contentTwo) {
    // 如果是图片base64，去掉头信息
    base64String = contentTwo;
    type = base64Arr[0].substring(base64Arr[0].indexOf(':') + 1, base64Arr[0].indexOf(';'));
  } else {
    base64String = content;
    type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  }
  // 将base64解码
  const bytes = atob(base64String);
  // var bytes = base64;
  const uInt8Array = new Uint8Array(bytes.length);

  // 将base64转换为ascii码
  for (let i = 0; i < bytes.length; i++) {
    uInt8Array[i] = bytes.charCodeAt(i);
  }

  // 生成Blob对象（文件对象）
  return new Blob([uInt8Array], { type });
}

export const downLoadFile = (base64, fileName) => {
  const blob = convertBase64ToBlob(base64);
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = objectUrl;
  a.download = fileName || '导入excel';
  a.click();
  document.body.removeChild(a);
};

export const downLoadFileByBlob = (blob, fileName) => {
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = objectUrl;
  a.download = fileName || '导入excel';
  a.click();
  document.body.removeChild(a);
};

/**
 * 对象的值使用函进行包装: { name: 'xx'} to { name: Form.createFormField({ value: 'xx'})}
 * 主要用于对 formFields 封装
 * @param {*} obj
 * @param {*} func
 */
export const wrapperByFunc = (obj, func) => {
  const result = {};
  const keys = Object.keys(obj);
  keys.forEach(key => {
    result[key] = func(obj[key]);
  });
  return result;
};

/**
 * formFields 转化为普通对象: { name: { value: 'xx'}} to { name: 'xx'}
 * 主要用于把普通对象初始化成 formFields 对象
 * @param {*} obj
 * @param {*} key
 */
export const fieldsToData = fields => {
  const result = {};
  const keys = Object.keys(fields);
  keys.forEach(key => {
    result[key] = fields[key].value;
  });
  return result;
};

// 分转万
export const fenToWan = (fen, decimal = 2, afterfix = '') => {
  if (!fen) return fen;
  const result = (fen / 1000000).toFixed(decimal);
  return `${result}${afterfix}`;
};

// 获取文件的后缀名
export const getFileTypeByName = (name) => {
  const index = name.lastIndexOf('.');
  return name.slice(index);
};

export const StoriesDiv = ({child,prop}) => {
  return (
    <div>
      {child}
    </div>
  );
};
