import { Platform } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import colors from "../../theme/colors";

const backgroundColor = (variant) => {
  switch (variant) {
    case "primary":
      return `${colors.primary.bg}`;
    case "secondary":
      return `${colors.secondary.bg}`;
    default:
      return `${colors.primary.bg}`;
  }
};

const textColor = (variant) => {
  switch (variant) {
    case "primary":
      return `${colors.primary.text}`;
    case "secondary":
      return `${colors.secondary.text}`;
    default:
      return `${colors.primary.text}`;
  }
};

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant }) => backgroundColor(variant)};
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: ${Platform.OS === "android" ? "bold" : 600};
  color: ${({ variant }) => textColor(variant)};
`;

export default function CTAButton({
  title,
  onPress,
  style,
  variant = "primary",
}) {
  return (
    <Button variant={variant} style={style} onPress={onPress}>
      <Title variant={variant} style={style}>
        {title}
      </Title>
    </Button>
  );
}

CTAButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  onPress: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
