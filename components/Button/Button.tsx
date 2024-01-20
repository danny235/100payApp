import {ComponentProps} from 'react';
import styled from 'styled-components/native';
import {Colors} from '../Colors';
import { TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  isLarge?: boolean;
  isLoading?: boolean;
  isWide?: boolean;
} & TouchableOpacityProps;

const StyledButton = styled.Pressable<ButtonProps>`
  background-color: ${({variant}) =>
    variant === 'primary' ? Colors.primary : Colors.white};
  color: ${({variant}) =>
    variant === 'primary' ? Colors.white : Colors.primary};
  padding: ${({isLarge}) => (isLarge ? '20px' : '10px')};
  border: ${({variant}) =>
    variant === 'primary' ? 'none' : `2px solid ${Colors.ash}`};
  width: ${({isWide}) => (isWide ? '100%' : '48%')};
  border-radius: 20px;
  font-weight: 500;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export function Button({
  variant = 'primary',
  isLarge = false,
  isLoading = false,
  isWide = false,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      disabled={isLoading}
      variant={variant}
      isLarge={isLarge}
      isWide={isWide}
      {...props}
    />
  );
}