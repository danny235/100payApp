import { View, Text, Image, useWindowDimensions, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import CustomView from '../../components/Views/CustomView'
import PayLogo from '../../assets/images/payLogo.png';
import { BoldText, LightText } from '../../components/styles/styledComponents';
import { Colors } from '../../components/Colors';

export default function RootAuth() {
    const {fontScale} = useWindowDimensions()
  return (
    <CustomView>
      <Image
        resizeMode="contain"
        source={PayLogo}
        style={{
          width: '30%',
          aspectRatio: 2.4 / 0.5,
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 20
        }}
      />

      <View style={{marginTop: 50, gap: 20}}>
        <BoldText style={{fontSize: 17 / fontScale, width: '70%'}}>
          Welcome to the 100pay experience
        </BoldText>
        <LightText style={{fontSize: 14 / fontScale, width: '70%'}}>
          Join us to take part in the best digital payment experience ever
          created.
        </LightText>

        <Pressable style={styles.clickBox}>
          <View style={styles.textWrapper}>
            <BoldText style={{fontSize: 15 / fontScale, width: '70%'}}>
              Welcome to the 100pay experience
            </BoldText>
            <LightText style={{fontSize: 13 / fontScale, width: '70%'}}>
              Join us to take part in the best digital payment experience ever
              created.
            </LightText>
          </View>
          <View style={styles.coloredWrapper}>

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
        justifyContent: "space-between"
    },
    textWrapper: {
      gap: 10,
    },
    coloredWrapper: {
      flexDirection: "row",
      gap: 8,
      alignItems: "center"
    }
})