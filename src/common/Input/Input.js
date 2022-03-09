import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  padding: 12px;
  border-radius: 12px;
  background-color: #f4f4f6;
  font-size: 18px;
`;

export default function Input({
  style,
  value,
  placeholder,
  onChangeText,
  ...props
}) {
  return (
    <TextInput
      style={style}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      selectionColor={"#9F9EA4"}
      {...props}
    />
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
};
