import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Platform } from "react-native";
import colors from "../../theme/colors";

const StyledText = styled.Text`
  color: ${colors.error.primary};
  ${Platform.OS === "android" ? `font-family: ${"Inter"}` : ""};
`;

export default function ValidationText({ children, style, ...props }) {
  return (
    <StyledText style={style} {...props}>
      {children}
    </StyledText>
  );
}

ValidationText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
};
