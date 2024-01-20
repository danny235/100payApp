import React from 'react'
import { Path, Svg } from 'react-native-svg';

interface Props {
    width?: number,
    height?: number,
    color?: string
}

export const ArrowRightIcon = ({width=20, height=20, color="#ffffff"}: Props) => {
    return (
      <Svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
       >
        <Path
          d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          opacity="0.4"
          d="M2.91602 10H16.941"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
}

export const AddIcon = ({width = 20, height = 20, color = '#F20831'}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      >
      <Path
        opacity="0.4"
        d="M5 10H15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 15V5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ArrowForwardIcon = ({width = 20, height = 20, color = '#F20831'}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      >
      <Path
        d="M7.42578 16.5999L12.8591 11.1666C13.5008 10.5249 13.5008 9.4749 12.8591 8.83324L7.42578 3.3999"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
