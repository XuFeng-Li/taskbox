import React, { Component, Fragment} from 'react';
import PropTypes from "prop-types";
import { Input } from 'antd';

class CombinInput extends Component {

  static getDerivedStateFromProps(nextProps, state) {
    if ('value' in nextProps) {
      const propsValue = nextProps.value || {};
      return {
        value: {...propsValue},
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      value: {roomNum: '', livingRoomNum: ''}
    };
  }

  inputChange = (obj) => {
    const {value} = this.state;
    const { onChange} = this.props;
    const extendValue = {...value, ...obj};
    console.log("*********************************");
    console.log(obj);
    if (onChange) {
      onChange(extendValue);
    } else {
      this.setState(extendValue);
    }
  };

  render() {
    const { disabled, width, setting = []} = this.props;
    const { value} = this.state;
    return (
      <div>
        {
          setting.map((ele, i) => {
            const {name, label} = ele;
            return (
              <Fragment
                key={-i}
              >
                <Input
                  placeholder='请输入'
                  value={value[name]}
                  disabled={!!disabled}
                  style={{
                    width: width || '40%',
                    background:'#F2F2F2',
                  }}
                  onChange={(e) => {
                    this.inputChange({[name]: e.target.value})
                  }}
                />
                &nbsp;{label}&nbsp;&nbsp;
              </Fragment>
            )
          })
        }
      </div>
    );
  }
}

export default CombinInput;

CombinInput.propTypes = {
  /**
   * 输入框是否禁用
   * */
  disabled:PropTypes.bool.isRequired,
  /**
   * 输入框的宽度
   * */
  width:PropTypes.string.isRequired,
  /**
   * 输入项列表
   * */
  setting:PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * 输入项名称
       * */
      name:PropTypes.string.isRequired,
      /**
       * 输入项标签名
       * */
      label:PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * 输入框的内容发送变化
   * */
  onChange:PropTypes.func.isRequired
};

CombinInput.defaultProps = {
  disabled:true,
  width:'50%',
  onChange:()=>{},
  setting:[
    {
      name:"标签",
      label:"标签名"
    }
  ]
};
