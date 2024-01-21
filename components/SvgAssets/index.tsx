import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ArrowRightIcon = ({
  width = 20,
  height = 20,
  color = '#ffffff',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
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
};

export const AddIcon = ({
  width = 20,
  height = 20,
  color = '#F20831',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
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

export const ArrowForwardIcon = ({
  width = 20,
  height = 20,
  color = '#F20831',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
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

export const ArrowBackwardIcon = ({
  width = 24,
  height = 24,
  color = '#6B7280',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const EyeLineIcon = ({
  width = 24,
  height = 24,
  color = '#6B7280',
}: Props) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      >
      <Path
        d="M12.1092 7.8916L7.89258 12.1083C7.35091 11.5666 7.01758 10.8249 7.01758 9.99993C7.01758 8.34993 8.35091 7.0166 10.0009 7.0166C10.8259 7.0166 11.5676 7.34994 12.1092 7.8916Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8499 4.8084C13.3915 3.7084 11.7249 3.1084 9.99987 3.1084C7.0582 3.1084 4.31654 4.84173 2.4082 7.84173C1.6582 9.01673 1.6582 10.9917 2.4082 12.1667C3.06654 13.2001 3.8332 14.0917 4.66654 14.8084"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.01758 16.2751C7.96758 16.6751 8.97591 16.8917 10.0009 16.8917C12.9426 16.8917 15.6842 15.1584 17.5926 12.1584C18.3426 10.9834 18.3426 9.0084 17.5926 7.8334C17.3176 7.40006 17.0176 6.99173 16.7092 6.6084"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.9242 10.5833C12.7076 11.7583 11.7492 12.7166 10.5742 12.9333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.89102 12.1084L1.66602 18.3334"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3324 1.66675L12.1074 7.89175"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const EyeIcon = ({
  width = 24,
  height = 24,
  color = '#6B7280',
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      >
      <Path
        opacity="0.4"
        d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.39997C18.8198 5.79997 15.5298 3.71997 11.9998 3.71997C8.46984 3.71997 5.17984 5.79997 2.88984 9.39997C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
