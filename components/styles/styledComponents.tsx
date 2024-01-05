import { Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Colors } from "../Colors";
import React from "react";

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
`


export {
    PrimaryButton
}