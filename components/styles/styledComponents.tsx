import { Pressable, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Colors } from "../Colors";
import React from "react";

type IndicatorT = {
    isActive: boolean
}

const PrimaryButton = styled(Pressable)`
    border-radius: 8px;
    background-color: ${Colors.primary};
    color: ${Colors.white};
    width: 100%;
    align-items: center;
    justify-content: center;
    aspect-ratio: 2 / 0.3;
    flex-direction: row;
    gap: 5px;
`;

const IndicatorsWrappers = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`

const Indicator = styled.View<IndicatorT>`
    background-color: ${({isActive})=>(isActive ? Colors.primary : Colors.secondary)};
    width: ${({isActive})=> (isActive ? "30px" :"10px")};
    border-radius: 10px;
    height: 10px;
`;

const BoldText = styled.Text`
  font-family: SpaceGrotesk-Bold;
`;

const RegularText = styled.Text`
    font-family: SpaceGrotesk-Regular;
`;

const LightText = styled.Text`
    font-family: SpaceGrotesk-Light;
`;

const MediumText = styled.Text`
    font-family: SpaceGrotesk-Medium;
`;

const SemiBoldText = styled.Text`
    font-family: SpaceGrotesk-SemiBold;
`;



export {
    PrimaryButton,
    IndicatorsWrappers,
    Indicator,
    BoldText,
    RegularText,
    LightText,
    MediumText,
    SemiBoldText
}