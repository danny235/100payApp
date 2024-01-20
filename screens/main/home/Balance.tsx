import React from 'react';
import {Pressable, View, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../components/Colors';
import {
  BoldText,
  LightText,
  MediumText,
} from '../../../components/styles/styledComponents';

export default function Balance(): React.JSX.Element {
  const {fontScale} = useWindowDimensions();
  return (
    <View
      style={{
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
      }}>
      <Pressable style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <MediumText style={{fontSize: 17 / fontScale}}>
          Pay token balance
        </MediumText>
        <Icon name="chevron-down" size={24} />
      </Pressable>
      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <BoldText style={{fontSize: 28 / fontScale, color: Colors.black}}>
           60,000
        </BoldText>
        <LightText style={{color: Colors.black}}>$PAY</LightText>
      </View>
    </View>
  );
}
