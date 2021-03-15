import React from "react";
import PropTypes from "prop-types";

const Label = ({text})=> {
  return (
    <div>{text}</div>
  );
};
export default Label;

Label.propTypes = {
  /** 这是标签的内容 */
  text: PropTypes.string.isRequired
};
