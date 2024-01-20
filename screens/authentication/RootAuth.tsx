import { View, Text, Image, useWindowDimensions, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import CustomView from '../../components/Views/CustomView'
import PayLogo from '../../assets/images/payLogo.png';
import { BoldText, LightText, MediumText } from '../../components/styles/styledComponents';
import { Colors } from '../../components/Colors';
import { AddIcon, ArrowForwardIcon } from '../../components/SvgAssets';

export default function RootAuth() {
    const {fontScale} = useWindowDimensions()
  return (
    <CustomView>
      <Image
        resizeMode="contain"
        source={PayLogo}
        style={{
          width: '30%',
          aspectRatio: 2.4 / 0.9,
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 60
        }}
      />

      <View style={{marginTop: 50, gap: 20}}>
        <BoldText style={{fontSize: 17 / fontScale, flexShrink: 1}}>
          Welcome to the 100pay experience
        </BoldText>
        <LightText style={{fontSize: 14 / fontScale, flexShrink: 1}}>
          Join us to take part in the best digital payment experience ever
          created.
        </LightText>

        <Pressable style={styles.clickBox}>
          <View style={styles.textWrapper}>
            <BoldText style={{fontSize: 15 / fontScale, flexShrink: 1}}>
              Welcome to the 100pay experience
            </BoldText>
            <LightText style={{fontSize: 13 / fontScale, flexShrink: 1}}>
              Join us to take part in the best digital payment experience ever
              created.
            </LightText>
          </View>
          <View style={styles.coloredWrapper}>
            <MediumText
              style={{
                fontSize: 12 / fontScale,
                color: Colors.primary,
              }}>
              Create
            </MediumText>
            <AddIcon />
          </View>
        </Pressable>
        <Pressable style={styles.clickBox}>
          <View style={styles.textWrapper}>
            <BoldText style={{fontSize: 15 / fontScale, flexShrink: 1}}>
              Sign in to your account
            </BoldText>
            <LightText style={{fontSize: 13 / fontScale, flexShrink: 1}}>
              Continue your amazing payment experience
            </LightText>
          </View>
          <View style={styles.coloredWrapper}>
            <MediumText
              style={{
                fontSize: 12 / fontScale,
                color: Colors.primary,
              }}>
              Sign in
            </MediumText>
            <ArrowForwardIcon />
          </View>
        </Pressable>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
    clickBox: {
        borderWidth: 1,
        borderColor: Colors.ash,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: "100%",
        borderRadius: 10,
        flexDirection: "row",
        flexShrink: 1,
        alignItems: "center"
    },
    textWrapper: {
      gap: 10,
      width: "70%",
    },
    coloredWrapper: {
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      backgroundColor: Colors.primaryLight,
      paddingHorizontal: 14,
      borderRadius: 50,
      justifyContent: "center",
      paddingVertical: 7
    },
})