import PropTypes from 'prop-types';

import React, { Fragment, useState } from 'react';
import {isStr, simplifyFileName, trim, isFn } from '@xufeng-li/util';

const isZero = (val) => {
  return `${val}` === '0'
}

export const SquareMeterInfo = (props) => {
  const {info} = props;
  return (<span>{info||'---'}&nbsp;{info && '㎡'}</span>)
}

const defaultKayMap = {bedroomNum: 'bedroomNum', livingRoomNum: 'livingRoomNum', kitchenNum: 'kitchenNum', bathroomNum: 'bathroomNum', balconyNum: 'balconyNum'};

export const HouseType = (props) => {
  const {data, map = {}} = props;
  const keyMap = {...defaultKayMap,...map};
  const bedroom = data[keyMap.bedroomNum] || isZero(data[keyMap.bedroomNum]) ? data[keyMap.bedroomNum] : '--'
  const livingRoom = data[keyMap.livingRoomNum] || isZero(data[keyMap.livingRoomNum]) ? data[keyMap.livingRoomNum] : '--'
  const kitchen = data[keyMap.kitchenNum] || isZero(data[keyMap.kitchenNum]) ? data[keyMap.kitchenNum] : '--'
  const bathroom = data[keyMap.bathroomNum] || isZero(data[keyMap.bathroomNum]) ? data[keyMap.bathroomNum] : '--'
  const balconyNum = data[keyMap.balconyNum] || isZero(data[keyMap.balconyNum]) ? data[keyMap.balconyNum] : '--'
  return ( <span>{`${bedroom}室${livingRoom}厅${kitchen}厨${bathroom}卫${balconyNum}阳台`}</span>)
}

const defaultAreaKayMap = {provinceName: 'provinceName', cityName: 'cityName', districtName: 'districtName'};
const defaultAreaKayMapTwo = {provinceName: 'province', cityName: 'city', districtName: 'district'};

export const AreaInfo = (props) => {
  const {data, map = {}, address, mode='keyNoName'} = props;
  let keyMap = {...defaultAreaKayMap,...map};
  if(mode === 'keyNoName') {
    keyMap = {...defaultAreaKayMapTwo,...map}
  }
  const province = data[keyMap.provinceName] ? data[keyMap.provinceName] : '--'
  const city = data[keyMap.cityName] ? data[keyMap.cityName] : '--'
  const district = data[keyMap.districtName] ? data[keyMap.districtName] : ''  // 区可能没有
  return ( <span>{`${province}${city}${district}`}&nbsp;&nbsp;{address || null}</span>)
}

export const UpLoadInfo = (props) => {
  const {noHref, style = {}} = props;
  let {data} = props;
  if(!data || !data.length) return null;
  if(typeof data === 'string') data = [data]
  return (
    <Fragment>
      {
        data.map((ele, i) => {
          let extendStyle = {};
          if(i) {
            extendStyle.marginLeft = '15px'
          }
          extendStyle = {...extendStyle, ...style}
          if(noHref) {
            extendStyle.target = '_blank'
          }
          return (<a href={noHref ? 'javascript:void(0);' : ele} key={-i} rel="noopener noreferrer"><img src={ele} alt='pic' width='86px' style={{...extendStyle}} /></a>)
        })
      }
    </Fragment>)
}

export const VideoList = (props) => {
  const {style = {}} = props;
  let {list} = props;
  if(!list || !list.length) return null;
  if(typeof list === 'string') list = [list]
  return (
    <Fragment>
      {
        list.map((ele, i) => {
          let extendStyle = {width: 160, height: 120, style: {}};
          if(i) {
            extendStyle.style.marginLeft = '15px'
          }
          extendStyle = {...extendStyle, ...style}
          return (<video key={ele} style={{display: 'inline-block', ...extendStyle}} src={ele} controls="controls" />)
        })
      }
    </Fragment>)
}

export const MainPic = (props) => {
  const {style = {}, url, isPrivate} = props;
  const {width = 100, height = 86} = style;
  const w = `${width}`.replace(/px/, '');
  const h = `${height}`.replace(/px/, '');

  if(url && isPrivate) {
    return <a href={url} rel="noopener noreferrer" target="_blank"><img src={`${url}`} alt='pic' height='100px' width='86px' style={{...style}} /></a>
  }

  if(url) {
    return <a href={url} rel="noopener noreferrer" target="_blank"><img src={`${url}?x-oss-process=image/resize,m_fixed,h_${h},w_${w}`} alt='pic' height='100px' width='86px' style={{...style}} /></a>
  }
  return <a href='javascript:void(0);' rel="noopener noreferrer" target="_blank"><img src='https://asman-img.oss-cn-hangzhou.aliyuncs.com/noPic_0e7bffac7958f603a8b37fe3cda07499.png' alt='pic' height='100px' width='86px' style={{...style}} /></a>
}

export const UploadPreview = (props) => {
  const { value, height } = props;
  // eslint-disable-next-line prefer-const
  let {list = [], params = {}, style = {}, innerStyle = {}, ...rest} = props;

  if(!list || !list.length) {
    list = value;
  }
  if(!list) return null;
  const showImagePreview = () => {
    // eslint-disable-next-line no-underscore-dangle
    window.g_app._store.dispatch({
      type: 'global/showImagePreviewVisiable',
      payload: {list, params}
    });
  }

  innerStyle = height==null ? { ...innerStyle } : {...innerStyle, height }

  return (
    <div {...rest} style={{...style}} className='poi tc' onClick={()=>{showImagePreview()}}>
      {params.type === 'video' ? <VideoList list={list[0]} style={{...innerStyle}} /> : <UpLoadInfo style={{...innerStyle}} noHref data={list[0]} /> }
      <div className='bc tc'>共{list.length}{params.type === 'video' ? '个视频' : '张图片'}</div>
    </div>
  )
}

export const UrlLink = (props) => {
  let { list } = props;
  if(!list) return;
  if(isStr(list)) {
    list =  [list]
  }
  // eslint-disable-next-line consistent-return
  return list.map(ele => {
    const url = simplifyFileName(ele);
    return <div><a href={ele} rel="noopener noreferrer" target="_blank">{url}</a></div>
  })
}

export const BlankLink = (props) => {
  const { href, title } = props;
  return <a href={href} rel="noopener noreferrer" target="_blank">{ title || href }</a>
}

export const TitleInfo = (props) => {
  const { len, info,...rest}  = props;
  let tit = info;
  if(info.length && len && info.length >= len) {
    tit = `${tit.substring(0, len)  }...`;
  }
  return <span {...rest} title={info}>{tit}</span>
}

export const BuleWrapper = (props) => {
  const {info, text, color = '#0066FF'} = props;
  if(!info) return null;
  return <span><span style={{color}}>{info}</span>{text}</span>
}

export const Bule = (props) => {
  const {info, color = '#0066FF'} = props;
  if(!info) return null;
  return <span style={{color}}>{info}</span>
}

export const Red = (props) => {
  const {info, color = '#FF0000'} = props;
  if(!info) return null;
  return <span style={{color}}>{info}</span>
}



export const getColorWrapper = (props) => {
  const {info} = props;
  return info ? <BuleWrapper {...props} /> : null;
}

export const ShowMoreInfo = (props) => {
  const {info, len} = props;
  let initValue = '';
  let needSubstring = false;
  if(info && info.length > len) {
    initValue = `${info.substring(0, len)  }...`;
    needSubstring = true;
  } else {
    initValue = info
  }
  const [showInfo, setShowInfo] = useState(initValue);

  const isShowAll = () => showInfo === info

  const showMore = () => {
    setShowInfo(isShowAll() ? initValue : info)
  }

  return (
    <span>{showInfo} {needSubstring ? <span className='likeA' onClick={() => showMore()}>{isShowAll() ? '收起':'更多' }</span> : null} </span>
  )
}

/**
 * xx幢xxx单元xxxx
 * @param {*} props
 */
export const HouseDesc = (props) => {
  const { buildingNo, unitNo , roomNo } = props;
  return ( <span>{`${buildingNo || '--'}幢${unitNo || '--'}单元${roomNo || '--'}室`}</span>)
}


export const SomeRed = (props) => {
  const {info, keyWord} = props;
  if(!info || !keyWord) return info;
  const trimkey = trim(keyWord);
  const subIndex = info.indexOf(trimkey);
  if(subIndex === -1) return info;
  const start = info.substring(0, subIndex);
  const end = info.substring(subIndex + trimkey.length);
  return (<span>{start}<span style={{color: 'red'}}>{keyWord}</span>{end}</span>)
}
export const BuildingArea = (props) => {
  const { data  } = props;
  const { buildingName, houseCode, buildingNo, unitNo, roomNo} = data || {}
  return <span>{`${buildingName || '--'}${houseCode ? `${houseCode}户型` : ''}`} <br /> { buildingNo ? `${buildingNo || '--'}栋${unitNo || '--'}单元${roomNo || '--'}室` : ''}</span>
}

export const LRInfo = (props) => {
  const { title, info, width, hasColon = true, onClick, len } = props;
  let { titleStyle = {} } = props;
  if(len) {
    titleStyle = {...titleStyle, width: `${30 + 12*len}px`, textAlign: 'right'}
  }
  const titleProps ={
    style: width ? {...titleStyle, width, textAlign: 'right'} : {...titleStyle}
  }
  let infoProps = { }
  if(isFn(onClick)) {
    infoProps = {onClick}
  }
  if(!title) {
    return <div {...infoProps}>{info}</div>
  }
  return (<div className='df'><div className='g0' {...titleProps}>{title || ' -- '}&nbsp;{hasColon ? ':' : null} &nbsp;</div><div className='df flex1' {...infoProps}>{info !== 0 ? info || '---' : info}</div></div>)
};

export default LRInfo;
