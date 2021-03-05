import PropTypes from "prop-types";
import React from "react";

export const FormatWan = ({val}) => {
  const v = val * 1;
  if (!v || Number.isNaN(v)){
    return (<span>{v} is NaN</span>);
  };

  let result = val;
  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = (
      <span>
        {result}
        <span
          style={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2,
          }}
        >
          万
        </span>
      </span>
    );
  }
  return result;
};
formatWan.PropTypes = {
  val:PropTypes.number.isRequired,
};
