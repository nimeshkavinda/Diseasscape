import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Platform } from "react-native";

const StyledText = styled.Text`
  ${Platform.OS === "android" ? `font-family: ${"Inter"}` : ""}
`;

export default function Text({ children, style, ...props }) {
  return (
    <StyledText style={style} {...props}>
      {children}
    </StyledText>
  );
}

Text.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
};
