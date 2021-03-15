import React, { Component, Fragment} from 'react';
import { Select, } from 'antd';
import PropTypes from "prop-types";
const { Option } = Select;
class CombinSelect extends Component {

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
      value: {
        roomNum: '12',
        livingRoomNum: '23'
      }
    };
  }

  selectChange = (obj) => {
    const {value} = this.state;
    const { onChange} = this.props;
    const extendValue = {...value, ...obj};
    if (onChange) {
      onChange(extendValue);
    } else {
      this.setState(extendValue);
    }
  };

  render() {
    const { disabled, width, setting = [] } = this.props;
    const { value } = this.state;
    return (
      <div className="HouseTypeSelect">
        {setting.map((ele, i) => {
          const {name, label, options} = ele;
          return (
            <div
              key={-i}
              style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'flex-start',
              }}
            >
              <Select
                disabled={disabled}
                value={value[name]}
                onChange={(val) => {
                  this.selectChange({
                    [name]: val,
                  });
                }}
                style={{
                  width: width || '40%',
                }}
              >
                {
                  options.map((op, k) => {
                    return (
                      <Option
                        key={-k}
                        value={op.value}
                        disabled={false}
                      >
                        {op.label || op.value}
                      </Option>
                    );
                  })
                }
              </Select>
              <label
                style={{
                  marginLeft:'20px',
                }}
              >
                {label}
              </label>
            </div>
          )
        })}
      </div>
    );
  }
}

export default CombinSelect;

CombinSelect.propTypes = {
  /**
   * 下拉框是否禁用
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
      options:PropTypes.arrayOf(
        PropTypes.shape({
          label:PropTypes.string.isRequired,
          value:PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  /**
   * 输入框的内容发送变化
   * */
  onChange:PropTypes.func.isRequired
};

CombinSelect.defaultProps = {
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
