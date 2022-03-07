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
    case "link":
      return `transparent`;
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
    case "link":
      return `${colors.secondary.text}`;
    default:
      return `${colors.primary.text}`;
  }
};

const ButtonContainer = styled.TouchableOpacity`
  height: 60px;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant }) => backgroundColor(variant)};
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({ variant }) => textColor(variant)};
`;

export default function Button({ title, onPress, style, variant = "primary" }) {
  return (
    <ButtonContainer variant={variant} style={style} onPress={onPress}>
      <Title variant={variant} style={style}>
        {title}
      </Title>
    </ButtonContainer>
  );
}

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  onPress: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "link"]),
};
