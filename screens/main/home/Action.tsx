import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { BoldText, LightText, MediumText } from '../../../components/styles/styledComponents'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '../../../components/Colors'

export default function Action(): React.JSX.Element {
    const {fontScale} = useWindowDimensions()
  return (
    <View style={{gap: 20, paddingVertical: 20}}>
      <Pressable style={styles.btn}>
        <View style={{gap: 10}}>
            <MediumText style={{fontSize: 17 / fontScale, color: Colors.black}}>Send</MediumText>
            <LightText>Send funds to other users</LightText>
        </View>
        <Icon name="upload" size={24} color={Colors.error5} />
      </Pressable>
      <Pressable style={styles.btn}>
        <View style={{gap: 10}}>
            <MediumText style={{fontSize: 17 / fontScale, color: Colors.black}}>Recieve</MediumText>
            <LightText>Recieve funds to other users</LightText>
        </View>
        <Icon name="download" size={24} color={Colors.success500} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 100,
        borderRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.whiteShade
    }
})